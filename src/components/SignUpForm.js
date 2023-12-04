import styled from 'styled-components'
import colors from '../colors.js'

import {useEffect, useState} from 'react'

import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import AccountService from '../Services/AccountService.js'

export default function SignUpForm(props){
    const {handleClick, buttonText} = props;
    const [errors, setErrors] = useState({base : "test"});
    const [errorsFlags, setErrorsFlags] = useState({base : "test"});
    const [submitted, setSubmitted] = useState();

    const [userInputs, setUserInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })


    const handleChange = (event) => {
        const {name, value} = event.target
        setUserInputs((prevInputs)=>({
            ...prevInputs, 
            [name]:value,
        }))
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        console.log("userinfo :" , userInputs)
        const err = AccountService.isSignupFormValid(userInputs)[0];
        const errFlags = AccountService.isSignupFormValid(userInputs)[1]
        setErrors(err);
        setErrorsFlags(errFlags);
        console.log("erreurs : ", errFlags);

    }

    useEffect(()=>{
        if(Object.keys(errors).length > 0){
            console.log("Errors : Submit failed");
            setSubmitted(false);
            console.log(errorsFlags.lastName)
        }
        else{
            console.log("Submit successful");
            AccountService.createUser(userInputs);
            setSubmitted(true);
        }
    }, [errors]);

    return <>
    {Object.keys(errors).length === 0 && submitted ? <SubmitMessage>You have successfully created a new account</SubmitMessage> : null}
    <Fields>
        <FieldLogin text="First Name" type="text" className="first-name" name="first_name" value={userInputs.first_name} handleInputChange={handleChange} errorMessage={errors.firstName} displayError={errorsFlags.firstName}></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name" name="last_name" value={userInputs.last_name} handleInputChange={handleChange} errorMessage={errors.lastName} displayError={errorsFlags.lastName}></FieldLogin>
        <FieldLogin text="Email" type="email" className="email" name="email" value={userInputs.email} handleInputChange={handleChange} errorMessage={errors.email} displayError={errorsFlags.email}></FieldLogin>
        <FieldLogin text="Password" type="password" className="password" name="password" value={userInputs.password} handleInputChange={handleChange} errorMessage={errors.password} displayError={errorsFlags.password}></FieldLogin>
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
    height: 80%;
    display : grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 1em, 1em;
    padding-top: 5%;

    @media screen and (min-width:768px) and (max-width:1024px) {
        height: auto;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(auto-fit, minmax(100px,1fr));

    }

    @media screen and (max-width:767px) {
        height: auto;
        grid-template-rows: repeat(4, 3.8em);
        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));

    }
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
    margin: 2% 0 0 5% ;
    color : ${colors.green};
    display: flex;
    justify-content: center;
`

