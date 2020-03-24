import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Platform
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default (props) => {
  const [mapStyleValue, setMapStyleValue] = useState('standard')
  const logOut = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      props.navigation.navigate('Login')
    } catch (e) {
      console.log(e)
    }
  }
  const getMapStyle = async() =>{
    try{
      const value = await AsyncStorage.getItem('mapStyle');
      setMapStyleValue(() => value)
      console.log(value);
    } catch(e){
      console.log(e)
    }
  }
  const setMapStyle = async(mapStyle) =>{
    try{
      await AsyncStorage.setItem('mapStyle',mapStyle)
      setMapStyleValue(() => mapStyle)
    } catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{getMapStyle()},[])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.content}>
        <Text style={styles.mapLabel}>Map Settings</Text>
        <View style={styles.mapStyleContainer}>
          <Text style={styles.mapStyleLabel}>Map Style</Text>
          <Picker
            onValueChange={(e) => setMapStyle(e)}
            mode='dropdown'
            style={{ width: 150 }}
            selectedValue={mapStyleValue}
            itemStyle={styles.pickerItem}>
            <Picker.Item label='Standard' value='standard' />
            <Picker.Item label='Satellite' value='satellite' />
            <Picker.Item label='Hybrid' value='hybrid' />
            {Platform.OS === 'android' && <Picker.Item label='Terrain' value='terrain' />}
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: 'column-reverse', alignItems: 'stretch' }}>
          <TouchableOpacity style={styles.logOut} onPress={logOut}>
            <Text style={styles.logOutText}> Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  mapLabel: {
    color: '#333333',
    fontWeight: '600'
  },
  logOut: {
    borderRadius: 10,
    marginBottom: 40,
    backgroundColor: '#da123618'
  },
  logOutText: {
    paddingVertical: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#dd2233',
    fontWeight: 'bold'
  },
  mapStyleContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#333333',
    justifyContent: 'space-between'
  },
  mapStyleLabel: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#123456'
  },
  pickerItem: {
    textAlign: 'right'
  }
})