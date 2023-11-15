import styled from 'styled-components'
import colors from '../colors.js'
import InformationComponent from './InformationComponent.js';

export default function ProfileCard(props){
    const {img} = props;
    return <Card> 
        <TopInformation> 
            <img src={img} alt="Yourself"/>
            <ProfileInfo>
                <InformationComponent infoType="Name" content="Anna"/> {/*{Dynamic Profile to do*/}
                <InformationComponent infoType="Age" content="24"/>
                <InformationComponent infoType="Email" content="blbl@gmail.com"/>
            </ProfileInfo>
        </TopInformation>
        <BottomInformation>
            <OtherInfo/>
            <ModifyButton> Modify </ModifyButton>
        </BottomInformation>

    </Card>
}

const Card = styled.div`
    width: 85%;
    height: 85%;
    background-color: ${colors.light_green};
    border-radius: 25px 25px 25px 25px;

    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width:768px) and (max-width:1024px) {
        width: 90%;
        height: 90%;
    }

    @media screen and (max-width:767px) {
        width: 90%;
        height: 90%;
    }
`

const TopInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5%;
    img{
        max-width:200px;
        max-height: 200px;
        width: 8vw;
        height: auto;
        border-radius: 25px 25px 25px 25px;
    }

    @media screen and (min-width:768px) and (max-width:1024px){
        img{
            max-width: 170px;
            max-height: 195px;
            width: 20vw;
        }
        justify-content: space-evenly;
        align-items: flex-start;
    }

    @media screen and (max-width:767px) {
        img{
            max-width: 170px;
            max-height: 195px;
            width: 20vw;
        }
    }
    


`

const ProfileInfo = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1024px){
        width: auto;
        justify-content: space-between;
        align-items: center;
    }
    
`

const BottomInformation = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1024px) {
        height: 50%;
    }

    @media screen and (max-width:767px) {
        height: 50%;
    }
`

const OtherInfo = styled.div`
    width: 90%;
    height: 100%;
    background-color: ${colors.cream};
    border-radius: 25px 25px 25px 25px;
    margin-top: 2%;
    margin-bottom: 2%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 55vw;
        height: 20vh;
    }
`

const ModifyButton = styled.button`
    margin : 1%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }
`