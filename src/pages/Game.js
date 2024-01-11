
import Header from '../components/Header.js';
import DailyAnswers from "../components/DailyAnswers.js";
import colors from '../colors.js';
import QuizAnswers from '../components/QuizAnswers.js';
import SendButton from '../components/SendButton.js';
import { useEffect, useState} from 'react';

export default function Game(){
    const [isDailyAnswers, setIsDailyAnswers] = useState(true);
    const [textButton, setTextButton] = useState('Quiz Answers')
    
    const handleSubmit = () => {
        setIsDailyAnswers(!isDailyAnswers);
    }

    useEffect(() => {
        if(isDailyAnswers){
            setTextButton('Quiz Answers');
        }
        else{
            setTextButton('Daily Answers');
        }
    }, [isDailyAnswers])

    return (
    <>
    <Header/>
    {isDailyAnswers ?
            <DailyAnswers title_props={{title_color:colors.pink, title_text:"Daily answers"}} box_props={{box_color:colors.cream}}>
            </DailyAnswers>
        :
            <QuizAnswers></QuizAnswers>
    }
    <SendButton text={textButton} onSubmit={handleSubmit}/>
    </>
    )
    

}