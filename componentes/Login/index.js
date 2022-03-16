/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { NavigationContainer } from "@react-navigation/native";
 import {createNativeStackNavigator} from "@react-navigation/native-stack";
 import { useLinkProps } from "@react-navigation/native";
import axios from "axios";
import React,{useContext, useState} from "react";
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   TextInput,
   Button
 } from 'react-native';
 
import { DataContext } from "../../context";
 const Login = (props) => {
  const [name, onChangeName] = useState("");
  const [contraseña, onChangeContraseña] = useState("");
  const {login} = useContext(DataContext);
  
        return (
         <SafeAreaView style={styles.fondo}>
          <Text style={styles.title}>Login</Text>
           <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
              placeholder="Nombre de usuario"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeContraseña}
              value={contraseña}
              placeholder="Contraseña"
              multiline={true}
            />
            <SafeAreaView style={styles.button_container}>
              <Button
                color="orange"
                title="Iniciar sesion"
                onPress={()=>{login(name,contraseña)}}
              />
              <Button
                color="red"
                title="Registrarse"
                onPress={()=>props.navigation.navigate("registro")}
              />
            </SafeAreaView>
            
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
    marginTop:20
  },
  button_container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"65%",
    marginTop:20,
    color:"rgba(128,128,128,0.7)"
  }
 });
  
 export default Login;