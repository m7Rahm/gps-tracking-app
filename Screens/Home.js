import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'
export default function(){
    return(
        <View style ={styles.body}>
             <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    body:{
        display:'flex',
        flex:1,
        backgroundColor:'lightblue',
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
}
)