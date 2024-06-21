import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from "../components/CustomButton";

const TradeItem = ({ id, title, imageSource, description, onGreenPress, onRedPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText="Takas Teklif Et"
          Width='35%'
          onPress={() => onGreenPress(id)}
          color='green'
          pressColor='gray'
          marginTop={10}
        />
        <CustomButton
          buttonText="Reddet"
          Width='35%'
          onPress={() => onRedPress(id)}
          color='red'
          pressColor='gray'
          marginTop={10}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default TradeItem;
