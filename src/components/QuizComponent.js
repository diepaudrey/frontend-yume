import styled from "styled-components"
import colors from '../colors.js'
import QuizBox from "./QuizBox.js"
import AnswerQuiz from "./AnswerQuiz.js"
import SendButton from "./SendButton.js"
import {useEffect, useState} from 'react'
import QuizService from "../QuizService.js"

import Axios from 'axios'


export default function QuizComponent(){
    //Selected answer
    const [answersState, setAnswersState] = useState({a1 : false, a2 : false, a3 : false, a4 : false, a5 : false});
    //Display Question and anwsers

    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentAnswers, setCurrentAnswers] = useState();

    //To change the question
    const [questionNum, setQuestionNum] = useState(0);
    const [textButton, setTextButton] = useState('Next');

    const [userAnswers, setUserAnswers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await QuizService.getQuiz();
            setQuiz(data);
            setCurrentQuestion(data[questionNum]?.question_text);
            setCurrentAnswers(data[questionNum]?.answers);
          } catch (error) {
            console.error("Error fetching quiz:", error);
          }
        };

        //refresh when changing question
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        setAnswersState(newAnswerState);
      
        fetchData();
      }, [questionNum]);

    
    //User response and send database

    const findUserAnswer = () => {
        const userAnswer = Object.keys(answersState).find((key) => answersState[key]);
        const indexAnswer = Object.keys(answersState).indexOf(userAnswer);
        return indexAnswer;
    };

    const handleSubmit = () => {
        console.log('Submit')

        setUserAnswers((prevAnswers) => [...prevAnswers, currentAnswers[findUserAnswer()].answer_text]);

        if(questionNum !== quiz.length) {
            setQuestionNum(questionNum+1);
        }
        setTextButton('Submit');
    }
    

    const handleAnswerChange = (answerId) => {
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        newAnswerState[answerId] = true;
        setAnswersState(newAnswerState);
    }

    return <QuizBox title_props={{title_color:colors.pink, title_text:currentQuestion}} box_props={{box_color:colors.cream}}>
        <AnswersContainer>
            { currentAnswers!==undefined && questionNum !== quiz.length ?
            <>
                <AnswerQuiz answer_text={currentAnswers[0].answer_text} answer_id="a1" isChecked={answersState.a1} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[1].answer_text} answer_id="a2" isChecked={answersState.a2} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[2].answer_text} answer_id="a3" isChecked={answersState.a3} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[3].answer_text} answer_id="a4" isChecked={answersState.a4} onChange={handleAnswerChange}/>
                <SendButton text={textButton} onSubmit={handleSubmit}/>
            </>
            : <p>Thank for submitting ! {userAnswers} </p>
            }
            
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