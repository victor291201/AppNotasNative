/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState,useContext} from "react";
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   TextInput,
   Button,
   View,
 } from 'react-native';
 import Navbar from "../fragmentos/navbar";
 import DatePicker from "../fragmentos/DatePicker";
 import TextInputB from "../fragmentos/TextInputB";
 import DropDown from "../fragmentos/DropDown";
 import { DataContext } from "../../context";
  
 

const Add_nota = ({navigation}) => {
	  const {addNota} =useContext(DataContext);

    const [titulo, onChangeTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [encargado, onChangeEncargado] = useState("");
    const [date, setDate] = useState(new Date(1598051730000));
    const [ prioridad , setPrioridad ] = useState (null) ;
    const onChange = (selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };
    const getFecha =()=>{
      var dia =  date.getDay().toString()
      var mes = date.getMonth().toString()
      if(dia.length==1){
        dia="0"+dia
      }
      if(mes.length==1){
        mes="0"+mes
      }
      return dia+"-"+mes+"-"+date.getFullYear()
    }
          return (
          <View>
                <Navbar/>
            <ScrollView style={{width:"100%", height:"80%"}}>
                <SafeAreaView style={styles.fondo}>
                <TextInput
                    style={{
                      borderWidth:0,
                      padding:10,
                      width:300,
                      backgroundColor:"white",
                      borderRadius:5,
                      marginBottom:20,
                      zIndex:-1,
                      color:"rgba(128,128,128,0.7)",
                      marginTop:"20%"}}
                    onChangeText={onChangeTitulo}
                    value={titulo}
                    placeholder="Titulo"
                />
                
                < DropDown value={prioridad}  setValue={setPrioridad}/>
                
                <TextInputB value={descripcion} setValue={setDescripcion}/>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEncargado}
                    value={encargado}
                    placeholder="Encargado"
                />

                <DatePicker fecha={date} setFecha={onChange}/>

                <Button
                color="orange"
                title="Crear Nota"
                onPress={()=>addNota(titulo,descripcion,encargado,prioridad,getFecha(),navigation.navigate("home"))}
                />
                
                </SafeAreaView>
          </ScrollView>
          </View>
          
          )
         
  };
  
 const styles = StyleSheet.create({
  fondo:{
    backgroundColor:"#F1F1F1",
    height:"100%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  input:{
    borderWidth:0,
    padding:10,
    width:300,
    backgroundColor:"white",
    borderRadius:5,
    marginBottom:20,
    zIndex:-1,
    color:"rgba(128,128,128,0.7)"
  }
 });
  
 export default Add_nota;