import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Button from './shared/Button'

export default function SignIn() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign-In</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setUserName(text)}
              value={userName}
              placeholder='User Name'
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder='Password'
            />
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
