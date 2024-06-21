import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TradeItem from '../components/TradeItem';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const userUid = useSelector((state) => state.auth.userId);
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  const rejectButton = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    console.log("Rejected item with ID:", id);
  };

  const acceptButton = (id) => {
    navigation.navigate('TradeScreen', { selectedItem: items.find(item => item.id === id) });
  };

  const fetchItems = async () => {
    try {
      const response = await axios.post(`http://${process.env.API_URL}:${process.env.API_PORT}/Product/GetProducts`, { uid: userUid });
      const productsWithImages = response.data.map(row => ({
        id: row.id,
        user_uid: row.user_uid,
        p_name: row.p_name,
        p_description: row.p_description,
        p_uri: `http://${process.env.API_URL}:${process.env.API_PORT}${row.p_uri}`, // Örneğin, fotoğraf URI'si
      }));
      console.log(productsWithImages[0].p_uri)
      setItems(productsWithImages);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
   
  };

  useEffect(() => {

      fetchItems();
   
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map(item => (
        <TradeItem 
          key={item.id}
          id={item.id}
          title={item.p_name}
          imageSource={item.p_uri} // imageSource URI olarak geliyor
          description={item.p_description}
          onGreenPress={() => acceptButton(item.id)}
          onRedPress={() => rejectButton(item.id)}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
