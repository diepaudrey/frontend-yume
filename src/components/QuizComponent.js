import styled from "styled-components"
import colors from '../colors.js'
import QuizBox from "./QuizBox.js"
import AnswerQuiz from "./AnswerQuiz.js"
import SendButton from "./SendButton.js"
import {useEffect, useState} from 'react'
import QuizService from "../QuizService.js"



export default function QuizComponent(){
    //Selected answer
    const [answersState, setAnswersState] = useState({a1 : false, a2 : false, a3 : false, a4 : false, a5 : false});
    //Display Question and anwsers

    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswers, setCurrentAnswers] = useState({});

    //To change the question
    const [questionNum, setQuestionNum] = useState(0);
    const [textButton, setTextButton] = useState('Next');

    const [userAnswers, setUserAnswers] = useState({
        id_quiz : -1,
        id_question : -1,
        id_answer : -1,
    })


    useEffect(() => {
        const date = QuizService.getDate();

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
      
      if(localStorage.getItem('date') !== "date") {
            fetchData();
        }
        //refresh when changing question
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        setAnswersState(newAnswerState);
      }, [questionNum]);

    
    //User response and send database

    const findUserAnswer = () => {
        const userAnswer = Object.keys(answersState).find((key) => answersState[key]);
        const indexAnswer = Object.keys(answersState).indexOf(userAnswer);
        return indexAnswer;
    };

    const handleSubmit = () => {
        //Prepare data of the user answer to be able to post the request to database
        const userAnswersInfo = {
            id_quiz : quiz[questionNum]?.quiz_id,
            id_question : quiz[questionNum]?.question_id,
            id_answer : currentAnswers[findUserAnswer()].answer_id,
        }
        setUserAnswers(userAnswersInfo)
        QuizService.postQuizAnswer(userAnswersInfo);
        setQuestionNum(questionNum+1);
}

    useEffect(()=>{
        if(questionNum === quiz.length-1) {
            console.log("last question n°", questionNum);
            setTextButton('Submit');
        }
    }, [])

    
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
            : <p>Thank for submitting !</p>
            // : <> {QuizService.postTookQuiz(userAnswers)} <p>Thank for submitting !</p></>
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