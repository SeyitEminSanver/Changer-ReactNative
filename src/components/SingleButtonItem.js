import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from "../components/CustomButton";

const SingleButtonItem = ({ id, title, imageSource, description, buttonText, onPress, buttonColor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.description}>{description}</Text>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <CustomButton
          fontSize={30}
          buttonText={buttonText}
          Width='100%'
          onPress={() => onPress(id)}
          color={buttonColor}
          pressColor='gray'
          marginTop={5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10, // Add some spacing above the button
  },
});

export default SingleButtonItem;
