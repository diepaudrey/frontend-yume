import TopBar from './TopBarComponent.js';
import NavBar from './NavBar.js';
import styled from 'styled-components'

export default function Header(){
    return <HeaderComponent>
        <TopBar/>
        <NavBar/> 
    </HeaderComponent>
};

const HeaderComponent = styled.header`
    width: 100%;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;