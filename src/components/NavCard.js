import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function NavCard(props){
    const {name, path, color, BgColor} = props;
    return <NavigationCard style={{backgroundColor: color}}> 
        <BackgroundCard style={{backgroundColor: BgColor}}/>
        <NameCard color={color}>
            <Link className='nav-card' to={path}>{name}</Link>
        </NameCard>
    </NavigationCard>
}



const NavigationCard = styled.div`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '200px'};
    background-color: ${props => props.backgroundColor || '#99AD8D'};
    border-radius: ${props => props.border || '25px'};

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.2em;
    color : ${props => props.color || '#99AD8D'};

    box-shadow: 0px 4px 4px 0px rgba(68, 68, 68, 0.6);

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 175px;
        height: 175px;
        
        
    }

    @media screen and (max-width: 767px) {
        width: 100px;
        height: 100px;
        font-size: 0.8em;
        border-radius: 15px;
        margin: 10px;
    }
`

const BackgroundCard = styled.div`
    width: ${props => props.width || '80%'};
    height: ${props => props.height || '80%'};
    background-color: ${props => props.backgroundColor || '#CCD4BA'};
    border-radius: ${props => props.border || '15px 15px 15px 15px'};
    z-index: auto;
`

const NameCard = styled.div`

    .nav-card{
        color : ${props => props.color || '#99AD8D'} ;
    }

    width: 200px;
    height: 50px;
    border-radius: 25px 0px 25px 0px;
    background-color:${props => props.backgroundColor || '#FFFFFF'} ;
    border : ${props => '1px solid' + props.color || '1px solid #99AD8D'};
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position : absolute;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 175px;
        height: 40px;
        border-radius: 15px 0px 15px 0px;
    }

    @media screen and (max-width: 767px) {
        width: 100px;
        height: 25px;
        font-size: 0.8em;
        border-radius: 15px 0px 15px 0px;
    }
`