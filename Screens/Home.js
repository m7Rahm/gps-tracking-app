import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import MapView, {
  Marker, AnimatedRegion,
} from 'react-native-maps'
export default function (props) {
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
    setInterval(() => {
      setMarkers(prevState => prevState.map(marker => ({
        latitude: marker.latitude + 0.00005,
        longitude: marker.longitude + 0.00005
      })))
    }, 3500);
  }, [])
  useEffect(
    () => {
      animateToCoordinate.map(
        (coordinate, index) => coordinate.timing(
          {
            latitude: markers[index].latitude,
            longitude: markers[index].longitude,
            duration: 4000
          }
        ).start()
      )
    }
    , [markers])
  return (<>
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
              key = {index}
              coordinate={
                coordinate
              }
            />
          )
        }
      </MapView>
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
  }
}
)