//require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const { SlippiGame } = require("@slippi/slippi-js");



const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.use('/matchData/:matchName', (req, res) => {
  const game = new SlippiGame(`/Users/chrispadovan/Desktop/Hack Reactor/MVP/slippivisualizer/server/${req.params.matchName}.slp`);
  const stats = new Promise((resolve, reject) => {
    resolve(game.getStats());
  }).then((results) => {
    res.send(results);
  })
});

app.use('/gameSettings/:matchName', (req, res) => {
  const game = new SlippiGame(`/Users/chrispadovan/Desktop/Hack Reactor/MVP/slippivisualizer/server/${req.params.matchName}.slp`);
  const gameData = new Promise((resolve, reject) => {
    resolve(game.getSettings());
  }).then((results) => {
    res.send(results);
  });
});

// Put routes here

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
