import styled from 'styled-components'

export default function NavBar(){
    return <NavigationBar>
        <li> <LinkComponent href="/homepage">Homepage</LinkComponent></li>
        <li> <LinkComponent href="/quizz">Quizz</LinkComponent></li>
        <li><LinkComponent href="/profile">Profile </LinkComponent></li>
    </NavigationBar>
};

const NavigationBar = styled.ul`
    list-style: none;
    color: white;
    background-color: #C8CAAA;
    height: 8vh;
    width: 30vw;
    border-radius: 0px 0px 50px 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding :0;
    font-size: 1.3em;

    @media screen and (min-width:768px) and (max-width:1023px) {
        height: 5vh;
        width: 50vw;
        
    }
    @media screen and (max-width:767px) {
        height: 5vh;
        width: 70vw;
        font-size: 0.9em;
    }
`;

const LinkComponent = styled.a` 
    color : white;
`


