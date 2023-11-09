import styled from 'styled-components'
import colors from '../colors.js'
import React, { useState} from 'react';

export default function FieldLogin(props){
    const {text, type, className} = props;

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        const value = event.target.value;
        console.log(value);
        setInputValue(value);
      };
    return <Container className={className}> 
        <p>{text}</p>
        <AnswerContainer>
            <input  type={type} id="DQ-answer" placeholder="type here..." value={inputValue} onChange={handleInputChange}/>
      </AnswerContainer>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content : center;
    width: 15vw;
    padding-left: 10%;

    p{
        margin : 0;
        margin-bottom: 5px;
        color : ${colors.green}
    }
`

const AnswerContainer = styled.div`
  input{
    border: none;
    outline : none;
    margin-left : 25px;
    width: 80%;
    background-color: ${colors.cream};
    font-size : 0.8em;
  };
  ::placeholder{
    color : ${colors.light_green};
  }
  box-shadow: 0px 4px 4px 0px ${colors.green};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height : 4vh;
  width: 80%;
  background-color : ${colors.cream};
  border-radius: 15px 15px 15px 15px;

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
