import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import fetchDailyQuestion from '../APIRequest'


export default function DailyQuestion(){
    const handleClick = () => {
      console.log('Bouton cliqué !'); // Afficher un message dans la console lorsque le bouton est cliqué
    };
    const [question, setQuestion] = useState('Daily Question');
    useEffect(() => {
      // Effectuez la requête API et mettez à jour l'état lorsque la composante est montée.
      fetchDailyQuestion().then((data) => {
        if (data) {
          setQuestion(data);
        }
      });
    }, []);

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      const value = event.target.value;
      console.log(value);
      setInputValue(value);
    };


    return <Container><QuestionContainer>
        <p> {question} </p>
      </QuestionContainer>
      <AnswerContainer>
        <input type="text" id="DQ-answer" placeholder="type here..." value={inputValue} onChange={handleInputChange}/>
        <Button type="submit" onClick={handleClick}>Send</Button>
      </AnswerContainer>
      </Container>
    
};

const Container = styled.div`

  width : 60vw;

  @media screen and (min-width: 768px) and (max-width: 1024px){
    width : 70vw;
  }

  @media screen and (max-width : 767px) {
    width : 70vw;
  }
  
`

const QuestionContainer = styled(Container)`
  p{
    margin-top : 15px;
    margin-left : 25px;
    
  };
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  height : 5vh;
  background-color : #99AD8D;
  border-radius: 15px 15px 0px 0px;
  color: white;
  font-size: 1em;

  @media screen and (min-width: 768px) and (max-width: 1024px){
  p{
    margin-top : 20px;
    margin-left : 20px;
    
  };
  height: 45px;

  }

  @media screen and (max-width : 767px) {
    p{
    margin-top : 10px;
    margin-left : 15px;
    };
    font-size: 0.8em;
    
  }
`
const AnswerContainer = styled(Container)`
  input{
    border: none;
    outline : none;
    margin-left : 25px;
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
    };

    height : 50px;
  }

  @media screen and (max-width : 767px) {
    input{

      margin-left: 15px;
    };
    font-size: 0.8em;
    
  };

`
const Button = styled.button`
  height: 40%;
  margin : 20px;
`