import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Button from './shared/Button'

export default function Landing({navigation}) {

const navigateToSignIn = () => {navigation.navigate('SignIn')}

    return(
        <View style={styles.container}>
            <Text style={styles.text}>SEI Trivia</Text>
            <Button text="Sign-In" color='white' helper={navigateToSignIn}/>
            <Button text="Sign-Up" color='rgb(81,57,242)'/>
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
    text: {
        color: 'white',
        textAlign: 'center',
        width: 180,
        fontSize: 80,
        bottom: 60
    }
})
