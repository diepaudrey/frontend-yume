import styled from "styled-components"
import colors from '../colors.js'



export default function Box(props){
    const {title_props, box_props} = props;
    const {title_text, title_height, title_color} = title_props;
    const {box_width, box_height, box_color} = box_props;
    return <Container style={{overflow:'auto', maxHeight:'600px', minWidth:'20vw'}}>
        <TitleBox style={{backgroundColor:title_color, height:title_height}}> <p>{title_text}</p> </TitleBox> 
        <ContentBox style={{backgroundColor:box_color, height:box_height}}> {props.children} </ContentBox>
    </Container>
};



const Container = styled.div`
  margin : 1%;
  width: ${props => props.width || 'auto'};
  min-height: ${props => props.height || 'auto'};
  display : flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 80vw;
  }

  @media screen and (max-width : 767px) {
    width: 90vw;
    height: auto;
    margin-top: 5%;
  }

  /* Personnalisation de la barre de défilement */
  scrollbar-width: thin; /* Pour Firefox */
  scrollbar-color: ${colors.green} ${colors.light_green}; /* Pour Firefox */

  /* Pour les autres navigateurs (WebKit) */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.green};

  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.light_green};
  }

`

const TitleBox = styled.div`
  width: 100%;
  max-height: 8vh;
  background-color: ${props => props.backgroundColor || colors.green};
  border-radius: ${props => props.borderRadius || '25px 25px 0px 0px'};

  display: flex;
  flex-direction: row;
  align-items: center;
  p{
      color : white;
      margin-left: 2vw;
  }

  @media screen and (min-width:768px) and (max-width:1024px) {
    p{
      margin-left: 3vw;
    }
  }
  
  @media screen and (max-width:767px) {
    border-radius   : 17px 17px 0px 0px;
    height: 18%;
    p{
      margin : 3vw;
    }
  }


`

const ContentBox = styled.div`
  background-color: ${props => props.backgroundColor || 'white'};
  border-radius: ${props => props.borderRadius || '0px 0px 25px 25px'};
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