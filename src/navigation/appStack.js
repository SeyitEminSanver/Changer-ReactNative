import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import HomeStack from './nav'
import UserStack from './navigators/UserStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="UserStack" component={UserStack} options={{ headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}
