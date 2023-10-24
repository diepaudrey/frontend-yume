import styled from "styled-components"
import colors from '../colors.js'
import sewingImg from "../assets/img/sewing-cuate.png"


export default function Box(props){
    const {title_props, box_props} = props;
    const {title_text, title_width, title_height, title_color} = title_props;
    const {box_text, box_width, box_height} = box_props;
    return <Container>
        <TitleBox style={{backgroundColor:title_color, height:title_height, width:title_width}}> <p>{title_text}</p> </TitleBox> 
        <ContentBox style={{height:box_height, width:box_width}}>
          <img src={sewingImg}/>
          <p>{box_text}</p>
        </ContentBox> 
    </Container>

};



const Container = styled.div`
  display : flex;
  flex-direction: column;
  padding : 50px;
  @media screen and (min-width: 768px) and (max-width: 1024px){
    margin-right: 0px;
  }

  @media screen and (max-width : 767px) {
    margin-right: 0;
  }
  
  
`

const TitleBox = styled.div`
    width: ${props => props.width || '250px'};
    height: ${props => props.height || '50px'};
    background-color: ${props => props.backgroundColor || colors.green};
    border-radius: ${props => props.borderRadius || '25px 25px 0px 0px'};

    display: flex;
    flex-direction: row;
    align-items: center;
    p{
        color : white;
        margin-left: 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
      width: ${props => props.tableWidth || '200px'};
      height: ${props => props.tabletHeight || '50px'};
      
    }

    @media screen and (max-width : 767px) {
      width: ${props => props.mobileWidth || '150px'};
      height: ${props => props.mobileHeight || '50px'};
    }
`;

const ContentBox = styled.div`
    width: ${props => props.width || '250px'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.backgroundColor || 'white'};
    border-radius: ${props => props.borderRadius || '0px 0px 25px 25px'};
    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : black;

    @media screen and (min-width: 768px) and (max-width: 1024px){
      width: ${props => props.tableWidth || '200px'};
      height: ${props => props.tabletHeight || 'auto'};
      
    }

    @media screen and (max-width : 767px) {
      width: ${props => props.mobileWidth || '150px'};
      height: ${props => props.mobileHeight || 'auto'};
    }
    
`