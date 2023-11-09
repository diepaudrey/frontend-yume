
import styled from 'styled-components'
import {Link} from "react-router-dom"


export default function NavBar(){
    return <NavigationBar>
        <Li><Link className="nav-bar" to={'/'}>Home</Link></Li>
        <Li><Link className="nav-bar" to={'/quiz'}>Quiz</Link></Li>
        <Li><Link className="nav-bar" to={'/profile'}>Profile</Link></Li>
        <Li><Link className="nav-bar" to={'/game'}>Games</Link></Li>
        <Li><Link className="nav-bar" to={'/signin'}>Sign In</Link></Li>
    </NavigationBar>
};



const NavigationBar = styled.ul`
    background-color: #C8CAAA;
    height: 8vh;
    width: 35vw;
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
        border-radius: 0px 0px 30px 30px;
        
    }
    @media screen and (max-width:767px) {
        height: 5vh;
        width: 70vw;
        font-size: 0.9em;
        border-radius: 0px 0px 20px 20px;
    }
`;


const Li = styled.li` 
    :hover{
        color : #99AD8D;
    };
    list-style: none;
    .nav-bar{
        color : white;
    }
`


