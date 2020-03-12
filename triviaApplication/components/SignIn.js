import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from './shared/Button'
import { loginUser, verifyUser } from '../services/api-helper'
import { AsyncStorage } from 'react-native'

export default function SignIn({navigation}) {
    const [userForm, setUserForm] = useState({
        username: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = useState(null)

    const handleUsernameChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            username: e
        }))
    }
    const handlePasswordChange = (e) => {
        console.log(e)
        setUserForm(prevState => ({
            ...prevState,
            password: e
        })
        )
    }
    useEffect( () => {
     currentUser ?
        navigation.navigate('UserHome'):
        console.log('Login Failed. Please try again.')
    }, [currentUser])
    // const handleSubmit = () => {
    //     let data = { user: userForm }
    //     // e.preventDefault()
    //     let res = axios.post('http://localhost:3000/auth/login', data)
    //     console.log(res)
    // }
    const handleSubmit = async () => {
        const res = await loginUser({user: userForm})
        const verify = await verifyUser()
        setCurrentUser(verify)
        console.log(res)
    }
    let { username, password } = userForm
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign-In</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleUsernameChange}
              value={username}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />
        <Button text="Sign-In" color='rgb(81,57,242)' helper={handleSubmit}/>
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
        bottom: 200
    },
    input: {
        height: 40,
        width: 250,
        bottom: 100,
        color: 'gray',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 10

    }
})
