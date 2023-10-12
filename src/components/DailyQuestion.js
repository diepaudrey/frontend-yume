import styled from "styled-components"

export default function DailyQuestion(props){
    const {question} = props
    return <Container><QuestionContainer>
        <p>{question} What is your favorite animal ?</p>
      </QuestionContainer>
      <AnswerContainer>
        <input type="text" id="DQ-answer" placeholder="type here..."/>
      </AnswerContainer>
      </Container>
    
};

const Container = styled.div`
  width : 60vw;
  
`

const QuestionContainer = styled(Container)`
  p{
    margin-left: 20px;
  };
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  height : 5vh;
  background-color : #99AD8D;
  border-radius: 15px 15px 0px 0px;
  color: white;
  font-size: 1em;
`
const AnswerContainer = styled(Container)`
  input{
    border: none;
    outline : none;
    margin-left: 20px;
    margin-top: 18px;
  };
  box-shadow: 0px 4px 4px 0px #99AD8D;
  display: flex;
  flex-direction: column;
  height : 6vh;
  background-color : white;
  border-radius: 0px 0px 15px 15px;
  
`

