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
    margin-top: 2%;
    width: 80vw;
    height: 70vh;
    background-color: ${props => props.backgroundColor || '#FFFBE8'};
    border-radius: 50px;
    box-shadow: 0px 4px 4px 0px #C8CAAA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 90vw;
        height: 50vh;
    }

    @media screen and (max-width:767px) {
        width: 80vw;
        height: 80vh;
    }
`

const NavCardSection = styled.section`
    width: 80%;
    display: flex ;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width:767px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin :0;
    }
`