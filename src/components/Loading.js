import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'purple'}/>
      <Text style={{
        fontWeight:"bold",
        fontSize:16,
        marginTop:20
      }}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"

    }
})