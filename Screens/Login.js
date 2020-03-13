import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';

export default function ({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => { //should be async
    // const resp = await fetch('http://192.168.0.106/login:8000', {
    //   headers: {
    //     'content-type': 'application/json',
    //     'method': 'Post'
    //   },
    //   body: JSON.stringify({ username: userName, password: password })
    // });
    // const respJson = await resp.json();
    // respJson.result ?
    const playList = [
      { singer: 'Linkin Park', track: 'All For Nothing', id: 1 },
      { singer: 'Silver', track: 'Wham Bam', id: 2 },
      { singer: 'Zemaria', track: 'Space Ahead', id: 3 },
      { singer: 'Royal Blood', track: 'Out Of The Black', id: 4 },
      { singer: 'Royal Blood', track: 'Lights Out', id: 5 }
    ]
    navigation.navigate('Home', { name: userName, data: playList });
    // alert('wrong credentials')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.body}>
        <Text style={styles.text}>Name of the Company</Text>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType='username'
            placeholderTextColor='#aaaaaa'
            placeholder='username'
            value={userName}
            onChangeText={(text) => setUserName(() => text)}
            style={styles.input}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            textContentType='password'
            placeholderTextColor='#aaaaaa'
            placeholder='password'
            style={styles.input}
            onChangeText={(text) => setPassword(() => text)}
            value={password}>
          </TextInput>
        </View>
        <TouchableOpacity
          onPress={onClick}
          style={styles.submitButton}>
          <Text style={{ color: '#bbbbbb', paddingVertical: 8, paddingHorizontal: 11 }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'steelblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
    fontFamily: 'Arial',
    marginTop: 150
  },
  inputContainer: {
    width: 180,
    backgroundColor: '#112233',
    textAlignVertical: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  input: {
    color: 'white',
    width: 160,
    backgroundColor: '#112233',
    padding: 8,
    fontFamily: 'Arial',
    textAlignVertical: 'center',
    borderRadius: 5
  },
  submitButton: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#112233',
    borderRadius: 5
  }
});
