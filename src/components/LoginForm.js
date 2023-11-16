import styled from 'styled-components'
import colors from '../colors.js'

import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import AccountService from '../AccountService.js'



export default function LoginForm(props){
  const {handleClick, text} = props
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const navigate = useNavigate();

  const handleEmailInputChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setLoginPassword(event.target.value);
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); 
    const userLoginInformation = {
      email : loginEmail,
      password : loginPassword
    }
    try{
      const isLoggedIn = await AccountService.checkUserLogin(userLoginInformation);
      if(isLoggedIn){
        console.log("Front : Logged in");
        navigate('/');
      }
      else{
        console.log("Front : User not found or login failed");

      }

    }catch(error){
      console.error("Front : Error during login", error);
    }
    
  }

    return <>
    <Fields id="login-form">
        <FieldLogin text="Email" type="email" className="signup-email" value={loginEmail} handleInputChange={handleEmailInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="signup-password" value={loginPassword} handleInputChange={handlePasswordInputChange}></FieldLogin>
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
  padding-top: 5%;
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