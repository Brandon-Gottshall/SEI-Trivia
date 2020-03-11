import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import RMS from '../../helperFunctions'


export default function WelcomeBlock() {
    const [firstName, setFirstName] = useState('User')
    return(
        <View style={styles.container}>
            <MaterialIcons
                name='account-circle'
                size={250}
                color='white'
                style={styles.icon}
                />
            <Text style={styles.welcome}>Welcome, {firstName}</Text>
            <Text style={styles.motivational}>{RMS()}</Text>
        </View>
)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        backgroundColor: "rgb(125,207,196)"
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        width:300,
        fontSize: 20,
        bottom: 100
    },
    motivational: {
        color: 'white',
        width: 400,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        bottom: 50
    },
    icon: {
        bottom: 100
    }
})
