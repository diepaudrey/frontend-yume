import styled from 'styled-components'
import colors from '../colors.js'
import ProfileCard from './ProfileCard.js'
import profileImg from '../assets/img/profile_picture.png'


export default function ProfileBox(props){
    const {user} = props;
    return <ProfileContainer>
    <TitleBox> <h2>Your Profile</h2> </TitleBox>
    <ContentBox> 
      <ProfileCard img={profileImg} lastName={user.last_name} firstName={user.first_name} email={user.email}/> 
    </ContentBox>
    </ProfileContainer>
}

const ProfileContainer = styled.div`
    width: 35vw;
    height: 70vh;
    display : flex;
    flex-direction: column;
    margin-top: 2%;

    @media screen and (min-width:768px) and (max-width:1024px) {
      
      width : 70%;
      height : 70%;
    }
  
    @media screen and (max-width:767px) {
      margin-top: 10%;
      width : 80%;
      height : 70%;
    }
`

const TitleBox = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 8vh;
  background-color: ${colors.green};
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h2{
    margin-left : 5%;
    color: ${colors.cream};
  }


  @media screen and (min-width:768px) and (max-width:1024px) {
  }
  
  @media screen and (max-width:767px) {
    border-radius   : 17px 17px 0px 0px;
  }


`
const ContentBox = styled.div`
    width: 100%;
    height: 70vh;
    background-color: white;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : black;

    @media screen and (max-width:767px) {
        border-radius   : 0px 0px 17px 17px;
    }
`