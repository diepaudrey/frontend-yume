import styled from "styled-components"

export default function DateIdea(props){
    const {text, img} = props;
    return <DateIdeaContainer> 
        <img src={img} alt="Date Idea Image"/>
        <p>{text}</p>
    </DateIdeaContainer>

};

const DateIdeaContainer = styled.div`
    height: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    img{
        width: 150px;
        margin: 0;
    }

    p{
        margin-top : 10px;
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 200px;
        
    }

    @media screen and (max-width : 767px) {
        width: 100px;
        height: 80px;

        img{
        width: 80px;
        margin: 0;
        }

        p{
        margin-top : 2px;
        margin-bottom: 0;
        }
        
    }

`