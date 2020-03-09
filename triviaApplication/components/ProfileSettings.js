import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Button from './shared/Button'
import WelcomeBlock from './shared/WelcomeBlock'

export default function ProfileSettings() {
    return (
        <View style={styles.container}>

            <WelcomeBlock/>

            <Button text="Change Profile Picture"/>
            <Button text="Change Password"/>
            <Button text="Change Cohort"/>
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
    }})
