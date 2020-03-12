import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ListItem({ name, index, selected, setButtonsSelected }) {

    const unitStyleSelector = selected ? styles.unitSelected : styles.unit
    const unitTextStyleSelector = selected ? styles.unitSelectedText : styles.unitText

    return (
        <TouchableOpacity
            style={unitStyleSelector}
            onPress={() => {
                setButtonsSelected(index)
                console.log(`${name} selected? : ${selected}`)
            }}
            >
            <Text style={unitTextStyleSelector}>{name}</Text>
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({
    unit: {
        justifyContent: 'center',
        height: 80,
        width: 350,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 10
    },
    unitSelected: {
        justifyContent: 'center',
        height: 80,
        width: 350,
        backgroundColor: 'rgb(81,57,242)',
        marginTop: 10
    },
    unitText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'rgb(81,57,242)'
    },
    unitSelectedText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    }
})
