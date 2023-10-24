import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function NavCard(props){
    const {name, path } = props;
    return <NavigationCard> 
        <BackgroundCard/>
        <BottomCard>
            <Link to={path}>{name}</Link>
        </BottomCard>
    </NavigationCard>
}



const NavigationCard = styled.div`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '300px'};
    background-color: ${props => props.backgroundColor || '#99AD8D'};
    border-radius: ${props => props.border || '25px'};

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.2em;
    color : ${props => props.color || '#99AD8D'};

    margin : 20px;

    box-shadow: 0px 4px 4px 0px #99AD8D;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 175px;
        height: 250px;
        
    }

    @media screen and (max-width: 767px) {
        width: 100px;
        height: 150px;
        font-size: 0.8em;
    }
`

const BackgroundCard = styled.div`
    
    width: ${props => props.width || '80%'};
    height: ${props => props.height || '72%'};
    background-color: ${props => props.backgroundColor || '#CCD4BA'};
    border-radius: ${props => props.border || '20px 20px 0px 0px'};
`

const BottomCard = styled.div`
    
    width: 100%;
    height: 20%;
    border-radius: 0px 0px 25px 25px;
    background-color:${props => props.backgroundColor || '#FFFFFF'} ;
    border : ${props => props.border || '1px solid #99AD8D'};
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`