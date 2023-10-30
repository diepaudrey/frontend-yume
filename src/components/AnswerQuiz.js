import styled from 'styled-components'
import colors from '../colors.js'
import checkmark from '../assets/img/checkmark.svg'
import {useState} from 'react'

export default function AnswerQuiz(props){
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }
  
  const {bg_color, answer_id} = props; 


  return <> {isChecked ? (
    <CheckedAnswer>
      <input type="checkbox" id={answer_id} checked={isChecked} onChange={handleCheckboxChange}/>
      <label htmlFor={answer_id} className='custom-input'></label>
      <label htmlFor="custom-checkbox">Answer</label>
    </CheckedAnswer>
  ): (
    <AnswerContainer style={{backgroundColor:bg_color}}>
      <input type="checkbox" id={answer_id} checked={isChecked} onChange={handleCheckboxChange}/>
      <label htmlFor={answer_id} className='custom-input'></label>
      <label htmlFor={answer_id}>Answer</label>
    </AnswerContainer>
  )}
  </>
}


const AnswerContainer = styled.div` 
    width: 80%;
    height: 50px;
    color : ${props => props.color || colors.pink};
    background-color: ${props=>props.backgroundColor || 'white'};
    border-radius:10px; 
    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.25);

    display: flex;
    flex-direction: row;
    align-items: center;

    margin : 15px;

    input[type="checkbox"] {
    display: none;
  }

  .custom-input{
    width: 1em;
    height: 1em;
    margin-left: 5%;
    margin-right: 5%;
    background-color: white;
    border: 2px solid ${props => props.color || colors.pink};
    border-radius:5px; 
    display: inline-block;
    cursor: pointer;
  }

  /*CSS only on input*/ 
  input[type="checkbox"]:checked + label{
    background-color: ${props => props.backgroundColor || colors.pink};
    border-color: ${props => props.color || colors.pink};
    content : url(${checkmark});
  }

`
const CheckedAnswer = styled(AnswerContainer)`
  background-color: ${props => props.backgroundColor || colors.light_pink};
  color : white;
`;