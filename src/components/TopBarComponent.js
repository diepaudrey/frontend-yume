
import styled from 'styled-components'

export default function TopBar(){
    return <TopBarContainer><Title>Yume</Title></TopBarContainer>
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
`

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Bellota+Text&family=Hind:wght@300;400;500;700&display=swap');
    margin : 0;
    font-family: 'Bugaki';
    font-size: 50px;
`



