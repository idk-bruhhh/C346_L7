import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Food from './food';

const AllFoods = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>My Favourite Foods 🍽️</Text>

            <Food
                name="Burger"
                description="Beef patty with melted cheese and soft buns."
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/burger.jpg')}
            />

            <Food
                name="Noodles"
                description="Flavourful...easy to cook"
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/noodles.jpg')}
            />

            <Food
                name="Fried Food"
                description="Crispy :)"
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/friedfood.jpg')}
            />

            <Food
                name="Ice Cream"
                description="Cold, creamy sweetness"
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/icecream.jpg')}
            />

            <Food
                name="Prata"
                description="Crispy and soft"
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/prata.jpg')}
            />

            <Food
                name="Ice Lemon Tea"
                description="Refreshing"
                icon_name="bowl-food"
                icon_color="#696969"
                picture={require('./img2/icelemontea.jpg')}
            />
        </ScrollView>
    );
};

export default AllFoods;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF8F0',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#D2691E',
    },
});
