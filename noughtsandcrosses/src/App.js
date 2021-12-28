import './App.css';
import { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { Scoreboard } from './components/Scoreboard';
import { GameCalc } from './components/Game-calc';


function App() {
  const [boardArray, setArray] = useState([[0, 0, 0],[0, 0, 0],[0, 0, 0]])
  const [playerTurn, setplayerTurn] = useState(1)
  const [playerOneScore, setScoreOne] = useState(0)
  const [playerTwoScore, setScoreTwo] = useState(0)

  return (
    <>
    <GameBoard setArray={setArray} setplayerTurn={setplayerTurn} playerTurn={playerTurn}/>
    <GameCalc boardArray={boardArray} playerTurn={playerTurn} setScoreOne={setScoreOne} setScoreTwo={setScoreTwo}/>
    <Scoreboard playerOneScore={playerOneScore} playerTwoScore={playerTwoScore}/>
    </>
  );
}

export default App;
