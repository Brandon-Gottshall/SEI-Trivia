import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Button from './shared/Button'
import ListItem from './shared/ListItem'

export default function CategorySelector({navigation}) {

const [updated, setUpdated] = useState(false)
const [callData, setCallData] = useState([
    {
        id: '1',
        title: 'HTML',
        selected: false
    },
    {
        id: '2',
        title: 'CSS',
        selected: false

    },
    {
        id: '3',
        title: 'JS Arrays',
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
const navigateToLoading = () => {
    if (data[1]["selected"]){
        navigation.navigate('Loading', {
            data: data
        })
    }
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
                    // ListItem = ({ title, index, selected, setButtonsSelected })
                    <ListItem title={item.title} index={index} selected={data[index]["selected"]} setButtonsSelected={setButtonsSelected}/>
                )}
                />
            <Button text="Next" helper={navigateToLoading}/>
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
    }
})
