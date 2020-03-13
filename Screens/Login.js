import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity
  } from 'react-native';
  import React, { useState } from 'react';

  export default function({navigation}){
      const [userName, setUserName] = useState('');
      const [password, setPassword] = useState('');
      const onClick = async() =>{
        const resp = await fetch('https://localhost/login',{
            headers:{
                'content-type': 'application/json',
                'accept': 'json',
                'method': 'Post'
            },
            body: JSON.stringify({username: userName, password: password})
        });
        const respJson = await resp.json();
        respJson.result?
        navigation.navigate('Home'):
        alert('wrong credentials')
      }
      return(
        <View style={styles.body}>
            <Text style={styles.text}>Name of the Company</Text>
            <View style={styles.inputContainer}> 
                <TextInput
                    textContentType='username'
                    placeholderTextColor='#aaaaaa'
                    placeholder='username'
                    value={userName}
                    onChangeText = {(text) => setUserName(() => text)}
                    style={styles.input}>
            </TextInput>
            </View>
            <View style={styles.inputContainer}> 
                <TextInput 
                    textContentType='password'
                    placeholderTextColor='#aaaaaa'
                    placeholder='password'
                    style={styles.input}
                    onChangeText = {(text) => setPassword(() => text)}
                    value={password}>
                </TextInput>
            </View>
            <TouchableOpacity
                onPress={onClick}
                style={styles.submitButton}>
                <Text style={{color:'#bbbbbb', paddingVertical:8, paddingHorizontal:11}}>
                    Log in
                </Text>
            </TouchableOpacity>
      </View>
      )
  }

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'steelblue',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize:25,
      fontWeight:'bold',
      color:'white',
      marginBottom:50,
      fontFamily:'Arial',
      marginTop:150
    },
    inputContainer:{
      width:180,
      backgroundColor:'#112233',
      textAlignVertical:'center',
      borderRadius:5,
      marginBottom:10
    },
    input:{
      color:'white',
      width:160,
      backgroundColor:'#112233',
      padding:8,
      fontFamily:'Arial',
      textAlignVertical:'center',
      borderRadius:5
    },
    submitButton:{
      marginTop:10,
      textAlign:'center',
      fontFamily:'Arial',
      backgroundColor:'#112233',
      borderRadius:5
    }
  });
  