import styled from "styled-components"

export default function DateIdea(props){
    const {text, img} = props;
    return <DateIdeaContainer> 
        <img src={img} alt="Date Idea"/>
        <p>{text}</p>
    </DateIdeaContainer>

};

const DateIdeaContainer = styled.div`
    height: auto;
    max-width: fit-content;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10%;

    img{
        width: 80%;
        margin: 0;
    }

    p{
        margin-top : 5%;
        margin-bottom: 0;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
        img{
            width: fit-content;
            margin: 0;
        }
    }

    @media screen and (max-width:767px) {
        width: 50%;
        img{
            width: fit-content;
            margin: 0;
        }
    }
    

`