import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';

const rootNavigation = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <NavigationContainer>
      { !isAuth ? <AuthStack /> : <UserStack /> }
    </NavigationContainer>
  );
}

export default rootNavigation;

const styles = StyleSheet.create({});
