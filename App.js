import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation'; // RootNavigation dosyasının yolunu doğru olduğundan emin olun
import { Provider } from 'react-redux';
import store from './src/store/store';  // Redux store'unun dosya yolunu doğru olarak belirtin

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <RootNavigation />
     
    </Provider>
  );
}


export default App;
