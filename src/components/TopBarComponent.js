
import styled from 'styled-components'

export default function TopBar(){
    return <TopBarContainer><h1>YUME</h1></TopBarContainer>
};


/*Style*/

const TopBarContainer = styled.div`

color: white;
background-color: #99AD8D;
height: 10vh;
width: 100%;
border-radius: 0px 0px 50px 50px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width:768px) and (max-width:1023px)  {
    height: 7vh;
    font-size: 0.8em;
}

@media screen and (max-width: 767px) {
    height: 5vh;
    font-size: 0.4em;
}
    
`




