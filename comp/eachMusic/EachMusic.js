import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EachMusic({ navigation, item }) {
    const pressHandler = () => {
        navigation.navigate('EachMusic');
    }

    return (
        <View style={styles.eachMusic}>
            <Text style={styles.text}>{navigation.getParam('name')}</Text>
            <Text style={styles.text}>{navigation.getParam('views')}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    eachMusic: {
        backgroundColor: '#101820FF',
        height:'100%'
    }

})
