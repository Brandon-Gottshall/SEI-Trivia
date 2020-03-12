import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { getQuestionsByCatId } from '../services/api-helper'
export default function Loading({route, navigation}) {

const { data } = route.params

const [questions, setQuestions] = useState([
        {
            category_id: 1,
            prompt: "Which tag creates a paragraph element?",
            ans_1: "<para></para>",
            ans_2: "<p></p>",
            ans_3: "<text></text>",
            ans_4: "<span></span>",
            correct_ans: 2
        },
        {
            category_id: 1,
            prompt: "Which HTML tag will print the largest font?",
            ans_1: "<h6></h6>",
            ans_2: "<bold></bold>",
            ans_3: "<title></title>",
            ans_4: "<h1></h1>",
            correct_ans: 4
        },
        {
            category_id: 1,
            prompt: "What tag would we use to create a list with bullet points.",
            ans_1: "<ul></ul>",
            ans_2: "<li></li>",
            ans_3: "<ol></ol>",
            ans_4: "<bullet></bullet>",
            correct_ans: 1
        },
        {
            category_id: 1,
            prompt: "The <div> tag,",
            ans_1: "creates a horozontal line.",
            ans_2: "creates a generic container.",
            ans_3: "is a digital image view.",
            ans_4: "is used to hold links.",
            correct_ans: 2
        },
        {
            category_id: 1,
            prompt: "Which one of these is not a block element?",
            ans_1: "div",
            ans_2: "img",
            ans_3: "p",
            ans_4: "h1",
            correct_ans: 3
        },
        {
            category_id: 1,
            prompt: "Which one of these is not a block element?",
            ans_1: "p",
            ans_2: "img",
            ans_3: "span",
            ans_4: "strong",
            correct_ans: 2
        },
        {
            category_id: 1,
            prompt: "How would you complete this tag.",
            ans_1: "src=\"http://link.to/photo.jpg\">",
            ans_2: "link=\"http://link.to/photo.jpg\">",
            ans_3: "href=\"http://link.to/photo.jpg\">",
            ans_4: "location=\"http://link.to/photo.jpg\">",
            correct_ans: 1
        },
        {
            category_id: 1,
            prompt: "The <div> tag,",
            ans_1: "creates a horozontal line.",
            ans_2: "creates a generic container.",
            ans_3: "is a digital image view.",
            ans_4: "is used to hold links.",
            correct_ans: 2
        },
        {
            category_id: 1,
            prompt: "The <div> tag,",
            ans_1: "creates a horozontal line.",
            ans_2: "creates a generic container.",
            ans_3: "is a digital image view.",
            ans_4: "is used to hold links.",
            correct_ans: 2
        },
        {
            category_id: 1,
            prompt: "The <div> tag,",
            ans_1: "creates a horozontal line.",
            ans_2: "creates a generic container.",
            ans_3: "is a digital image view.",
            ans_4: "is used to hold links.",
            correct_ans: 2
        }
    ])

let renderCheck = 'No Data'

useEffect(() => {
    navigation.navigate('Game', {
        questions: questions
    })
},[])

return (
    <View style={styles.container}>
        <Text style={styles.text}>LOADING</Text>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.text}>Please Wait</Text>
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
        color: 'white',
        margin: 30,
        fontSize: 30
    }
})
