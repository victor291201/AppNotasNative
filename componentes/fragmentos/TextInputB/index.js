import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
      style={{marginTop:-20,color:"rgba(128,128,128,0.7)"}}
    />
  );
}

const TextInputB = (props) => {

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor:"white", 
        marginBottom:20,
        width:300,
        borderRadius:5,
        padding:10
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => props.setValue(text)}
        value={props.value}
        placeholder="Descripcion"
        style={{padding: 20,color:"rgba(128,128,128,0.7)"}}
      />
    </View>
  );
}

export default TextInputB;