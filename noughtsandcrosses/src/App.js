import './App.css';
import { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { Scoreboard } from './components/Scoreboard';


function App() {
  const [boardArray, setArray] = useState([[0, 0, 0],[0, 0, 0],[0, 0, 0]])
  const [playerTurn, setplayerTurn] = useState(1)

console.log(boardArray)
  return (
    <>
    <GameBoard setArray={setArray} setplayerTurn={setplayerTurn} playerTurn={playerTurn}/>
    <Scoreboard/>
    </>
  );
}

export default App;
