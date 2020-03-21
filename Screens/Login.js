import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import HorizontalLine from '../Components/HorizontalLine'

export default function ({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [buttonAvailable, setButtonAvailable] = useState(false);
  useEffect(() => {
    let isAvailable = false;
    (password == '' || userName == '') ?
      isAvailable = false :
      isAvailable = true;
    setButtonAvailable(() => isAvailable);
  }, [password, userName])

  const logIn = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.navigate('Home', { name: userName })
    } catch (e) {
      Alert('Something went wrong!');
    }
  }
  const onClick = () => {
    try { //should be async
      // const resp = await fetch('http://192.168.0.106:3000/login', {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'Method': 'Post'
      //   },
      //   body: JSON.stringify({ username: userName, password: password })
      // });
      // const respJson = await resp.json();
      // respJson.result ?
      //   (
      //     playList = respJson.data,
      logIn();
      // ) :
      // alert('wrong credentials')
    } catch (exception) {
      console.log(exception)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.body}>
        <Text style={styles.text}>Name of the Company</Text>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType='username'
            placeholderTextColor='#666666'
            placeholder='Username'
            value={userName}
            onChangeText={(text) => setUserName(() => text)
            }
            style={styles.input}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType='password'
            placeholderTextColor='#666666'
            placeholder='Password'
            style={styles.input}
            onChangeText={(text) => setPassword(() => text)}
            value={password}>
          </TextInput>
        </View>
        <TouchableOpacity
          onPress={onClick}
          disabled={!buttonAvailable}
          style={styles.btnContainer(buttonAvailable)}>
          <Text style={styles.btnText(buttonAvailable)}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <HorizontalLine />
        <View style={styles.signUpContainerView}>
          <TouchableOpacity style={styles.signUpButtonContainer}>
            <Text style={styles.btnText(buttonAvailable)}>
              Sign Up
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 200,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
    fontFamily: 'Arial',
    marginTop: 0
  },
  inputContainer: {
    width: '95%',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden'
  },
  input: {
    borderColor: '#666666',
    borderWidth: 0.75,
    color: '#dddddd',
    backgroundColor: '#111111',
    padding: 8,
    textDecorationLine: 'none',
    fontFamily: 'Arial',
    borderRadius: 5
  },
  forgotPassword: {
    fontWeight: 'bold',
    color: '#193560'
  },
  forgotPasswordContainer: {
    marginTop: 40
  },
  btnContainer: (buttonAvailable) => ({
    marginTop: 15,
    backgroundColor: !buttonAvailable ? '#193550' : '#224470',
    borderRadius: 5,
    width: '95%',
  }),
  btnText: (buttonAvailable) => ({
    color: !buttonAvailable ? '#aaaaaa' : '#dddddd',
    paddingVertical: 10,
    fontFamily: 'Arial',
    textAlign: 'center'
  }),
  signUpContainerView: {
    marginTop: 40,
    flex: 0.35,
    justifyContent: 'flex-end',
    width: '95%',
  },
  signUpButtonContainer: {
    backgroundColor: 'steelblue',
    borderRadius: 5,
  }
});
