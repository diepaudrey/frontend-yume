import React from 'react'
import BoxOverview from './BoxOverview.js'
import colors from '../colors.js'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import QuizService from '../Services/QuizService.js'

export default function QuizAnswers() {
    const [quizAnswers, setQuizAnswers] = useState([])

    useEffect(() => {
        //requête pour avoir toutes les dailys quiz selon le user !;
        QuizService.fetchQuizAnswers(setQuizAnswers);
    }, [])

    return (
    <BoxOverview title_props={{title_color:colors.pink, title_text:"Quiz Answers"}} box_props={{box_color:colors.white, box_width: "40vw"}}>
        {quizAnswers.map((object, index) =>
            <Container key={index}>
                <p>Q.{index+1}. {object.question}</p>
                <p> - {object.answer}</p>
            </Container>
        )}
    </BoxOverview>
    )
}


const Container = styled.div`
    width: 90%;
    margin : 2%;
    p{
        color : ${colors.brown};
        margin-left: 2%;
    }
    border: 1px solid ${colors.light_brown};
    border-radius: 18px;

`