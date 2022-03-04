import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.menuPage}
                onPress={() => navigation.navigate('EachMusic')}>
                <Image style={styles.image} source={require('../img/userMenu.png')} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuPage}>
                <Image style={styles.image} source={require('../img/userMenu.png')} />
                <Text>Musics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuPage}>
                <Image style={styles.image} source={require('../img/userMenu.png')} />
                <Text>Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuPage}>
                <Image style={styles.image} source={require('../img/userMenu.png')} />
                <Text>Snir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: "auto",
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,

    },
    menuPage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
})
