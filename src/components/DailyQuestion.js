import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import DailyQuestionService from '../Services/DailyQuestionService'



export default function DailyQuestion(){
    const handleClick = () => {
      const data = {
        id_question : infoQuestion.id,
        answer : inputValue
      }
      DailyQuestionService.sendDailyAnswer(data);
      setInputValue('');
    };
    
    const [question, setQuestion] = useState('Daily Question');
    const [infoQuestion, setInfoQuestion] = useState([]);


    useEffect(() => {
      const date = DailyQuestionService.getDate();
      
      if(localStorage.getItem('date') !== date) {
        console.log("new day")
        localStorage.setItem('date', date);
        DailyQuestionService.fetchDailyQuestion().then((data) => {
          if (data) {
            setQuestion(data[0].question);
            setInfoQuestion(data[0]);
            localStorage.setItem('daily_question', data[0].question);
          }
        });
      }
      else{
        console.log("same day");
        setQuestion((localStorage.getItem('daily_question')));
      }
    }, []);

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      const value = event.target.value;
      console.log(value);
      setInputValue(value);
    };


    return (
    <Container>
      <QuestionContainer>
        <p> {question} </p>
      </QuestionContainer>
      <AnswerContainer>
        <input type="text" id="DQ-answer" placeholder="type here..." value={inputValue} onChange={handleInputChange}/>
        <Button type="submit" onClick={handleClick}>Send</Button>
      </AnswerContainer>
    </Container>)
    
};


const Container = styled.div`
  margin : 1%;
  width : 60vw;
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width : 70vw;
  }
  @media screen and (max-width : 767px) {
    width : 70vw;
    margin-bottom: 2%;
  }
  
`

const QuestionContainer = styled.div`
  p{
    margin-left : 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  };
  
  display: flex;
  flex-direction: column;
  height : auto;
  background-color : #99AD8D;
  border-radius: 15px 15px 0px 0px;
  color: white;
  font-size: 1em;

  @media screen and (min-width: 768px) and (max-width: 1024px){
  p{
    margin-top : 20px;
    margin-left : 20px;
    
  };
  height: auto;

  }

  @media screen and (max-width : 767px) {
    height: auto;
    
    p{
    margin-top : 10px;
    margin-left : 15px;
    font-size: 0.8em;
    };
    
    
  }
`
const AnswerContainer = styled.div`
  input{
    border: none;
    outline : none;
    margin-left : 25px;
    width : 100%;
  };
  box-shadow: 0px 4px 4px 0px #99AD8D;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height : 6vh;
  background-color : white;
  border-radius: 0px 0px 15px 15px;

  @media screen and (min-width: 768px) and (max-width: 1024px){
    input{
      margin-left: 20px;
      width : 100%;
    };

    height : 50px;
  }

  @media screen and (max-width : 767px) {
    input{
      width : 100%;
      margin-left: 15px;
    };
    font-size: 0.8em;
    
  };

`
const Button = styled.button`
  height: 40%;
  margin : 20px;
`
