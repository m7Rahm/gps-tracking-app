/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './Screens/Login'
import Home from './Screens/Home'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{display:"flex", flex:1}}>
      <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen
          name="Login"
          options={{headerShown:false}}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
     </>
  );
};

export default App;
