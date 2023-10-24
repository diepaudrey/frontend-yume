import styled from 'styled-components'
import NavCard from './NavCard.js';
import BoxComponent from './BoxComponent.js';
import DailyQuestion from './DailyQuestion.js';
import colors from '../colors.js';



export default function MainSection(){
    return <Section>
        <DailyQuestion/>
        <BottomSection>
            <BoxComponent title_props={{title_text:'Date Idea'}} box_props={{box_text:'Date idea n°1'}}/>
            <NavCardSection>
                <NavCard name="Profile" path="/profile" color={colors.green} BgColor={colors.light_green}/>
                <NavCard name="Quiz" path="/quiz"color={colors.pink} BgColor={colors.light_pink} />
                <NavCard name="Game Idea" path="/game" color={colors.brown} BgColor={colors.light_brown}/>
            </NavCardSection>
        </BottomSection>
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
    justify-content: space-between;

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 90vw;
        height: 70vh;
        justify-content: center;
    }

    @media screen and (max-width:767px) {
        width: 80vw;
        height: 80vh;
    }
`

const BottomSection = styled.section`
    width: 90%;
    height: 100%;;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 100%;
        height: 70%;

        display: flex;
        flex-direction: column;
        justify-content: center;


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
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width:768px) and (max-width:1024px) {
        justify-content: space-between;

    }

    @media screen and (max-width:767px) {
        flex-wrap: wrap;
        margin :0;
    }
`