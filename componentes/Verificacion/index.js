/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from "react";
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   TextInput,
   Button
 } from 'react-native';
 import axios from "axios";
  
 

 const Verificacion = ({route,navigation}) => {
  const [codigo, onChangeCodigo] = useState("");
  const verificar=async()=>{
    if(codigo == route.params.codi){
      await axios.post("http://localhost:3000/registro",{correo:route.params.Email,contraseña:route.params.contraseña}).then((response)=>{
        navigation.navigate("home")
        alert(response)
        })
        .catch((error)=>{
          alert(error)
        });

    }
    else{
      alert("codigo incorrecto, intente otra vez")
    }
  }
            return (
              <SafeAreaView style={styles.fondo}>
               <Text style={styles.title}>Verificacion</Text>
                <TextInput
                   style={styles.input}
                   onChangeText={onChangeCodigo}
                   value={codigo}
                   placeholder="Codigo de verificacion"
                 />
                   <Button
                   style={styles.button}
                     color="orange"
                     title="Acceder"
                     onPress={()=>verificar()}
                   />
                 
               </SafeAreaView>
            
        )
  };
  
 const styles = StyleSheet.create({
  fondo:{
    backgroundColor:"#F1F1F1",
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{ 
    fontSize:40,
    fontWeight:"700",
    color:"black"
  },
  input:{
    borderWidth:0,
    padding:5,
    width:300,
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20,
    marginBottom:20
  },
  button:{
    marginTop:20
  }
 });
  
 export default Verificacion;