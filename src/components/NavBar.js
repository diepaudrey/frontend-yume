import styled from 'styled-components'

export default function NavBar(){
    return <NavigationBar>
        <li>Accueil</li>
        <li>Quizz</li>
        <li>Profil</li>
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

    font-size: 20px;
`;


