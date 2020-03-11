import React,  { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Button from './shared/Button'
import WelcomeBlock from './shared/WelcomeBlock'
import { MaterialIcons } from '@expo/vector-icons'
import RMS from '../helperFunctions'

export default function UserHome({navigation}) {


    const navigateToProfileSettings = () => navigation.navigate('ProfileSettings')
    const navigateToUnitSelector = () => navigation.navigate('UnitSelector')

    return(
        <View style={styles.container}>
            <WelcomeBlock/>
            <View style={styles.buttonContainer} >
                <Button text='Play' color='rgb(81,57,242)' helper={navigateToUnitSelector}/>
                <Button text='Profile' color='rgb(81,57,242)' helper={navigateToProfileSettings}/>
            </View>

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
    buttonContainer: {
        bottom: 160
    }
})
