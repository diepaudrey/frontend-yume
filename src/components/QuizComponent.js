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
    const [error, setError] = useState(false);

    //FUNCTIONS
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

    //User response and send database
    const findUserAnswer = () => {
        const userAnswer = Object.keys(answersState).find((key) => answersState[key]);
        const indexAnswer = Object.keys(answersState).indexOf(userAnswer);
        return indexAnswer;
    };

    const handleNext = () => {
        const userIndexAnswer = findUserAnswer();
        //Check if user selected is not null
        if(userIndexAnswer == -1){
            setError(true);
        }
        else{
            //Prepare data of the user answer to be able to post the request to database
            const {quiz_id, question_id } = quiz[questionNum] || {};
            console.log("quiz id : ", quiz_id, "question_id :", question_id);
            setUserAnswers((prevInputs) => ({
                ...prevInputs,
                [questionNum]: {
                    id_quiz: quiz_id,
                    id_question: question_id,
                    id_answer: currentAnswers[findUserAnswer()].answer_id,
                }
            }));
            setQuestionNum(questionNum+1);
        }

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

    //Handle data fetching
    useEffect(() => {
        const fetchQuizData = async (quizId) => {
            try {
                const data = await QuizService.getQuizById(quizId);
                setQuiz(data);
                setCurrentQuestion(data[questionNum]?.question_text);
                setCurrentAnswers(data[questionNum]?.answers);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }


        const today = QuizService.getDate();
        if(localStorage.getItem('date') !== today) {
            fetchData();
            localStorage.setItem('quiz_id', quiz[0].quiz_id);
            localStorage.setItem('quiz_answered', false);
        }
        else{
            console.log("same daaaaay");
            const isQuizAnswered = JSON.parse(localStorage.getItem('quiz_answered'));
            const quizId = parseInt(localStorage.getItem('quiz_id'))
            if(JSON.parse(!isQuizAnswered)){
                //faire la requête avec l'id quiz
                console.log("go faire la requête", quizId);
                fetchQuizData(quizId);

                
            }
        }
    }, []);

    //Reset the style of selected answer and error message
    useEffect(() => {
        const newAnswerState = {...answersState};
        for(const key in newAnswerState) {
            newAnswerState[key] = false;
        }
        setAnswersState(newAnswerState);
        setError(false);
    },[questionNum])

    useEffect(()=>{
        if(questionNum === quiz.length && Object.keys(userAnswers).length>0) {
            QuizService.postQuizAnswers(userAnswers);
            localStorage.setItem('quiz_answered', true);
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
                {error ? <ErrorMessage>Select an answer</ErrorMessage> : null}
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

const ErrorMessage = styled.p`
    color : ${colors.pink};
    font-size : 0.8em;
    margin-left : auto;
    margin-right : auto;
    margin-bottom: 0;
`

const AnswersContainer = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
`