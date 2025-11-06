import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ image, options, selectedValue, onValueChange, label }) => {
    return (
        <View style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 15,
            marginBottom: 25,
            width: '90%',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 4,
            elevation: 4, }}>
            <Image
                source={{ uri: image }}
                style={{ width: 350, height: 400, borderRadius: 10, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
                {label}
            </Text>
            <Picker
                selectedValue={selectedValue}
                style={{
                    width: 300,
                    height: 60,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: '#f0f0f0',
                }}
                onValueChange={onValueChange}
            >
                <Picker.Item label="Select an answer..." value="" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

const QuizApp = () => {
    // Store selected answers
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const correctAnswers = {
        q1: 'Cat',
        q2: 'Dog',
        q3: 'Horse',
    };

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswers.q1) score++;
        if (answer2 === correctAnswers.q2) score++;
        if (answer3 === correctAnswers.q3) score++;

        let message = `You got ${score} out of 3 correct!`;

        if (score === 3) message += '\n Excellent!';
        else if (score === 2) message += '\n Good job!';
        else if (score === 1) message += '\n Try harder next time...';
        else message += '\n Did you even study...?';

        Alert.alert('Quiz Result', message);
    };

    return (
        <ScrollView style={{ backgroundColor: '#E8F4F8' }}>
        <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 45, fontWeight: 'bold', marginBottom: 20 }}>
                🐾 Animal Quiz 🐾
            </Text>

            <Question
                label="1. What animal is this?"
                image="https://i.pinimg.com/736x/4c/75/a6/4c75a627840fa3cf1c714454fcf4e173.jpg"
                options={['Cat', 'Snake', 'Rabbit']}
                selectedValue={answer1}
                onValueChange={(val) => setAnswer1(val)}
            />

            <Question
                label="2. What animal is this?"
                image="https://i.pinimg.com/236x/2b/e8/27/2be827d60d85af358434a7ecd8d433aa.jpg"
                options={['Lion', 'Dog', 'Crocodile']}
                selectedValue={answer2}
                onValueChange={(val) => setAnswer2(val)}
            />

            <Question
                label="3. What animal is this?"
                image="https://i.pinimg.com/736x/08/af/17/08af176fb062281fc1e44a1635d62e13.jpg"
                options={['Giraffe', 'Elephant', 'Horse']}
                selectedValue={answer3}
                onValueChange={(val) => setAnswer3(val)}
            />

            <View style={{ marginTop: 20, width: '60%' }}>
                <Button title="Submit Answers" onPress={handleSubmit} color="#4682B4" />
            </View>
        </View>
        </ScrollView>
    );
};

export default QuizApp;
