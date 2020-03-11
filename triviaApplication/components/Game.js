import React, { useState, useEffect } from 'react'
import {View, Text} from 'react-native'

export default function Game({route, navigation}) {
    const { questions } = route.params

    const [questionsWaiting, setQuestionsWaiting] = useState([])
    const [completedQuestions, setCompletedQuestions] = useState()

    useEffect(() => setQuestionsWaiting(questions),[])

    const render = () => {
        let screen
        if (questionsWaiting > 0) {
            let question = questionsWaiting.pop()
            return <Question question={question}/>
        }
    }

    return (
        <View>
            {render()}
        </View>
    )
}
