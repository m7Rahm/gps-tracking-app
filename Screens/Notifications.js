import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import ListItem from '../Components/ListItem'

export default (props) => {
    const notifications = [
        {
            notificationType: 'Speedover',
            plateNum: '10-AJ-959',
            carModel: 'Vokswagen Passat',
            date: '12:30',
            notificationText: 'exceeded the speed limit on',
            notificationPlace: 'Khojali ave'
        },
        {
            notificationType: 'Deviation from the route',
            plateNum: '10-AJ-959',
            carModel: 'Vokswagen Passat',
            date: 'yesterday, 12:30',
            notificationText: 'deviation from the route',
            notificationPlace: ''
        },
        {
            notificationType: 'Speedover',
            plateNum: '10-AJ-959',
            carModel: 'Vokswagen Passat',
            date: '15.12.2019 12:30',
            notificationText: 'exceeded the speed limit on',
            notificationPlace: 'Khojali ave'
        },
        {
            notificationType: 'Speedover',
            plateNum: '10-AJ-959',
            carModel: 'Vokswagen Passat',
            date: '15.12.2019 12:30',
            notificationText: 'exceeded the speed limit on',
            notificationPlace: 'Khojali ave'
        },
        {
            notificationType: 'Speedover',
            plateNum: '10-AJ-959',
            carModel: 'Vokswagen Passat',
            date: '15.12.2019 12:30',
            notificationText: 'exceeded the speed limit on',
            notificationPlace: 'Khojali ave'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={notifications}
                    renderItem={({ item }) => <ListItem
                        notificationText={item.notificationText}
                        notificationPlace={item.notificationPlace}
                        notificationType={item.notificationType}
                        plateNum={item.plateNum}
                        date={item.date}
                        carModel={item.carModel}
                    />}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
        paddingHorizontal: 10
    }
})