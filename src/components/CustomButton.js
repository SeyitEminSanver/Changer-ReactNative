import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({fontSize=15,buttonText,Width,onPress,color,pressColor,marginTop}) => {
  return (
   
    <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? pressColor : color,
        width: Width,
        marginTop:marginTop
      },
      styles.button,
    ]}
  >
   <Text style={{ ...styles.buttonText, fontSize: fontSize }}>{buttonText}</Text>
  </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      buttonText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        
      },
})