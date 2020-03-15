import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.or}>OR</Text>
            <View style={styles.horizontalLine}>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 50,
        width: '95%',
    },
    or: {
        alignSelf: 'center',
        color: '#666666',
        fontWeight: 'bold',
        position: 'absolute',
        backgroundColor: 'black',
        top:-10,
        zIndex: 1,
        paddingHorizontal: 20
    },
    horizontalLine: {
        position: 'relative',
        borderColor: '#333333',
        width: '100%',
        borderWidth: 0.5
    }
})