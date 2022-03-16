import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import { Icon } from 'react-native-elements';
const button_add = (props) => {
  return (
    
		<SafeAreaView style={styles.boton_container}>
            <Text style={styles.boton_add} onPress={props.onadd}> <Icon type="material-comunity" name="add" color="white"/> </Text>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	boton_container:{
		backgroundColor:"orange",
		bottom:17,
		right:12,
		height:70,
		width:70,
		borderRadius:50,
		flex:1,
		position:'absolute',
		justifyContent:"center",
		alignItems:"center",
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
		
	},
	boton_add:{
		color:"white",
		fontSize:40,
		fontWeight:"600",
		marginBottom:5
	}
});

export default button_add;
