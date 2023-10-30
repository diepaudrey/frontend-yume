import styled from "styled-components"
import colors from '../colors.js'
import QuizBox from "./QuizBox.js"
import AnswerQuiz from "./AnswerQuiz.js"
import {useState} from 'react'


export default function QuizComponent(){

    const [answersState, setAnswersState] = useState({a1 : false, a2 : false, a3 : false, a4 : false, a5 : false});

    const handleAnswerChange = (answerId) => {
        const newAnswerState = {...answersState};

        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        newAnswerState[answerId] = true;

        setAnswersState(newAnswerState);
    }

    return <QuizBox title_props={{title_color:colors.pink, title_text:'QUIZ'}} box_props={{box_color:colors.cream}}>
        <AnswersContainer>
            <AnswerQuiz answer_id="a1" isChecked={answersState.a1} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_id="a2" isChecked={answersState.a2} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_id="a3" isChecked={answersState.a3} onChange={handleAnswerChange}/>
            <AnswerQuiz answer_id="a4" isChecked={answersState.a4} onChange={handleAnswerChange}/>
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