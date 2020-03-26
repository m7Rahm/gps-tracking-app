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
import Settings from './Screens/Settings'
import Notifications from './Screens/Notifications'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  Alert,
  Text,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const App = () => {

  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialMapStyle, setInitialMapStyle] = useState('standard')
  const checkAuth = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const mapStyle = await AsyncStorage.getItem('mapStyle');
      const initialMapStyle = mapStyle || 'standard';
      setInitialMapStyle(()=>initialMapStyle);

      //console.log(value);
      isLoggedIn == 'true' ?
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
                initialParams={{mapStyle: initialMapStyle }}
              />
              <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerTitle:'Settings',
                headerStyle: {backgroundColor:'#123456'},
                headerTitleAlign:'center',
                headerTintColor:'white',
                headerTitleStyle:{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20
                }}}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerTitle: 'Notifications',
                headerTitleAlign:'center',
                headerStyle: {backgroundColor:'#123456'},
                headerTintColor:'white',
                headerTitleStyle:{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20
                }}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </>
  );
};

export default App;
