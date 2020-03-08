import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function SignIn() {
    return(
        <View style={styles.container}>
            <Text>This is the SignIn page</Text>
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
    }
})
