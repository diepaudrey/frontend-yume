import styled from "styled-components"
import colors from "../colors.js"

export default function DateIdea(props){
    const {text, img} = props;
    return <DateIdeaContainer> 
        <img src={img} alt="Date Idea"/>
        <p>{text}</p>
    </DateIdeaContainer>

};

const DateIdeaContainer = styled.div`
    height: auto;
    max-height: 20vh;
    max-width: fit-content;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10%;
    font-size : 1em;
    color : grey;


    img{
        width: 80%;
        margin: 0;
        max-width: 100%;
        height: auto;
    }

    p{
        margin-top : 5%;
        margin-bottom: 0;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
        img{
            margin: 0;
        }
    }

    @media screen and (max-width:767px) {
        width: 50%;
        img{
            margin: 0;
        }
    }
    

`