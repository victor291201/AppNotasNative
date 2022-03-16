import React,{useContext,useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import  AsyncStorage  from "@react-native-async-storage/async-storage";

import { Icon } from 'react-native-elements';
import { DataContext } from "../../../context";

const Navbar = () => {
	const[user,setUser] = useState("")
	const {logout} =useContext(DataContext);
	useEffect( async()=>{
	  await AsyncStorage.getItem("user").then((res)=>setUser(res)).catch((e)=>alert(e));
	},[]);
  return (
    <SafeAreaView style={styles.navbar}>
        <SafeAreaView style={styles.nabvar_usuario}>
            <Text style={styles.navbar_nombre}>{user}</Text>
			<TouchableHighlight underlayColor="orange" activeOpacity={1} style={styles.navbar_persona} onPress={()=>logout()}>
            	<View><Icon name="logout" color={"white"}/></View>
			</TouchableHighlight>
			
            </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    navbar:{
			backgroundColor:"#FFAA28",
						height:"9%",
					flexDirection:'row',
					width:"100%",
					minHeight:74,
					justifyContent:"space-between",
					paddingLeft:12,
					paddingRight:12
				},
			nabvar_usuario:{
					flex:1,
					flexDirection:"row",
					alignItems:"center",
					justifyContent:"space-between"
			},
			navbar_persona:{
					width:50,
					height:50,
					marginRight:-10,
					marginTop:25
			},
			navbar_nombre:{
					color:"white",
					fontSize:17,
					fontWeight:"600",
					marginLeft:10
			}
});

export default Navbar;
