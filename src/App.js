import styled from 'styled-components'
import background from './assets/img/Pattern.svg'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Quiz from './pages/Quiz.js';
import Game from './pages/Game.js';
import Login from './pages/Login.js';

export default function App() {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Application>
  )
};

const Application = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFBE8;
  background-image: url(${background});
  background-repeat: repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
`

