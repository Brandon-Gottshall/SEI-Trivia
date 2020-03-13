import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

export default function Question({ navigation, question, questionsWaiting, qNum, navigateToGame }) {

const [ answered, setAnswered ] = useState(false)
const [cOrI, setCorI] = useState('')
const { prompt, ans_1, ans_2, ans_3, ans_4, correct_ans } = question

const button1 = () => {
buttonChecker(1)
}
const button2 = () => {
buttonChecker(2)
}
const button3 = () => {
buttonChecker(3)
}
const button4 = () => {
buttonChecker(4)
}

const buttonChecker = (ans) => {
    setCorI(ans == correct_ans)
    setAnswered(true)
    // navigateToGame(questionsWaiting)
}
const setAndNav = () => {
    setAnswered(false)
    navigateToGame(questionsWaiting)
}
const QuestionView = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Question {qNum} of 10</Text>
            <Text style={styles.text}>{prompt}</Text>
            <Button text={ans_1} helper={button1} />
            <Button text={ans_2} helper={button2} />
            <Button text={ans_3} helper={button3} />
            <Button text={ans_4} helper={button4} />
        </View>
    )}
const CorrectOrIncorrect = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Question {qNum} of 10</Text>
            <Text style={styles.text}>{cOrI ? 'Correct' : 'Incorrect'}</Text>

            <Button text='Next' helper={setAndNav} />
        </View>
    )
}
let mainRender = answered ? CorrectOrIncorrect() : QuestionView()
return (
    mainRender
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
