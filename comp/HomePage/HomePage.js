import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Item from './Item';

export default function HomePage({ navigation }) {
    const [musicArr, setMusicArr] = useState([
        { name: 'Adele', views: '2,212,211', image: '../img/adele.jpeg' },
        { name: 'Shon', views: '4,212,211', image: '../img/adele.jpeg' },
        { name: 'The Weekend', views: '7,212,211', image: '../img/adele.jpeg' }
    ])

    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch('https://api.spotify.com/v1')
    //         const data = await res.json()
    //         console.log(data)
    //     })()
    // }, [])


    return (
        <View style={styles.container}>
            <TouchableOpacity >
                {musicArr.map((item, index) => <Item
                    key={index}
                    item={item}
                    navigation={navigation} />)}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101820FF',
        height: '100%'
    },
});
