import styled from 'styled-components'
import colors from '../colors.js'
import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import {useState, useEffect, setRole} from 'react'
import { useNavigate } from 'react-router-dom';

import AccountService from '../AccountService.js'



export default function LoginBox(){
  const [text, setText] = useState('Log in');
  const [isLogin, setIsLogin] = useState(false);

  /* Session & Cookies */
  //Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get('http://localhost:3000/login').then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setRole(response.data.user[0].role);
  //     }
  //   });
  // }, []);

  const handleClick = () =>{
    setIsLogin(!isLogin);
    if(isLogin){
      setText("Log in");
    }
    else{
      setText("Sign Up");
    }
  }

  /*LOGIN*/ 
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    // if(AccountService.checkUserLogin(userLoginInformation)){
    //   // setIsLoggedIn(true);
    //   console.log("Front : Logged in");
    //   navigate('/');
    // }

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


  /*SIGN UP */
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
    console.log(signUpFirstName, signUpLastName, signUpEmail, signUpPassword);

    const userInformation = {
      last_name: signUpLastName,
      first_name: signUpFirstName,
      email: signUpEmail,
      password: signUpPassword,
    };
    AccountService.createUser(userInformation);
  }
    return <Container>
    <h1>YUME</h1>
    <TitleBox> <h2>{text}</h2> </TitleBox>
    <ContentBox>
        {isLogin ? (
        <Fields id="signup-form">
        <FieldLogin text="First Name" type="text" className="first-name" value={signUpFirstName} handleInputChange={handleSignUpFirstNameInputChange}></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name" value={signUpLastName} handleInputChange={handleSignUpLastNameInputChange}></FieldLogin>
        <FieldLogin text="Email" type="email" className="email" value={signUpEmail} handleInputChange={handleSignUpEmailInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="password" value={signUpPassword} handleInputChange={handleSignUpPasswordInputChange}></FieldLogin>
          </Fields>)
        : <Fields id="login-form">
        <FieldLogin text="Email" type="email" className="signup-email" value={loginEmail} handleInputChange={handleEmailInputChange}></FieldLogin>
        <FieldLogin text="Password" type="password" className="signup-password" value={loginPassword} handleInputChange={handlePasswordInputChange}></FieldLogin>
        </Fields>
        
        }
        
    <Submit>
      {isLogin ? (<>
        <LoginSection>
          <p>Already a member ?</p>
          <p className="login" onClick={()=>{handleClick()}}>Log in </p>
        </LoginSection>
        <SendButton text={text} onSubmit={handleSignupSubmit} form="signup-form"/>
      </>)
      :(<>
        <SignupSection>
          <p>Want to create an account ?</p>
          <p className="signup" onClick={()=>{handleClick()}}>Sign up </p>
        </SignupSection>
        <SendButton text={text} onSubmit={handleLoginSubmit} form="login-form"/>
      </>)
  }
      </Submit>
    </ContentBox>
  </Container>
}

const Container = styled.div`
    width: 30vw;
    height: 90vh;
    display : flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    color : ${colors.green};

    h1{
      color : white;
      margin : 0;
      margin-bottom: 10%;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
      
      width : 70%;
      height : 70%;
    }
  
    @media screen and (max-width:767px) {
      margin-top: 10%;
      width : 80%;
      height : 70%;
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
    height: 50vh;
    background-color: white;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .email{
      grid-row: 2/3;
    }
    .password {
      grid-row : 3/4;
    }


    @media screen and (max-width:767px) {
        border-radius   : 0px 0px 17px 17px;
    }
`

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

