import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title,isSecureText,OnChangeText,value,placeHolder,maxLength=35,multiline=false}) => {

  return (
    <View style={styles.inputContainer}>
        <Text style ={styles.inputBoxText}>{title}</Text>
         <TextInput
      secureTextEntry={isSecureText}
      style={styles.textInput}
       onChangeText={OnChangeText}
      placeholder={placeHolder}
      value={value}
      maxLength={maxLength}
      multiline={multiline}
      scrollEnabled={true}
    />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%'
      },
      inputBoxText:{
        fontWeight:'bold',
        color:'dark'
      },
      textInput: {
        borderWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
      },
})