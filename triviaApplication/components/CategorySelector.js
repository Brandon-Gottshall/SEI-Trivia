import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Button from './shared/Button'

const Unit = ({ title, index, selected, setButtonsSelected }) => {

    const styleSelector = selected ? styles.unitSelected : styles.unit

    return (
        <TouchableOpacity
            style={styleSelector}
            onPress={() => {
                setButtonsSelected(index)
                console.log(`${title} selected? : ${selected}`)
            }}
            >
            <Text style={styles.unitText}>{title}</Text>
        </TouchableOpacity>
    )}

export default function CategorySelector() {

const [updated, setUpdated] = useState(false)
const [callData, setCallData] = useState([
    {
        id: '1',
        title: 'Unit 1',
        selected: false
    },
    {
        id: '2',
        title: 'Unit 2',
        selected: false

    },
    {
        id: '3',
        title: 'Unit 3',
        selected: false
    }
])
const allButton = [
    {
    id: '0',
    title: 'All',
    selected: false
    }]
const [ data, setData ] = useState([])


useEffect(() => {
    let conArr = [...allButton]
    conArr.push(...callData)
    setData(conArr)
}, []);

const setButtonsSelected = (index) => {
    let newData = data;
    if (index == 0) {
        if (data[0]["selected"]) {
            newData = data.map((item) => {
                let tempItem = item
                tempItem.selected = false
                return tempItem
            })
        } else {
            newData = data.map((item) => {
                let tempItem = item
                tempItem.selected = true
                return tempItem
            })
            }
        }
     else {
        if (data[0]["selected"]) {
            data[0]["selected"] = !data[0]["selected"]
        }
        newData[index]["selected"] = !data[index]["selected"];
        setData(newData)
    }
    setUpdated(!updated)
    console.log(newData)
}

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                Pick One or More Categories
            </Text>
            <FlatList
                data={data}
                extraData={updated}
                keyExtractor={item => item.id}
                contentContainerStyle={{flex: 1,}}
                renderItem={({ item, index }) => (
                    <Unit title={item.title} index={index} selected={data[index]["selected"]} setButtonsSelected={setButtonsSelected}/>
                )}
                />
            <Button text="Next"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(125,207,196)"
    },
    instructions: {
        fontSize: 40,
        fontWeight: "500",
        width: 400,
        backgroundColor: "rgb(125,207,196)",
        textAlign: 'center',
        marginTop: 80,
        color:'black',
        zIndex: 1
    },
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
        backgroundColor: 'blue',
        marginTop: 10
    },
    unitText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'rgb(81,57,242)'
    }
})
