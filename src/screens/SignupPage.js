import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Image, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { CustomTextInput, CustomButton } from '../components';

const SignupPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Eksik bilgi', 'Lütfen tüm alanları doldurun');
      return;
    }
    try {
      const response = await axios.post(`http://${process.env.API_URL}:${process.env.API_PORT}/User/SignUp`, {

        name,
        email,
        password,
      });
     
      if (response.data.rowCount>0) {
        Alert.alert('Kayıt başarılı', 'Başarıyla kayıt oldunuz');
        navigation.navigate("Login")
        // Başarılı bir kayıt işleminden sonra başka bir ekrana yönlendirin
      } else {
        Alert.alert('Kayıt başarısız', 'Kayıt olurken bir hata oluştu');
      }
    } catch (error) {
      console.error('Kayıt hatası:', error);
      Alert.alert('Kayıt hatası', 'Kayıt olurken bir hata oluştu');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.avoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.titleContainer}>
            <Image style={styles.image} source={require('../../assets/images/signUp.png')} />
            <Text style={styles.signUp}>Kayıt Ol</Text>
          </View>
          <View style={styles.textInputContainer}>
            <CustomTextInput title={"İsim"} isSecureText={false} OnChangeText={setName} value={name} placeHolder={'Lütfen İsim Giriniz'} />
            <CustomTextInput title={"Email"} isSecureText={false} OnChangeText={setEmail} value={email} placeHolder={'Lütfen Mail Giriniz'} />
            <CustomTextInput title={"Şifre"} isSecureText={true} OnChangeText={setPassword} value={password} placeHolder={'Lütfen Şifre Giriniz'} />
          </View>
          <View style={styles.signUpOptions}>
            <CustomButton
              buttonText="                        Kayıt Ol                          "
              width="80%"
              color='#332c4d'
              pressColor='lightgray'
              onPress={handleSignUp}
              marginTop={20}
            />
            <Text style={styles.loginPrompt}>
              Hesabınız var mı?{' '}
              <Pressable onPress={() =>navigation.navigate('Login')}>
                <Text style={styles.loginText}>Giriş Yap</Text>
              </Pressable>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c699b',
  },
  avoidingView: {
    flex: 1,
  },
  loginText: {
    color: 'blue', // Or any color you prefer
    textDecorationLine: 'underline', // Optional: Makes it look like a link
  },
  loginPrompt: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
  },
  titleContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpOptions: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
