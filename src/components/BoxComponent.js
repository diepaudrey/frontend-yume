import styled from "styled-components"
import colors from '../colors.js'



export default function Box(props){
    const {title_props, box_props} = props;
    const {title_text, title_height, title_color} = title_props;
    const {box_width, box_height, box_color} = box_props;
    return <Container style={{width:box_width}}>
        <TitleBox style={{backgroundColor:title_color, height:title_height}}> <p>{title_text}</p> </TitleBox> 
        <ContentBox style={{backgroundColor:box_color, height:box_height}}> {props.children} </ContentBox>
    </Container>
};



const Container = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display : flex;
  flex-direction: column;
  margin-top : 50px;
  /* @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 50%;
    margin-right: 0px;
  }

  @media screen and (max-width : 767px) {
    width: 100%;
    margin-right: 0;
  }
   */
  
`

const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.backgroundColor || colors.green};
  border-radius: ${props => props.borderRadius || '25px 25px 0px 0px'};

  display: flex;
  flex-direction: row;
  align-items: center;
  p{
      color : white;
      margin-left: 20px;
  }


  @media screen and (max-width : 767px) {
    height: 6vh;
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

  @media screen and (min-width: 768px) and (max-width: 1024px){
  }

  @media screen and (max-width : 767px) {
    width: 100%;
    height: auto;
  }

    
`