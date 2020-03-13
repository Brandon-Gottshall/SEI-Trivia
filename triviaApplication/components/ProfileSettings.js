import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './shared/Button'
import WelcomeBlock from './shared/WelcomeBlock'

export default function ProfileSettings({route}) {
    const { first_name } = route.params
    return (
        <View style={styles.container}>

            <WelcomeBlock name={first_name}/>
            <View style={styles.buttonContainer}>
                <Button text="Change Profile Picture"/>
                <Button text="Change Password"/>
                <Button text="Change Cohort"/>
                <Button text="Delete User"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "rgb(125,207,196)"
    },
    buttonContainer: {
        bottom: 80
    }
})
