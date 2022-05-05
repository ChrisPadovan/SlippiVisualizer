import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const stageIds = {
  2: {
    name: 'Fountain of Dreams',
    url: 'https://ssb.wiki.gallery/images/thumb/3/32/DREAM-NRML-SSBM.png/300px-DREAM-NRML-SSBM.png'
  },
  8: {
    name: 'Yoshi\'s Story',
    url: 'https://ssb.wiki.gallery/images/thumb/1/1a/Yoshi%27sStory.PNG/300px-Yoshi%27sStory.PNG'
  },
  3: {
    name: 'Pokemon Stadium',
    url: 'https://ssb.wiki.gallery/images/thumb/8/8a/PSTAD-NRML1-SSBM.png/300px-PSTAD-NRML1-SSBM.png'
  },
  31: {
    name: '   Battlefield   ',
    url: 'https://ssb.wiki.gallery/images/thumb/d/de/Battlefieldssbm.jpg/225px-Battlefieldssbm.jpg'
  },
  32: {
    name: 'Final Destination',
    url: 'https://ssb.wiki.gallery/images/thumb/0/03/Final_Destination_Melee.png/250px-Final_Destination_Melee.png'
  },
  28: {
    name: 'Dreamland N64',
    url: 'https://ssb.wiki.gallery/images/thumb/0/02/DreamLandSSB.png/300px-DreamLandSSB.png'
  },
}

const charIds = {
  2: {
    name: 'Fox',
    url: 'https://i.pinimg.com/originals/cb/e5/e5/cbe5e5b2c791789958d2338ace6a60e1.png'
  },
  20: {
    name: 'Falco',
    url: 'https://cdn.wikimg.net/strategywiki/images/8/80/SSBM_Portrait_Falco.png'
  },
  0: {
    name: 'Captain Falcon',
    url: 'https://cdn.wikimg.net/en/strategywiki/images/9/94/SSBM_Portrait_Captain_Falcon.png'
  },
  16: {
    name: 'Samus',
    url: 'https://cdn.wikimg.net/en/strategywiki/images/f/f8/SSBM_Portrait_Samus.png'
  },
  19: {
    name: 'Sheik',
    url: 'https://cdn.wikimg.net/en/strategywiki/images/2/28/SSBM_Portrait_Zelda.png'
  },
  23: {
    name: 'Roy',
    url: 'https://cdn.wikimg.net/en/strategywiki/images/6/67/SSBM_Portrait_Roy.png'
  }
}

const Wrapper = styled.div`
  display: flex;
  align-self: center;
`;

const PlayerWrapper = styled.div`
  // position: relative;
  // display: flex;
  // align-self: center;
  // justify-content: flex-start;
  // height: 250px;
  // width: 200px;
   border-style: solid;
  float: left;
  background-color: Gainsboro;
  margin-left: 10px;
`;

const PlayersWrapper = styled.div`
  display: flex;
  align-content: flex-end;
`;

const CharImage = styled.img`
   display: flex;
   justify-content: flex-end;
`;

const MatchInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

const CharName = styled.div`
  font-family: Verdana;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
`;

const PlayerName = styled.div`
  font-family: Verdana;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
`;

function Info ({ info, stats }) {
  useEffect(() => {}, [info]);
  return(
    <Wrapper>
      <h2>Stage: &nbsp;{info ? stageIds[info.stageId].name : null}</h2>
      <MatchInfoWrapper>
        <div> &nbsp;</div>
        <img src={info ? stageIds[info.stageId].url : null} />
      </MatchInfoWrapper>
      <PlayersWrapper>
        <PlayerWrapper>
          <PlayerName>P1: {(info ? info.players[0].displayName : null)}</PlayerName>
          <CharName>{(info ? charIds[info.players[0].characterId].name : null)}</CharName>
          <CharImage src={info ? charIds[info.players[0].characterId].url : null} />
        </PlayerWrapper>
        <PlayerWrapper>
          <PlayerName>P2: {(info ? info.players[1].displayName : null)}</PlayerName>
          <CharName>{(info ? charIds[info.players[1].characterId].name : null)}</CharName>
          <img src={info ? charIds[info.players[1].characterId].url : null} />
        </PlayerWrapper>
      </PlayersWrapper>
    </Wrapper>
  );
};

export default Info;