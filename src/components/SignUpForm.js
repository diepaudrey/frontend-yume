import styled from 'styled-components'
import colors from '../colors.js'

import {useEffect, useState} from 'react'

import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import AccountService from '../AccountService.js'

export default function SignUpForm(props){
    const {handleClick, buttonText} = props;
    // const [signUpFirstName, setSignUpFirstName] = useState('');
    // const [signUpLastName, setSignUpLastName] = useState('');
    // const [signUpEmail, setSignUpEmail] = useState('');
    // const [signUpPassword, setSignUpPassword] = useState('');
    const [errors, setErrors] = useState({base : "test"});
    const [submitted, setSubmitted] = useState();

    const [userInputs, setUserInputs] = useState({
        last_name: '',
        first_name: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log("name : ", name, "value : ", value)
        setUserInputs((prevInputs)=>({
            ...prevInputs, 
            [name]:value,
        }))
    };

  
    // const handleSignUpFirstNameInputChange = (event) => {
    //     setSignUpFirstName(event.target.value);

    // };

    // const handleSignUpLastNameInputChange = (event) => {
    //     setSignUpLastName(event.target.value);

    // }

    // const handleSignUpEmailInputChange = (event) => {
    //     setSignUpEmail(event.target.value);
    // };

    // const handleSignUpPasswordInputChange = (event) => {
    //     setSignUpPassword(event.target.value);
    // }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        //console.log(signUpFirstName, signUpLastName, signUpEmail, signUpPassword); //a supprimer
        // userInputs = {
        // last_name: signUpLastName,
        // first_name: signUpFirstName,
        // email: signUpEmail,
        // password: signUpPassword,
        // };
        console.log("userinfo :" , userInputs)
        setErrors(AccountService.isFormValid(userInputs));
        // if(Object.keys(errors).length > 0){
        //     console.log("Y'a des erreurs");
        //     setSubmitted(false);
        // }
        // else{
        //     console.log("Pas d'erreurs");
        //     //AccountService.createUser(userInputs);
        //     setSubmitted(true);
        // }
    }

    useEffect(()=>{
        //console.log("Les erreurs : ", errors, " nombre d'erreur :",  Object.keys(errors).length);
        //console.log("userInputs : ", userInputs);
        if(Object.keys(errors).length > 0){
            console.log("Y'a des erreurs");
            setSubmitted(false);
        }
        else{
            console.log("Pas d'erreur");
            AccountService.createUser(userInputs);
            setSubmitted(true);
        }
    }, [errors]);

    return <>
    {Object.keys(errors).length === 0 && submitted ? <SubmitMessage>You have successfully created a new account</SubmitMessage> : null}
    <Fields id="signup-form">
        {/* <FieldLogin text="First Name" type="text" className="first-name" value={signUpFirstName} handleInputChange={handleSignUpFirstNameInputChange}></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name" value={signUpLastName} handleInputChange={handleSignUpLastNameInputChange}></FieldLogin>
        <FieldLogin text="Email" type="email" className="email" value={signUpEmail} handleInputChange={handleSignUpEmailInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="password" value={signUpPassword} handleInputChange={handleSignUpPasswordInputChange}></FieldLogin> */}

        <FieldLogin text="First Name" type="text" className="first-name" name="first_name" value={userInputs.first_name} handleInputChange={handleChange}></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name" name="last_name" value={userInputs.last_name} handleInputChange={handleChange}></FieldLogin>
        <FieldLogin text="Email" type="email" className="email" name="email" value={userInputs.email} handleInputChange={handleChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="password" name="password" value={userInputs.password} handleInputChange={handleChange}></FieldLogin>
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
    color : ${colors.light_green};
    text-decoration : underline;
  }

`

const SubmitMessage = styled.h3`
    color : ${colors.green};
`