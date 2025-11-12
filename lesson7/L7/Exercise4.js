// Exercise4
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1, // fills the available screen
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    childText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    }
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                <Text style={styles.childText}>Square 1</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'mediumaquamarine' }]}>
                <Text style={styles.childText}>Square 2</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'crimson' }]}>
                <Text style={styles.childText}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
