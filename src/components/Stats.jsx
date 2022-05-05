import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryPie, VictoryScatter, VictoryTheme } from 'victory';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
border-style: solid;
`;

const PieWrapper = styled.div`
  display: flex;
  align-content: rows;
  justify-content: space-around;
  margin-left: 10px;
`;

function Stats ({ stats }) {
  const [currentPOneStockData, setCurrentPOneStockData] = useState([1])
  const [currentPTwoStockData, setCurrentPTwoStockData] = useState([1]);
  const [conversions, setConversions] = useState({0:[1], 1: [1]});

  useEffect(() => {
    setTimeout(() => {
      stockData(stats);
      conversionData(stats);
    }, 1);
  }, [stats])

  function stockData(data) {
    let oneData = [];
    let twoData = [];
    data.stocks.forEach((element) => {
      if(element.playerIndex === 0) {
        oneData.push({x: element.count, y: element.endPercent})
      } else {
        twoData.push({x: element.count, y: element.endPercent})
      }
    })
    setCurrentPOneStockData(oneData);
    setCurrentPTwoStockData(twoData);
  }


  function conversionData(data) {
    let oneData = [];
    let twoData = [];
    data.conversions.forEach((c) => {
      let conversion = {damage: '', didKill: ''};
      conversion.damage = (c.endPercent - c.startPercent);
      conversion.didKill = c.didKill;
      if(c.playerIndex === 0) {
        oneData.push(conversion);
      } else {
        twoData.push(conversion);
      }
    });
    oneData.push(conversionCounter(oneData));
    twoData.push(conversionCounter(twoData));
    setConversions({ 0 : oneData, 1 : twoData})
  }

  function conversionCounter(data) {
    let count = 0;

    data.forEach((c) => {
      if(c.didKill === true) {
        count += 1;
      };
    })
    return count;
  }

  return (
    <div>
      <PieWrapper>
      <div>P1 Death Percents</div>
      <svg viewBox="0 0 800 340">
        <VictoryChart
          standalone={false}
          theme={VictoryTheme.material}
          domain={{ x: [4, 0], y: [0, 120] }}
        >
          <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={7}
            data={currentPOneStockData}
          />
        </VictoryChart>
      </svg >
      <div>P2 Death Percents</div>
      <svg viewBox="0 0 800 340">
        <VictoryChart
          standalone={false}
          theme={VictoryTheme.material}
          domain={{ x: [4, 0], y: [0, 120] }}
        >
          <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={7}
            data={currentPTwoStockData}
          />
        </VictoryChart>
      </svg >
      </PieWrapper>
      <PieWrapper>
      <div>P1 Conversions</div>
        <svg viewBox='0 0 800 400'>

          <VictoryPie
          standalone={false}
           data={[
            {x: 'conversions', y: (conversions[1].length)},
            {x: 'kills', y: ((conversions[1][conversions[1].length-1]))}
          ]}
          />
        </svg>
        <div>P2 Conversions</div>
        <svg viewBox='0 0 800 400'>
          <VictoryPie
            standalone={false}
            data={[
            {x: 'conversions', y: (conversions ? conversions[0].length: 0 )},
            {x: 'kills', y: ((conversions ? conversions[0][conversions[0].length-1] : 0))}
          ]}
          />
        </svg>
        </PieWrapper>
    </div>
  )
}

export default Stats;