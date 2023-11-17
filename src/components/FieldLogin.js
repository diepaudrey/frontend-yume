import styled from 'styled-components'
import colors from '../colors.js'

export default function FieldLogin(props){
    const {text, type, className, id, name, handleInputChange, inputValue, displayError, errorMessage} = props;

    // const [inputValue, setInputValue] = useState('');
    // const handleInputChange = (event) => {
    //   const value = event.target.value;
    //   // console.log(value);
    //   setInputValue(value);

    //   // setInputValue(prev => ({...prev, [event.target.name]:[event.target.value]}))

    // };


    return <Container className={className}> 
      <p className='title'>{text}</p>
      {displayError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <AnswerContainer>
          <input type={type} id={id} placeholder="type here..." value={inputValue} onChange={handleInputChange} name={name}/>
    </AnswerContainer>
    </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content : center;
  width: 15vw;
  padding-left: 10%;
  padding-bottom: 5%;

  .title{
      margin : 0;
      margin-bottom: 5px;
      color : ${colors.green}
  }
`

const AnswerContainer = styled.div`
  input{
    border: none;
    outline : none;
    margin-left : 25px;
    width: 80%;
    background-color: ${colors.cream};
    font-size : 0.8em;
  };
  ::placeholder{
    color : ${colors.light_green};
  }
  box-shadow: 0px 4px 4px 0px ${colors.green};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height : 4vh;
  width: 80%;
  background-color : ${colors.cream};
  border-radius: 15px 15px 15px 15px;

  @media screen and (min-width: 768px) and (max-width: 1024px){
    input{
      margin-left: 20px;
      width : 100%;
    };

    height : 50px;
  }

  @media screen and (max-width : 767px) {
    input{
      width : 100%;
      margin-left: 15px;
    };
    font-size: 0.8em;
    
  };

`

const ErrorMessage = styled.p`
    color : ${colors.pink};
    display : flex;
    align-items: center;
    font-size : 0.7em;
    margin : 0;

`
