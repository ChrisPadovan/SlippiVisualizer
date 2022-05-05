import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Stats from './components/Stats.jsx';
import Info from './components/Info.jsx';

const Wrapper = styled.span`
background-image: url('https://i.neoseeker.com/mgv/254422/422/123/melee2GIWE.png');
background-color: grey;
background-postition: color;
background-size: contain;
background-blend-mode: lighten;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  //display: flex;
  //justify-content: space-around;
  flex-wrap: wrap;
`;

const BackgroundWrapper = styled.div`
  border: solid;
`;

const StyledHeader = styled.h1`
  margin-left: 10px;
`;

const HeaderWrapper = styled.div`

`;


function App() {

  const [stats, setStats] = useState('')
  const [gameData, setGameData] = useState('');
  const [currentMatch, setCurrentMatch] = useState('falcoFalco')

  useEffect(()=> {
    axios.get(`http://localhost:3001/matchData/${currentMatch}`).then((results) => {
      setStats(results.data);
    })
    axios.get(`http://localhost:3001/gameSettings/${currentMatch}`).then((results) => {
      setGameData(results.data);
    })
  }, [currentMatch]);

  return (
    <div>
      <HeaderWrapper>
        <StyledHeader>Melee Stats Visualizer</StyledHeader>
        <form>
          <select value={currentMatch} onChange={e => {setCurrentMatch(e.target.value)}}>
            <option>falcoFalco</option>
            <option>falconSamus</option>
            <option>falconSheik</option>
            <option>royFalco</option>
            <option>foxFalco</option>
          </select>
        </form>
      </HeaderWrapper>
      <Wrapper>
        <Info info={gameData} stats={stats}/>
      <div>
        <Stats stats={stats}/>
      </div>
      </Wrapper>
    </div>
  );
}

export default App;
