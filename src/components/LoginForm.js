import styled from 'styled-components'
import colors from '../colors.js'

import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import Axios from 'axios'

import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import AccountService from '../AccountService.js'



export default function LoginForm(props){
  const {handleClick, text} = props
  const [userInputs, setUserInputs] = useState({
    email : 'email',
    password : 'password'
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserInputs((prevInputs)=>({
      ...prevInputs, 
      [event.target.name] : event.target.value
    }));
  }

  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("userinfo LOGIN:" , userInputs)
    try{
      const userFound = await AccountService.checkUserLogin(userInputs);
      if(userFound){
        console.log("Front : Logged in");
        navigate('/home');
        setError(false)
      }
      else{
        console.log("Front : User not found or login failed");
        setError(true)
      }

    }catch(error){
      console.error("Front : Error during login", error);
    }
    
  }


    return <>
    {error ? <ErrorMessage>Wrong email/password combination</ErrorMessage> : null}
    <Fields>
        <FieldLogin text="Email" type="email" className="signup-email" name="email" value={userInputs.email} handleInputChange={handleInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="signup-password" name="password" value={userInputs.password} handleInputChange={handleInputChange}></FieldLogin>
    </Fields>
    <Submit>
        <SignupSection>
            <p>Want to create an account ?</p>
            <p className="signup" onClick={()=>{handleClick()}}>Sign up </p>
        </SignupSection>
        <SendButton text={text} onSubmit={handleLoginSubmit} form="login-form"/>
    </Submit>
  </>
}


const Fields = styled.form`
  height: 90%;
  display : grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 1em, 1em;
  padding-top: 3%;

  @media screen and (min-width:768px) and (max-width:1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (max-width:767px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const SignupSection = styled.div`
  display: flex;
  flex-direction: row;

`

const Submit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2%;
  p{
    margin : 0;
    font-size: 0.8em;
  }

  .link{
    color : ${colors.green};
    text-decoration : underline;
  }

`

const ErrorMessage = styled.p`
    color : ${colors.pink};
    font-size : 0.8em;
    margin-left : auto;
    margin-right : auto;
    margin-bottom: 0;
`