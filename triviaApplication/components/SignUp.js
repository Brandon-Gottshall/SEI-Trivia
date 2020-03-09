import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from './shared/Button'
import ModalDropdown from 'react-native-modal-dropdown'

export default function Sign() {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign-Up</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setUserName(text)}
              value={userName}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setFirstName(text)}
              value={firstName}
              placeholder='First Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setLastName(text)}
              value={lastName}
              placeholder='Last Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder='Email'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />

    // While this does work, turns out, it's probably
     // best to avoid using a dropdown on mobile.
     // I've found another library for an autocomplete
     // component.
     // react-native-autocomplete-input
     // Will likely implement for pmvp

        <ModalDropdown
            style={styles.dropdown} textStyle={styles.dropdownText} dropdownStyle={styles.dropdownDrawer}
            dropdownTextStyle={styles.dropdownTextStyle}
            options={['Blizzard']}/>


            <Button text="Sign-In" color='rgb(81,57,242)'/>
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
    }
    // ,
    // dropdown: {
    //     width: 250,
    //     margin: 10,
    //     height: 40,
    //     backgroundColor: 'white'
    // },
    // dropdownText: {
    //     textAlign: 'center',
    //     top: 10
    // },
    // dropdownDrawer: {
    //     width: 250,
    //     // This will needed to be changed once more cohorts are added.
    //     // I will end up mapping in cohorts.
    //     // Set height to cohorts.length * 35
    //     height: 35,
    //     marginTop: 11
    // },
    // dropdownTextStyle: {
    //     backgroundColor: 'blue'
    // }
})
