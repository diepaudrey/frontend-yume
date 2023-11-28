import styled from "styled-components"
import colors from '../colors.js'
import QuizBox from "./QuizBox.js"
import AnswerQuiz from "./AnswerQuiz.js"
import SendButton from "./SendButton.js"
import {useEffect, useState} from 'react'
import QuizService from "../QuizService.js"


export default function QuizComponent(){
    const [answersState, setAnswersState] = useState({a1 : false, a2 : false, a3 : false, a4 : false, a5 : false});
    const [question, setQuestion] = useState('Question')
    const [answers, setAnswers] = useState([])


    const handleAnswerChange = (answerId) => {
        const newAnswerState = {...answersState};

        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        newAnswerState[answerId] = true;

        setAnswersState(newAnswerState);
    }

    useEffect(()=>{
        QuizService.getQuizQuestion().then(data=>{
            setQuestion(data);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    useEffect(()=>{
        QuizService.getQuizAnswers().then(data=>{
            const answersTab = data.map(answers => answers.answer_text);
            setAnswers(answersTab);
            
        }).catch(err => {
            console.error(err);
        })
    }, []);



    return <QuizBox title_props={{title_color:colors.pink, title_text:question}} box_props={{box_color:colors.cream}}>
        <AnswersContainer>
            <AnswerQuiz answer_text={answers[0]} answer_id="a1" isChecked={answersState.a1} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_text={answers[1]} answer_id="a2" isChecked={answersState.a2} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_text={answers[2]} answer_id="a3" isChecked={answersState.a3} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_text={answers[3]} answer_id="a4" isChecked={answersState.a4} onChange={handleAnswerChange}/>
            <SendButton/>
        </AnswersContainer>
    </QuizBox>
}

const AnswersContainer = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
`