import styled from "styled-components"
import colors from '../colors.js'
import QuizBox from "./QuizBox.js"
import AnswerQuiz from "./AnswerQuiz.js"
import SendButton from "./SendButton.js"
import {useEffect, useState} from 'react'
import QuizService from "../Services/QuizService.js"


export default function QuizComponent(){
    //CONST
    const NEXT_BUTTON_TEXT = 'Next';
    const SUBMIT_BUTTON_TEXT = 'Submit';

    //USE STATE
    const [answersState, setAnswersState] = useState({a1 : false, a2 : false, a3 : false, a4 : false, a5 : false});
    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswers, setCurrentAnswers] = useState({});
    const [questionNum, setQuestionNum] = useState(0);
    const [textButton, setTextButton] = useState(NEXT_BUTTON_TEXT);
    const [userAnswers, setUserAnswers] = useState({});

    //FUNCTIONS
    const fetchData = async () => {
        try {
          const data = await QuizService.getQuiz();
          setQuiz(data);
          setCurrentQuestion(data[questionNum]?.question_text);
          setCurrentAnswers(data[questionNum]?.answers);
          localStorage.setItem('quiz_id', data[0].quiz_id);
        } catch (error) {
          console.error("Error fetching quiz:", error);
        }
    };

    //User response and send database
    const findUserAnswer = () => {
        const userAnswer = Object.keys(answersState).find((key) => answersState[key]);
        const indexAnswer = Object.keys(answersState).indexOf(userAnswer);
        return indexAnswer;
    };

    const handleNext = () => {
        //Prepare data of the user answer to be able to post the request to database
        setUserAnswers((prevInputs) => ({
            ...prevInputs,
            [questionNum]: {
                id_quiz: quiz[questionNum]?.quiz_id,
                id_question: quiz[questionNum]?.question_id,
                id_answer: currentAnswers[findUserAnswer()].answer_id,
            }
        }));
        setQuestionNum(questionNum+1);
    };

    const handleAnswerChange = (answerId) => {
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        newAnswerState[answerId] = true;
        setAnswersState(newAnswerState);
    }

    //USE EFFECT

    useEffect(() => {
        fetchData();
    }, []);

    //Reset the style of selected answer
    useEffect(() => {
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        setAnswersState(newAnswerState);
    },[questionNum])

    useEffect(()=>{
        if(questionNum === quiz.length && Object.keys(userAnswers).length>0) {
            console.log("Ca va poster : ", userAnswers);
            QuizService.postQuizAnswers(userAnswers);
        }
    }, [questionNum])

    //Display "submit" 
    useEffect(()=>{
        setCurrentQuestion(quiz[questionNum]?.question_text);
        setCurrentAnswers(quiz[questionNum]?.answers);
        if(questionNum === quiz.length-1) {
            setTextButton(SUBMIT_BUTTON_TEXT);
        }
    }, [questionNum])

    


    return <QuizBox title_props={{title_color:colors.pink, title_text:currentQuestion}} box_props={{box_color:colors.cream}}>
        <AnswersContainer>
            { currentAnswers!==undefined && questionNum !== quiz.length ? 
            <>
                <AnswerQuiz answer_text={currentAnswers[0].answer_text} answer_id="a1" isChecked={answersState.a1} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[1].answer_text} answer_id="a2" isChecked={answersState.a2} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[2].answer_text} answer_id="a3" isChecked={answersState.a3} onChange={handleAnswerChange}/>
                <AnswerQuiz answer_text={currentAnswers[3].answer_text} answer_id="a4" isChecked={answersState.a4} onChange={handleAnswerChange}/>
                <SendButton text={textButton} onSubmit={handleNext}/>
            </>
            : <p> No more quiz today !</p>
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