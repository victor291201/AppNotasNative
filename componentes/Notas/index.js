/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect,useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
	FlatList
} from 'react-native';
 
import  AsyncStorage  from "@react-native-async-storage/async-storage";

import Navbar from "../fragmentos/navbar";
import Carta from "../fragmentos/card";
import Button_add from "../fragmentos/button_add";
import { DataContext } from "../../context";
 
const Notas = ({navigation}) => {
	const {data,datos} =useContext(DataContext);
		
useEffect( async()=>{
		await AsyncStorage.getItem("user").then((res)=>datos(res)).catch((e)=>alert(e));
  		},[]);
	
	return (
		<SafeAreaView>
			<Navbar/>
			<SafeAreaView style={styles.notas}>
			<FlatList 
				showsVerticalScrollIndicator ={false}
				data={data}
				renderItem={({item})=><Carta 
					titulo={item.titulo}
					prioridad={item.prioridad}
					descripcion={item.decripcion}
					encargado={item.encargado}
					fecha_add={item.fCreacion}
					fecha_entrega={item.fEntrega}
					id={item.id}
					onEdit={() =>
						navigation.navigate('edit', {
						  titulo:item.titulo,
						  descripcion:item.decripcion,
						  encargado:item.encargado,
						  date:item.fEntrega,
						  prioridad:item.prioridad,
						  id:item.id
						})
					  }
				/>}
				keyExtractor={item => item.id}
      />
			</SafeAreaView>
			<Button_add onadd={()=>{navigation.navigate("add")}}/>
		</SafeAreaView>
	);
 };
 
const styles = StyleSheet.create({
	notas:{
		backgroundColor:"#F1F1F1",
		height:"92%",
		width:"100%",
		alignItems:"center",
		paddingTop:20,
		paddingBottom:25
	}
});
 
export default Notas;