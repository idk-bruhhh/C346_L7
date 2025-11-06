import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Movie from './Movie';

const Allmovies = () => {
    return (
        <ScrollView>
            <Text>My Favourite Movies</Text>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="skull"
                icon_color="red"
                poster={require('./img/doctor-sleep.jpg')}
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                icon_color="green"
                poster={require('./img/midway.jpg')}
            />
        </ScrollView>
    );
};

export default Allmovies;

