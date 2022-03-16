/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from "react";
 import {
   Button,
   View
 } from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';
  
 

 const DatePicker = (props) => {
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || props.fecha;
      setShow(Platform.OS === 'ios');
      props.setFecha(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };
          return (
                <View>
                  <View style={{marginBottom:20,backgroundColor:"red"}}>
                    <Button onPress={showDatepicker} color="orange" title="Seleccionar fecha" />
                  </View>
                  <View style={{marginBottom:20}}>
                    <Button onPress={showTimepicker} color="red" title="Seleccionar hora" />
                  </View>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={props.fecha}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View>
          )
         
  };
  
 export default DatePicker;