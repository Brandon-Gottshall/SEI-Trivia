import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Button({helper, text, fontColor, color, screen}) {
    Button.defaultProps = {
        fontColor: 'white'
    }
    return(
        <TouchableOpacity
            style={[styles.button, {backgroundColor: color}]}
            onPress={
                () => helper()
            }>
            <View>
                <Text style={{color:fontColor}}>
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
