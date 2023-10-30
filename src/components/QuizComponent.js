import styled from "styled-components"
import colors from '../colors.js'
import BoxComponent from "./BoxComponent.js"
import AnswerQuiz from "./AnswerQuiz.js"

export default function QuizComponent(){
    return <BoxComponent title_props={{title_color:colors.pink, title_text:'QUIZ'}} box_props={{box_color:colors.cream, box_width:'400px'}}>
        <AnswersContainer>
            <AnswerQuiz answer_id="answer1"/>
            <AnswerQuiz answer_id="a2"/>
            <AnswerQuiz answer_id="a3"/>
            <AnswerQuiz answer_id="a4"/>
        </AnswersContainer>
    </BoxComponent>
}

const AnswersContainer = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
`