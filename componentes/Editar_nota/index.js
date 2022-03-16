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
    View
  } from 'react-native';
 
  import Navbar from "../fragmentos/navbar";
  import DatePicker from "../fragmentos/DatePicker";
  import TextInputB from "../fragmentos/TextInputB";
  import DropDown from "../fragmentos/DropDown";
  import { DataContext } from "../../context";
 
  const Editar_nota = ({ route,navigation}) => {
	  const {update} =useContext(DataContext);
     const [titulo, onChangeTitulo] = useState(route.params.titulo);
     const [descripcion, setDescripcion] = useState(route.params.descripcion);
     const [encargado, onChangeEncargado] = useState(route.params.encargado);
     const [date, setDate] = useState(route.params.date);
     const [ prioridad , setPrioridad ] = useState(route.params.prioridad);
     const [ id , setid ] = useState(route.params.id);
     const onChange = (selectedDate) => {
       const currentDate = selectedDate || date;
       setDate(currentDate);
     };
     
      const updt =()=>{
       update(titulo,descripcion,encargado,prioridad,date,id)
        navigation.navigate("home")
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
            title="Editar nota"
            onPress={()=>updt()}
            />
            
            </SafeAreaView>
      </ScrollView>
      </View>
           )
          
   };
   
  const styles = StyleSheet.create({
   fondo:{
     backgroundColor:"#F1F1F1",
     height:"92%",
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
   
  export default Editar_nota;