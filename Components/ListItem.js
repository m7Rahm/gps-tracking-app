import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

export default (props) => {
    const notificationType = props.notificationType;
    const plateNum = props.plateNum;
    const date = props.date;
    const carModel = props.carModel;
    const notificationText = props.notificationText;
    const notificationPlace = props.notificationPlace;
    let notificationIcon=''
    notificationPlace!=''?
    notificationIcon = require('../etc/speedometer.png'):
    notificationIcon =require('../etc/location.png')
    return (
        <View style={styles.item}>
            <View style={styles.firstRow}>
                <View style={styles.row}>
                    <Image
                        source={notificationIcon}
                        style={styles.icon}
                    />
                    <Text style={styles.firstRowText}>
                        {notificationType}
                    </Text>
                </View>
                <Text style={styles.firstRowText}>
                    {date}
                </Text>
            </View>
            <View style={styles.middleRowContainer}>
            <View style={styles.row}>
                <Text style={styles.secondRowText}>
                    {plateNum}
                </Text>
                <Text style={styles.secondRowText}>
                    {carModel}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.firstRowText}>
                    {notificationText}
                </Text>
                <Text style={styles.firstRowText}>
                    {notificationPlace}
                </Text>
            </View>
            </View>
            <TouchableOpacity
                onPressOut={() => console.log('nothing')}
            >
                <Text style={styles.buttonText}>
                    Tap to contact driver
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        paddingTop:10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#333',
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    firstRowText: {
        marginRight: 8,
        color: '#777',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    middleRowContainer:{
        paddingVertical: 10,
    },
    secondRowText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 30
    },
    buttonText:{
        textAlignVertical: 'center',
        color: 'steelblue',
        fontSize: 15,
        fontWeight: '900',
        paddingBottom: 15
    },
    icon:{
        width:18,
        height:18,
        marginRight:15
    }
})