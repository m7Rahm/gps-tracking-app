import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default (props) => {
    const logOut = async () => {
        try {
            await AsyncStorage.setItem('isLoggedIn', 'false');
            props.navigation.navigate('Login')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={styles.content}>
                <Text style={styles.mapLabel}>Map Settings</Text>
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
        flexDirection: 'column'
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
    }
})