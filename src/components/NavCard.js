import styled from 'styled-components'

export default function NavCard(props){
    const { name } = props;
    return <NavigationCard> 
        <BackgroundCard/>
        <BottomCard>
            <p>{name}</p>
        </BottomCard>
    </NavigationCard>
}

const NavigationCard = styled.div`
    width: ${props => props.width || '10vw'};
    height: ${props => props.height || '30vh'};
    background-color: ${props => props.backgroundColor || '#99AD8D'};
    border-radius: ${props => props.border || '25px'};

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.2em;
    color : ${props => props.color || '#99AD8D'};

    box-shadow: 0px 4px 4px 0px #99AD8D;
`

const BackgroundCard = styled.div`
    
    width: ${props => props.width || '8vw'};
    height: ${props => props.height || '22vh'};
    background-color: ${props => props.backgroundColor || '#CCD4BA'};
    border-radius: ${props => props.border || '25px 25px 0px 0px'};
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