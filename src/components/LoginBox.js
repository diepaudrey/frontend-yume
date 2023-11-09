import styled from 'styled-components'
import colors from '../colors.js'
import FieldLogin from './FieldLogin.js'
import SendButton from './SendButton.js'
import {useState} from 'react'


export default function LoginBox(){
  const [action, setAction] = useState("Sign up");
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () =>{
    setIsLogin(!isLogin);
    if(isLogin){
      setAction("Log in");
    }
    else{
      setAction("Sign Up");
    }
  }
    return <Container>
    <h1>YUME</h1>
    <TitleBox> <h2>{action}</h2> </TitleBox>
    <ContentBox>
      <Fields>
         {isLogin ? (
          <>
        <FieldLogin text="First Name" type="text" className="first-name"></FieldLogin>
        <FieldLogin text="Last Name" type="text" className="last-name"></FieldLogin>
        <FieldLogin text="Email" type="email" className="email"></FieldLogin>
        <FieldLogin text="Password" type="password" className="password"></FieldLogin>
          </>)
        : <>
        <FieldLogin text="Email" type="email" className="signup-email"></FieldLogin>
        <FieldLogin text="Password" type="password" className="signup-password"></FieldLogin></>
        }
        
      </Fields>

      <Submit>{isLogin ? (<>
    <LoginSection>
      <p>Already a member ?</p>
      <p className="login" onClick={()=>{handleClick()}}>Log in </p>
    </LoginSection>
    <SendButton text={action}/></>)
    :
    (<><SignupSection>
      <p>Want to create an account ?</p>
      <p className="signup" onClick={()=>{handleClick()}}>Sign up </p>
    </SignupSection>
    <SendButton text={action}/></>)
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

const Fields = styled.div`
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

