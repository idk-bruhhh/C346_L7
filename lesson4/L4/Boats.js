import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, icon_color, picture }) => {
    return (
        <View style={styles.card}>
            <Image source={picture} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} />
                <Text style={styles.desc}>{description}</Text>
            </View>
        </View>
    );
};

export default Boat;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#696969'
    },
    desc: {
        fontSize: 14,
        color: '#696969',
        marginLeft: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
