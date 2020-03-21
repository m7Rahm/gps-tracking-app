/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import Login from './Screens/Login'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  Alert,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const App = () => {

  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      console.log(value);
      value == 'true' ?
        setIsLoggedIn(() => true) :
        ''
      setIsLoading(() => false)
    } catch (e) {
      Alert('Something went wrong');
    }
  }
  useEffect(() => {
    checkAuth();
  }, [])
  return (
    isLoading ?
      <Text> </Text> :
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ display: "flex", flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </>
  );
};

export default App;
