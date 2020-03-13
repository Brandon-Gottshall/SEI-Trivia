import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from './shared/Button'
import axios from 'axios'
import { registerUser } from '../services/api-helper'
import ModalDropdown from 'react-native-modal-dropdown'

export default function SignUp({navigation}) {
    const [userForm, setUserForm] = useState({
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        cohort_id: 1,
        role: 'student',
        access: false
    })
    const navigateToSignIn = () => {
        navigation.navigate('SignIn')
    }
    const handleUsernameChange = (e) => {
        setUserForm(prevState => ({
            ...prevState,
            username: e
        })
        )
    }
    const handleFirstnameChange = (e) => {
        setUserForm(prevState => ({
            ...prevState,
            first_name: e
        })
    )
    }
    const handleLastnameChange = (e) => {
        setUserForm(prevState => ({
            ...prevState,
            last_name: e
        })
    )
    }
    const handlePasswordChange = (e) => {
        setUserForm(prevState => ({
            ...prevState,
            password: e
        })
        )
    }
    const handleEmailChange = (e) => {
        setUserForm(prevState => ({
            ...prevState,
            email: e
        })
        )
    }

    const handleSubmit = async () => {
        let res = await registerUser(userForm)
        navigation.navigate('SignIn')
    }

    let { username, first_name, last_name, password, email } = userForm
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign-Up</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleUsernameChange}
              value={username}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handleFirstnameChange}
              value={first_name}
              placeholder='First Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handleLastnameChange}
              value={last_name}
              placeholder='Last Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handleEmailChange}
              value={email}
              placeholder='Email'
            />
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />

        <ModalDropdown
            style={styles.dropdown} textStyle={styles.dropdownText} dropdownStyle={styles.dropdownDrawer}
            dropdownTextStyle={styles.dropdownTextStyle}
            options={['Blizzard']}/>

            {
                // While this does work, turns out, it's probably
                //  best to avoid using a dropdown on mobile.
                //  I've found another library for an autocomplete
                //  component.
                //  react-native-autocomplete-input
                //  Will likely implement for pmvp
            }

            <Button text="Create Account" color='rgb(81,57,242)' helper={handleSubmit}/>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(125,207,196)"
    },
    text: {
        color: 'rgb(81,57,242)',
        textAlign: 'center',
        fontWeight: '500',
        width: 300,
        fontSize: 50,
        bottom: 50
    },
    input: {
        height: 40,
        width: 250,
        color: 'gray',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 7
    },
    dropdown: {
        width: 250,
        margin: 10,
        height: 40,
        backgroundColor: 'white'
    },
    dropdownText: {
        textAlign: 'center',
        top: 10
    },
    dropdownDrawer: {
        width: 250,
        // This will needed to be changed once more cohorts are added.
        // I will end up mapping in cohorts.
        // Set height to cohorts.length * 35
        height: 35,
        marginTop: 30,
        borderWidth: 0
    },
    dropdownTextStyle: {
        backgroundColor: 'rgb(29,138,197)',
        color: 'white'
    }
})
