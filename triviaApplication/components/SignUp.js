import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from './shared/Button'
import ModalDropdown from 'react-native-modal-dropdown'

export default function SignUp() {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = () => {
        set
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign-Up</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleUsernameChange}
              value={userName}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handleFirstnameChange}
              value={firstName}
              placeholder='First Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handleLastnameChange}
              value={lastName}
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

            <Button text="Create Account" color='rgb(81,57,242)'/>
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
