import React, { useState, useEffect, useRef } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Platform
} from 'react-native'
import MapView, {
  Marker, AnimatedRegion,
} from 'react-native-maps'

export default (props) => {
  const mapStyle = props.route.params.mapStyle || 'standard';
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
  const refs = markers.map(marker => useRef())
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
        latitude: marker.latitude + 0.001,
        longitude: marker.longitude + 0.001
      })))
    }, 3000);
    return () => clearInterval(timerId)
  }, [])
  useEffect(() => { animate() }, [markers])

  const animate = () => {
    try {
      const newCoordinates = markers.map(marker => ({
        latitude: marker.latitude,
        longitude: marker.longitude
      }))
      !(Platform.OS === 'android') ?
        animateToCoordinate.map(
          (coordinate, index) => coordinate.timing(
            {
              latitude: markers[index].latitude,
              longitude: markers[index].longitude,
              duration: 3000
            }
          ).start()
        ) :
        newCoordinates.map((newCoord, index) =>
          refs[index].current._component.animateMarkerToCoordinate(newCoord, 3100)
        )
    } catch (e) {
      console.log(e)
    }
  }

  const animateIcon = (direction) => {
    !direction ?
      Animated.timing(
        animatedPosition,
        {
          toValue: 70,
          duration: 600,
          useNativeDriver: true
        }
      ).start() :
      Animated.timing(
        animatedPosition,
        {
          toValue: 10,
          duration: 600,
          useNativeDriver: true
        }
      ).start()
  }
  return (
    <>
      <View style={styles.body}>
        <MapView
          style={{ flex: 1 }}
          mapType={mapStyle}
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
                ref={refs[index]}
                key={index}
                coordinate={coordinate}
              />
            )
          }
        </MapView>
        <ImageBackground source={require('../etc/coke-icon.png')} style={styles.icon}>
          <TouchableOpacity
            style={{ height: 55, width: 55 }}
            onPressOut={() => {
              animateIcon(iconIsOpen)
              setIconIsOpen((prev) => !prev)
            }}>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.shadow}>
          <View style={styles.notificationsIconBackground}>
            <ImageBackground source={require('../etc/notifications_grey_192x192.png')} style={styles.notificationsIcon}>
              <TouchableOpacity
                style={{ height: 55, width: 55 }}
                onPressOut={() => {props.navigation.navigate('Notifications')}}>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <Animated.View style={styles.settingsContainer(animatedPosition)}>
          <ImageBackground style={{ width: 50, height: 50 }} source={require('../etc/unnamed.png')}>
            <TouchableOpacity disabled={!iconIsOpen} style={{ width: 60, height: 60 }} onPressOut={() => props.navigation.navigate('Settings')} />
          </ImageBackground>
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
    width: 55,
    height: 55,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2
  },
  settingsContainer: (position) => ({
    zIndex: 1,
    width: 50,
    top: 10,
    height: 50,
    position: 'absolute',
    transform :[{translateY: position},],
    left: 10,
    opacity: position.interpolate({
      inputRange: [50, 70],
      outputRange: [0.3, 1]
    })
  }),
  notificationsIcon: {
    width: 35,
    height: 35,
  },
  notificationsIconBackground: {
    backgroundColor: 'white',
    borderRadius: 30,
    //position: 'absolute',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    position: 'absolute',
    zIndex:2,
    right: 10,
    top: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    borderRadius:20,
    backgroundColor: 'transparent'
  }
})