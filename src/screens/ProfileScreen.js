import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout, setUserId } from '../store/authSlice';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setItemImage(result.assets[0].uri); // URI'yı state'e kaydet
    }
  };

  const handleItemSubmission = async () => {
    try {
      if (!itemImage) {
        Alert.alert('Error', 'Please select an image');
        return;
      }
  
      const formData = new FormData();
      formData.append('user_uid', userId); 
      formData.append('name', itemName);
      formData.append('description', itemDescription);
      formData.append('image', {
        uri: itemImage,
        type: 'image/jpeg', 
        name: `${userId}-${itemName}.jpg`
      });
  
      const response = await axios.post(`http://${process.env.API_URL}:${process.env.API_PORT}/Product/AddProduct`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Success', 'Item entered successfully!');
    } catch (error) {
      console.error("Error adding product:", error);
      Alert.alert('Error', 'There was an error adding the item');
    }
  };
  
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.headerText}>Eşya Gir</Text>
        <CustomTextInput
          title="İsmi"
          isSecureText={false}
          OnChangeText={setItemName}
          value={itemName}
          placeHolder="Enter item name"
        />
        <CustomTextInput
          title="Item Description"
          isSecureText={false}
          OnChangeText={setItemDescription}
          value={itemDescription}
          placeHolder="Enter item description"
          multiline={true}
        />
        <View style={styles.imagePickerContainer}>
          <Text style={styles.imagePickerText}>Resmi Seç</Text>
          <CustomButton
            fontSize={15}
            buttonText="     Seç     "
            Width="70%"
            onPress={pickImage}
            color="blue"
            pressColor="darkblue"
            marginTop={5}
          />
          {itemImage && <Image source={{ uri: itemImage }} style={styles.image} />}
        </View>
        <CustomButton
          fontSize={15}
          buttonText="Eşyayı Kaydet"
          Width="60%"
          onPress={handleItemSubmission}
          color="#46d25e"
          pressColor="darkgreen"
          marginTop={20}
        />
        <CustomButton
          fontSize={15}
          buttonText="Çıkış Yap"
          Width="60%"
          onPress={handleLogout}
          color="#ff4d00"
          pressColor="darkred"
          marginTop={25}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagePickerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ProfileScreen;
