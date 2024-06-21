import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image,Alert } from 'react-native';
import React, { useState } from 'react';
import {Loading,CustomTextInput,CustomButton} from './../components';
import { useDispatch } from 'react-redux';
import { login ,setUserId } from '../store/authSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginPage=({})=> {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading= useSelector(state => state.auth.isAuth);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(process.env.API_URL, process.env.API_PORT)
    if (email && password) {
      try {
        const response = await axios.post(`http://${process.env.API_URL}:${process.env.API_PORT}/User/Login`, {
          email,
          password,
        });
  
       
  
        if (response.data.success > 0) {
          dispatch(setUserId(response.data.body[0].uid));
          dispatch(login());
          navigation.navigate('HomeScreen');
        } else {
          Alert.alert('Hatalı Giriş', 'Kullanıcı bulunamadı. Lütfen tekrar deneyin.');
        }
      } catch (error) {
        console.error('Giriş hatası:', error);
        Alert.alert('Giriş hatası', 'Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } else {
      Alert.alert('Yanlış Bilgi', 'Lütfen gerekli yerleri doldurunuz.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../../assets/images/loginIcon.png')}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        OnChangeText={setEmail}
        value={email}
        placeHolder='Lütfen Mailinizi Giriniz '


      />

       <CustomTextInput
        title="Şifre"
        isSecureText={true}
        OnChangeText={setPassword}
        value={password}
        placeHolder='Lütfen Şifrenizi Giriniz'


      />


<CustomButton
      buttonText="Giriş yap"
      Width='80%'
      onPress={()=>handleLogin()}
      color='#5c4d74'
      pressColor='gray'
      marginTop={20}
      /> 
      
      <CustomButton
      buttonText="Kayıt Ol"
      Width='30%'
      onPress={()=> navigation.navigate('Signup')}
      color='#332c4d'
      pressColor='gray'
      marginTop={50}
      /> 

      {isLoading ? <Loading/>:null}
    </View>
  );
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a6699',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width:'80%'
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
    resizeMode: 'contain', 
  },
  signupButton:{
    width: '30%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBoxText:{
    fontWeight:'bold',
    color:'dark'
  }
});
