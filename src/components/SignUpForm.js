import styled from 'styled-components'
import colors from '../colors.js'

import {useState} from 'react'

import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import AccountService from '../AccountService.js'

export default function SignUpForm(props){
    const {handleClick, buttonText} = props;
    const [signUpFirstName, setSignUpFirstName] = useState();
    const [signUpLastName, setSignUpLastName] = useState();
    const [signUpEmail, setSignUpEmail] = useState();
    const [signUpPassword, setSignUpPassword] = useState();

  
    const handleSignUpFirstNameInputChange = (event) => {
        setSignUpFirstName(event.target.value);

    };

    const handleSignUpLastNameInputChange = (event) => {
        setSignUpLastName(event.target.value);

    }

    const handleSignUpEmailInputChange = (event) => {
        setSignUpEmail(event.target.value);
    };

    const handleSignUpPasswordInputChange = (event) => {
        setSignUpPassword(event.target.value);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        console.log(signUpFirstName, signUpLastName, signUpEmail, signUpPassword); //a supprimer

        const userInformation = {
        last_name: signUpLastName,
        first_name: signUpFirstName,
        email: signUpEmail,
        password: signUpPassword,
        };
        AccountService.createUser(userInformation);
    }

    return <>
    <Fields id="signup-form">
        <FieldLogin text="First Name" type="text" className="first-name" value={signUpFirstName} handleInputChange={handleSignUpFirstNameInputChange}></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name" value={signUpLastName} handleInputChange={handleSignUpLastNameInputChange}></FieldLogin>
        <FieldLogin text="Email" type="email" className="email" value={signUpEmail} handleInputChange={handleSignUpEmailInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="password" value={signUpPassword} handleInputChange={handleSignUpPasswordInputChange}></FieldLogin>
    </Fields>
    <Submit>
        <LoginSection>
            <p>Already a member ?</p>
            <p className="login" onClick={()=>{handleClick()}}>Log in </p>
        </LoginSection>
        <SendButton buttonText={buttonText} onSubmit={handleSignupSubmit} form="signup-form"/>
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

const LoginSection = styled.div`
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