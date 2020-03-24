import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  TouchableOpacity
} from 'react-native'
import MapView, {
  Marker, AnimatedRegion,
} from 'react-native-maps'

export default (props) => {
  const [animatedPosition] = useState(new Animated.Value(10));
  const [iconIsOpen, setIconIsOpen] = useState(false);
  const [markers, setMarkers] = useState([
    {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      latitude: 37.78826,
      longitude: -122.4334,
    },
  ])
  const [animateToCoordinate] = useState(markers.map(
    marker => new AnimatedRegion({
      latitude: marker.latitude,
      longitude: marker.longitude,
      latitudeDelta: 0,
      longitudeDelta: 0
    })
  ))
  useEffect(() => {
    const timerId = setInterval(() => {
      setMarkers(prevState => prevState.map(marker => ({
        latitude: marker.latitude + 0.0001,
        longitude: marker.longitude + 0.0001
      })))
    }, 3000);
    return () => clearInterval(timerId)
  }, [])
  useEffect(() => {
    animateToCoordinate.map(
      (coordinate, index) => coordinate.timing(
        {
          latitude: markers[index].latitude,
          longitude: markers[index].longitude,
          duration: 3000
        }
      ).start()
    )
  }, [markers])
  //useEffect(()=>{animateIcon(iconIsOpen)},[iconIsOpen])
  const animateIcon = (direction) => {
    !direction ?
      Animated.timing(
        animatedPosition,
        {
          toValue: 80,
          duration: 800,
          useNativeDriver: true
        }
      ).start() :
      Animated.timing(
        animatedPosition,
        {
          toValue: 10,
          duration: 800,
          useNativeDriver: true
        }
      ).start()
  }
  return (
    <>
      <View style={styles.body}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            animateToCoordinate.map((coordinate, index) =>
              <Marker.Animated
                key={index}
                coordinate={coordinate}
              />
            )
          }
        </MapView>
        <ImageBackground source={require('../etc/coke-icon.png')} style={styles.icon}>
          <TouchableOpacity style={{ height: 60, width: 60 }} onPressOut={() => {
            animateIcon(iconIsOpen)
            setIconIsOpen((prev) => !prev)
          }}></TouchableOpacity>
        </ImageBackground>
        <Animated.View style={styles.settings(animatedPosition)}>
          <TouchableOpacity disabled={!iconIsOpen} style={{ width: 60, height: 60 }} onPressOut={() => props.navigation.navigate('Settings')} />
        </Animated.View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30
  },
  icon: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex:2
  },
  settings: (position) => ({
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    zIndex:1,
    position: 'absolute',
    translateY: position,
    left: 10,
    opacity: position.interpolate({
      inputRange: [50, 80],
      outputRange: [0.3, 1]
    })
  })
}
)