import styled from 'styled-components'
import NavCard from './NavCard.js';
import BoxComponent from './BoxComponent.js';
import DailyQuestion from './DailyQuestion.js';
import DateIdea from './DateIdea.js';
import SendButton from './SendButton.js';
import colors from '../colors.js';
import sewingImg from "../assets/img/sewing-cuate.png"
import AccountService from '../Services/AccountService.js';
import { useNavigate } from 'react-router-dom';



export default function MainSection(){
    const userInfo = AccountService.getUserInfo()
    const navigate = useNavigate();

    const handleLogOut = () => {
        AccountService.logOut(navigate);
    }

    return <Section>
        <UserContainer>
                <h2> Welcome back {userInfo.firstName}</h2>
        </UserContainer>
        <DailyQuestion/>
        <BottomSection>
            <BoxComponent title_props={{ title_text: 'Date Idea' }} box_props={{}}>
                <DateIdea text="Date Idea" img={sewingImg} />
            </BoxComponent>
            <NavCardSection>
                <NavCard name="Profile" path="/profile" color={colors.green} BgColor={colors.light_green}/>
                <NavCard name="Quiz" path="/quiz"color={colors.pink} BgColor={colors.light_pink} />
                <NavCard name="Game Idea" path="/game" color={colors.brown} BgColor={colors.light_brown}/>
            </NavCardSection>
        </BottomSection>
        <SendButton text="Log out" onSubmit={handleLogOut}/>
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
    color : ${colors.light_green};

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 90vw;
        height: 70vh;
        justify-content: center;
    }

    @media screen and (max-width:767px) {
        width: 90vw;
        height: 100vh;
        justify-content: flex-start;
        
    }
`

const BottomSection = styled.section`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (max-width:767px) {
        width: 80%;
        height: 80%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
        width: 100%;
        margin :0;
    }
`

const UserContainer = styled.div`
    font-size: 0.8em;
    color : ${colors.light_green};

    @media screen and (min-width:768px) and (max-width:1024px) {
        font-size: 0.6em;
    }

    @media screen and (max-width:767px) {
        font-size: 0.4em;
    }

`