import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Button({helper, text, color, screen}) {
    return(
        <TouchableOpacity
            style={[styles.button, {backgroundColor: color}]}
            onPress={
                () => helper()
            }>
            <View>
                <Text>
                {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
        borderRadius: 40
    }
})
