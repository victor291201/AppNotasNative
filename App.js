import { View, Text } from "react-native";
import React,{useContext, useEffect, useState} from "react";
import axios from "axios";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import Notas from "./componentes/Notas";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Verificacion from "./componentes/Verificacion";
import Add_nota from "./componentes/Add_nota";
import Editar_nota from "./componentes/Editar_nota";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { DataProvider,DataContext } from "./context";
const Stack = createNativeStackNavigator();

export default function  App () {
  const [logued,setLogued] = useState(false);
  const [us,setUs] = useState(null);
useEffect( async()=>{
  await AsyncStorage.getItem("user").then((res)=>setUs(res)).catch((e)=>alert(e));
},[]);
  if(us != null){
    return (
      <DataProvider setUs={setUs}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="home" component={Notas}/>
            <Stack.Screen name="add" component={Add_nota}/>
            <Stack.Screen name="edit" component={Editar_nota}/>
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
      );
  }
  return(
    <DataProvider  setUs={setUs}>
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="home" component={Login}/>
          <Stack.Screen name="registro" component={Register}/>
          <Stack.Screen name="verificacion" component={Verificacion}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  )
}
