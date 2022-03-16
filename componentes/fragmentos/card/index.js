import React,{useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight

} from 'react-native';


import { Icon } from 'react-native-elements';
import { DataContext } from "../../../context";
const Top = (props) =>{
	switch(props.tipo){
		case "media":
			return(
			<Text style={{
					fontSize:17,
					color:"black",
					backgroundColor:"yellow",
					width:80,
					height:40,
					padding:7,
					textAlign:"center",
					borderBottomLeftRadius:10,
					borderBottomRightRadius:10,
					position:"relative",
					top:-20,
					right:10
				}} >{props.tipo}</Text>
			)
		case "alta":
			return(
			<Text style={{
					fontSize:17,
					color:"white",
					backgroundColor:"red",
					width:80,
					height:40,
					padding:7,
					textAlign:"center",
					borderBottomLeftRadius:10,
					borderBottomRightRadius:10,
					position:"relative",
					top:-20,
					right:10
				}} >{props.tipo}</Text>
			);
		default:
			return(
			<Text style={{
					fontSize:17,
					color:"green",
					backgroundColor:"green",
					color:"white",
					width:80,
					height:40,
					padding:7,
					textAlign:"center",
					borderBottomLeftRadius:10,
					borderBottomRightRadius:10,
					position:"relative",
					top:-20,
					right:10
				}} >{props.tipo}</Text>
			)

	}
}
const Card= (props) => {
	const {deleteNota} =useContext(DataContext);
  return (
    <SafeAreaView style={styles.nota}>
        <SafeAreaView style={styles.nota_top}>
            <Text style={styles.nota_titulo}>{props.titulo}</Text>
            <Top tipo={props.prioridad}/>
			<TouchableHighlight underlayColor="#ffff" activeOpacity={1} onPress={()=>deleteNota(props.id)}>
            	<View><Icon type="material-comunity" name="close"/></View>
			</TouchableHighlight>
        </SafeAreaView>
        <SafeAreaView style={styles.nota_mid}>
            <Text style={styles.nota_descripcion}>{props.descripcion}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.nota_bot}>
            <Text style={styles.nota_encargado}>{props.encargado}</Text>
            <Text style={styles.nota_agregado}>{props.fecha_add}</Text>
			<TouchableHighlight underlayColor="#ffff" activeOpacity={1} style={{ marginLeft:"92%",marginBottom:20, width:40}} onPress={props.onEdit}>
				<View >
					<Icon type="material-comunity" name="edit"/>
				</View>
			</TouchableHighlight>
            <Text style={styles.nota_entrega}>{props.fecha_entrega}</Text>
        </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	nota:{
		width: 350,
		height:300,
		backgroundColor:"white",
		borderRadius:10,
		padding:20,
		justifyContent:"space-between",
		marginBottom:20
	},
	nota_top:{
		flexDirection:"row",
		justifyContent:"space-between"
	},
	nota_mid:{
		width:310,
		height:140
	},	
	nota_titulo:{
		fontSize:20,
		fontWeight:"600",
		width:150
	},
	nota_prioridad:{
		fontSize:17,
		color:"white",
		backgroundColor:"red",
		width:80,
		height:40,
		padding:7,
		textAlign:"center",
		borderBottomLeftRadius:10,
		borderBottomRightRadius:10,
		position:"relative",
		top:-20,
		left:45
	},
	nota_icono:{
		color:"red",
		fontSize:17,
		fontWeight:"400",
		position:"relative",
		top:-13
	},	
	nota_descripcion:{
		fontSize:16,
		color:"black"
	},
	nota_encargado:{
		marginBottom:10,
		fontSize:15,
		color:"black",
		fontWeight:"700"
	},
	nota_entrega:{
		fontSize:14,
		color:"gray",
		marginTop:-40
	},
	nota_agregado:{
		fontSize:14,
		color:"gray"
	}
});

export default Card;
