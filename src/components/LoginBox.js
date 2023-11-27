import styled from 'styled-components'
import colors from '../colors.js'

import {useState} from 'react'

import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'



export default function LoginBox(){
  const [text, setText] = useState('Log in');
  const [isSignUpPage, setIsSignUpPage] = useState(false);

  const handleClick = () =>{
    setIsSignUpPage(!isSignUpPage);
    setText(isSignUpPage ? 'Log in' : 'Sign Up');
  }

    return <Container>
    <Title>YUME</Title>
    <TitleBox> <h2>{text}</h2> </TitleBox>
    <ContentBox>
        {isSignUpPage ? <SignUpForm handleClick={handleClick} buttonText={text}/> : <LoginForm handleClick={handleClick} text={text}/>}
    </ContentBox>
  </Container>
}

const Title = styled.h1`

  @media screen and (min-width:768px) and (max-width:1024px) {
    font-size: 5rem;
    }
  
    @media screen and (max-width:767px) {
      font-size: 3rem;
    }
`

const Container = styled.div`
    width: 30vw;
    /* height: 100vh; */
    display : flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    color : ${colors.green};

    h1{
      color : white;
      margin : 0;
      margin-bottom: 10%;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
      width : 80%;
      height : 100%;
    }
  
    @media screen and (max-width:767px) {
      margin-top: 0;
      margin-bottom: 10%;
      width : 80%;
      height : 100%;
    }
`

const TitleBox = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 8vh;
  background-color: ${colors.light_green};
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;


  h2{
    margin-left : 5%;
    color: ${colors.cream};
  }


  @media screen and (min-width:768px) and (max-width:1024px) {
  }
  
  @media screen and (max-width:767px) {
    border-radius   : 17px 17px 0px 0px;
  }
`
const ContentBox = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .email{
      grid-row: 2/3;
    }
    .password {
      grid-row : 3/4;
    }

    padding-bottom: 2%;

    @media screen and (max-width:767px) {
        border-radius   : 0px 0px 17px 17px;
    }
`

