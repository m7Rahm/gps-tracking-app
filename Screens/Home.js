import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import ListItem from '../Components/ListItem'
export default function (props) {
    console.log(JSON.stringify(props.route.params.data));
    const name = props.route.params.name
    const data = props.route.params.data;
    return (<>
        <View style={styles.body}>
            {name != '' ?
                <Text style={styles.text}>{`${name}'s playlist`}</Text> :
                <View style={{ height: 0 }} />}
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem
                    singer={item.singer}
                    track={item.track}
                />}
                keyExtractor={({ item }, index) => index.toString()}>
            </FlatList>
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#112233',
        justifyContent: 'flex-start'
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