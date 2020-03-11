import React from 'react';
import { View, Text } from 'react-native'

export default function Question({question}) {
// question = {
    // category_id: 1,
    // prompt: "The <div> tag,",
    // ans_1: "creates a horozontal line.",
    // ans_2: "creates a generic container.",
    // ans_3: "is a digital image view.",
    // ans_4: "is used to hold links.",
    // correct_ans: 2
    // }
return (
    <View style={styles.container}>
        <Text style={styes.color}>You are in Question{question.prompt}</Text>
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
    text: {
        color: 'red',
        margin: 30,
        fontSize: 30
    }
})
