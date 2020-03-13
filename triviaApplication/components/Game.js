import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Question from './shared/Question'

export default function Game({route, navigation}) {
    const { questions } = route.params
    console.log(route)

    const [questionsWaiting, setQuestionsWaiting] = useState([])
    const [completedQuestions, setCompletedQuestions] = useState([])

    useEffect(() => setQuestionsWaiting(questions),[questions])

    const navigateToGame = (questions) => {
        navigation.navigate('Game', {
            questions: questions
        })
    }

    const render = () => {
        let screen
        if (questionsWaiting.length > 0) {
            let question = questionsWaiting.pop()
            return <Question question={question} questionsWaiting={questionsWaiting} qNum={10 - questionsWaiting.length} navigateToGame={navigateToGame}/>
        }
    }

    return (
        <View style={styles.container}>
            {render()}
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
