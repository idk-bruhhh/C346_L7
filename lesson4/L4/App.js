import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Boat from './Boats';

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>GetABoat – Powerboats for Sale</Text>

            <Boat
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name="ship"
                icon_color="darkblue"
                picture={require('./img1/sea_ray.jpg')}
            />

            <Boat
                name="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name="sailboat"
                icon_color="darkblue"
                picture={require('./img1/four_winns.jpg')}
            />

            <Boat
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                icon_name="anchor"
                icon_color="darkblue"
                picture={require('./img1/flipper.jpg')}
            />

            <Boat
                name="Princess V48"
                description="Option for an open design with a full-length cockpit and sunroof, or enclosed deck saloon model."
                icon_name="water"
                icon_color="darkblue"
                picture={require('./img1/princess.jpg')}
            />

            <Boat
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                icon_name="ship"
                icon_color="darkblue"
                picture={require('./img1/bayliner.jpg')}
            />

            <Boat
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                icon_name="life-ring"
                icon_color="darkblue"
                picture={require('./img1/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#EAF4FC',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: 'grey',
    },
});
