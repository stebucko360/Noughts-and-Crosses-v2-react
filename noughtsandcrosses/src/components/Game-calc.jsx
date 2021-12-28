import React from 'react'
let winnerScoreIncrease = 0;

export const checkWinner = (boardArray, playerTurn)=>{
    const winner = document.getElementsByClassName('announceWinner');
    //check rows
    for (let index of boardArray) {
        if(index[0] === index[1] && index[0] === index[2] && index[0] !== 0){
            winner[0].innerText = `Player ${playerTurn} wins this round`
        }; 
    //check columns
    };
    if (boardArray[0][0] === boardArray[1][0] && boardArray[0][0] === boardArray[2][0] && boardArray[0][0] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
    };
    if (boardArray[0][1] === boardArray[1][1] && boardArray[0][1] === boardArray[2][1] && boardArray[2][1] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
    };
    if (boardArray[0][2] === boardArray[1][2] && boardArray[0][2] === boardArray[2][2] && boardArray[0][2] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
    };
    //check diagnal
    if (boardArray[0][0] === boardArray[1][1] && boardArray[0][0] === boardArray[2][2] && boardArray[0][0] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
    };
    if (boardArray[0][2] === boardArray[1][1] && boardArray[0][2] === boardArray[2][0] && boardArray[0][2] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
    };
    
};

export const GameCalc = ({boardArray, playerTurn, setScoreOne, setScoreTwo}) => {

if (winnerScoreIncrease === 1) {
    winnerScoreIncrease = 0;
    setScoreOne((currentScore)=>{
        currentScore = (currentScore + 1)
        return currentScore;
    });
};
if (winnerScoreIncrease === 2) {
    winnerScoreIncrease = 0;
    setScoreTwo((currentScore)=>{
        currentScore = (currentScore + 1)
        return currentScore;
    });
};

    return (
        <div>
            <h2 className='announceWinner'></h2>
        </div>
    )
}
