import React,  { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Button from './shared/Button'
import { MaterialIcons } from '@expo/vector-icons'

export default function UserHome({navigation}) {

    const [firstName, setFirstName] = useState('User')

    const navigateToSignIn = () => navigation.navigate('SignIn')

    return(
        <View style={styles.container}>
            <MaterialIcons
                name='account-circle'
                size={200}
                color='white'
                style={styles.icon}
                />
            <Text style={styles.welcome}>Welcome, {firstName}</Text>
            <Text style={styles.motivational}>{randomMotivationalStatement()}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(125,207,196)"
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        width:300,
        fontSize: 20,
        bottom: 200
    },
    motivational: {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        width:300,
        fontSize: 20,
        bottom: 180
    },
    icon: {
        bottom: 200
    }
})

function randomMotivationalStatement() {
    const motivationalStatments = [
        "You Got This!",
        "Go Get Em'",
        "Push Yourself",
        "I believe in you!",
        "Just do it! Make your dreams come true!",
        "Wish it, Want it, Do it",
        "Focus on Goals, not Obstacles."
    ]
    let randomInt = Math.floor(Math.random() * Math.floor(motivationalStatments.length))
    return motivationalStatments[randomInt]
}
