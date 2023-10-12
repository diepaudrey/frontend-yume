import styled from 'styled-components'
import NavCard from './NavCard.js';
import DailyQuestion from './DailyQuestion.js';

export default function MainSection(){
    return <Section>
        <DailyQuestion/>
        <NavCardSection>
            <NavCard name="Profile"/>
            <NavCard name="Quizz"/>
            <NavCard name="Home"/>
        </NavCardSection>
        </Section>

}

const Section = styled.section` 
    width: 80vw;
    height: 60vh;
    background-color: ${props => props.backgroundColor || '#FFFBE8'};
    border-radius: 50px;
    box-shadow: 0px 4px 4px 0px #C8CAAA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NavCardSection = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex ;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`