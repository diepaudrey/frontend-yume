import styled from "styled-components"
import colors from '../colors.js'
import signInIllustration from '../assets/img/sign_in_img.svg'
import LoginBox from '../components/LoginBox.js'


export default function Login(){
    return <Container>
        <ImgComp/>
        <RightContainer> 
            <LoginBox/>
        </RightContainer>
    </Container>
}

const Container = styled.section` 
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1023px){
        flex-direction: column;
    }

    @media screen and (max-width:767px) {
        flex-direction: column;
    }
`

const ImgComp = styled.div`
    width: 50%;
    height: 80%;
    background-image: url(${signInIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width:768px) and (max-width:1023px){
        display : none;
    }

    @media screen and (max-width:767px) {
        display : none;
    }
`

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${colors.green};
    border-radius: 50px 0px 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:768px) and (max-width:1023px){
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }

    @media screen and (max-width:767px){
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }
`