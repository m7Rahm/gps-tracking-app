import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

export default function (props) {
    const singer = props.singer;
    const track = props.track;
    console.log(JSON.stringify(props))
    return (
        <View style={styles.item}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.image} source={require('../etc/music.png')}></Image>
            </View>
            <View style={styles.musicInfo}>
                <Text style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: '500'
                }}>{track}</Text>
                <Text style={{
                    fontSize: 10,
                    color: '#bbbbbb'
                }}>{singer}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        height: 70,
        backgroundColor: '#112233'
    },
    image: {
        height: 40,
        width: 40
    },
    musicInfo: {
        justifyContent:'center',
        marginLeft:20,
        flex: 0.95,
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5
    }
})