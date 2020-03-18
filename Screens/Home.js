import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import MapView,{
    Marker,
} from 'react-native-maps'
export default function (props) {

    const [markerCoordinates, setMarkerCoordinates] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
    return (<>
        <View style={styles.body}>
        <TouchableOpacity onPress={()=>setMarkerCoordinates(prev => ({
            latitude: prev.latitude+0.001,
            longitude: prev.longitude+0.001
        }))} >
            <Text>Press me</Text>
        </TouchableOpacity>
            <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate = {
                        markerCoordinates
                    }
                />
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