// Exercise3A
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Exercise3A = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: "powderblue" }]}>
                <Text>Child One</Text>
            </View>

            <View style={[styles.Child, { backgroundColor: "skyblue" }]}>
                <Text>Child Two</Text>
            </View>

            <View style={[styles.Child, { backgroundColor: "steelblue" }]}>
                <Text>Child Three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: "row",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
    },
    Child: {
        borderWidth: 2,
        fontSize: 24,
        textAlign: "center",
    },
});

export default Exercise3A;
