import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Item({ navigation, item}) {

    return (
        <View>
            <TouchableOpacity style={styles.item}
                onPress={() => navigation.navigate('EachMusic', item)}>
                <View style={styles.leftItem}>
                    <Image
                        style={styles.image}
                        source={require('../img/adele.jpeg')} />
                    <View style={styles.square}></View>
                    <View style={styles.info}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemTextViews}>{item.views}</Text>
                    </View>
                </View>
                <Image
                    style={styles.menu}
                    source={require('../img/leftMenu.png')} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop: 10,
        height: 60,
        padding: 10
    },
    leftItem: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    info: {
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15
    },
    menu: {
        width: 30,
        height: 30,
    },
    itemText: {
        color: 'white',
        marginBottom: 4
    },
    itemTextViews: {
        color: '#999',
    }
})
