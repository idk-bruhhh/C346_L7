import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Food = ({ name, description, icon_name, icon_color, picture }) => {
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

export default Food;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    desc: {
        fontSize: 14,
        marginLeft: 6,
        color: '#555',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
});
