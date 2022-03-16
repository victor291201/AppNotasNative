/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from "react";
 import {
   View
 } from 'react-native';
 import DropDownPicker from 'react-native-dropdown-picker' ; 

  
 

 const DropDown = (props) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'Alta', value: 'alta'},
        {label: 'Media', value: 'media'},
        {label: 'Baja', value: 'baja'}
    ])
          return ( 
              <View>
                <DropDownPicker
                    open={open}
                    value={props.value}
                    items={items}
                    setOpen={setOpen}
                    setValue={props.setValue}
                    setItems={setItems}
                    placeholder="Prioridad"
                    style={{
                        width:300,
                        marginBottom:20,
                        borderColor:"white",
                        width:300,
                        color:"gray"}}
                    disableBorderRadius={true}
                    dropDownContainerStyle={{
                        width:300,
                        borderWidth:0,
                        borderRadius:5,
                        shadowColor: "#000",
                        shadowOffset:{
                        width: 0,
                        height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        elevation: 1
                    }}
                    labelStyle={{color:"rgba(128,128,128,0.7)"}}
                    textStyle={{color:"rgba(128,128,128,0.7)",}}
                />
                </View>
          )
  };
  
  
 export default DropDown;