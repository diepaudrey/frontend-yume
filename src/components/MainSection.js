import styled from 'styled-components'
import NavCard from './NavCard.js';

export default function MainSection(){
    return <Section>
        <NavCard name="Profile"/>
        <NavCard name="Quizz"/>
        <NavCard name="Home"/>
        </Section>

}

const Section = styled.section` 
    width: 80vw;
    height: 60vh;
    background-color: ${props => props.backgroundColor || '#FFFBE8'};
    border-radius: 50px;

    margin-top: 50px;

    display: flex ;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0px 4px 4px 0px #C8CAAA;

`