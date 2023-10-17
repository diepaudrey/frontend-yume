
import Header from './components/Header.js';
import styled from 'styled-components'
import background from './assets/img/Pattern.svg'
import MainSection from './components/MainSection.js';


export default function App() {
  return (
    <Application>
      <Header/>
      <MainSection/>
    </Application>
  )
};

const Application = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFBE8;
  background-image: url(${background});

  display: flex;
  flex-direction: column;
  align-items: center;
`

