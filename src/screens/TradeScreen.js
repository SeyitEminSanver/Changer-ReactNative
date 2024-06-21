import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, StyleSheet, } from 'react-native';
import SingleButtonItem from '../components/SingleButtonItem';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

const TradeScreen = () => {
  const [userItems, setUserItems] = useState([]);
  const userUid = useSelector((state) => state.auth.userId);
  const route = useRoute();
  const { selectedItem } = route.params;
  const navigation = useNavigation();

  const handleTrade = (id) => {
    Alert.alert("Başarılı","Takas Teklifi Başarı ile Gerçekleşmiştir")
    console.log(`Trade ${id} with ${selectedItem.name}`);
    // Burada takas işlemi gerçekleşecek. Örneğin, bir API çağrısı yapılabilir.
    navigation.goBack();
  };

  useEffect(() => {
    if (userUid) {
      console.log(userUid);
      setUserItems([
        { id: 1, name: 'Laptop', description: 'A good laptop', image: require('../../assets/images/img.jpg') },
        { id: 2, name: 'Phone', description: 'A smart phone', image: require('../../assets/images/img.jpg') },
      ]);
    }
  }, [userUid]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userItems.map(item => (
        <SingleButtonItem
          key={item.id}
          id={item.id}
          title={item.name}
          imageSource={item.image}
          description={item.description}
          buttonText="Seç"
          onPress={handleTrade}
          buttonColor='green'
        />
      ))}
    </ScrollView>
  );
}

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
