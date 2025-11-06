import React from 'react';
import { View, Text } from 'react-native';

const Welcome = ({ code, name }) => {
    return (
        <View>
            <Text>These are my modules this semester:</Text>
            <Text>Welcome to {code} - {name}</Text>
        </View>
    );
};

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Welcome code="C346" name="Mobile App Development" />
                <Welcome code="C105" name="Introduction to Programming" />
                <Welcome code="C337" name="Immersive Technologies" />
                <Welcome code="C219" name="Web App Development" />
            </View>
        );
    }
}

export default ModuleInfo;
