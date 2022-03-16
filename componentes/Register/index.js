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
   Button,
   View
 } from 'react-native';
  
import axios from "axios";

 
const Register = ({navigation}) => {
  const [Email, onChangeEmail] = useState("");
  const [contraseña, onChangeContraseña] = useState("");
  const cod =async()=>{
    var codi = Math.round((Math.random() * (9999 - 1000)) + 1000);
    await axios.post("http://localhost:3000/registro1",{codigo:codi,correo:Email}).then((response)=>{
         alert(response)
        })
        .catch((error)=>{
          alert(error)
        });
    navigation.navigate("verificacion",{Email,contraseña,codi})
  }
          return (
            <SafeAreaView style={styles.fondo}>
             <Text style={styles.title}>Registrarse</Text>
               <TextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  value={Email}
                  placeholder="Correo"
                />
               <TextInput
                 style={styles.input}
                 onChangeText={onChangeContraseña}
                 value={contraseña}
                 placeholder="Contraseña"
                 multiline={true}
               />
               <View style={{marginTop:20}}>
                 <Button
                   color="orange"
                   title="Enviar Email"
                   onPress={()=>cod()}
                 />
                </View>
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
    color:"rgba(128,128,128,0.7)"
  }
 });
  
 export default Register;