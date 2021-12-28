import React from 'react'
import {useState} from 'react';
let winnerScoreIncrease = 0;
let counter = 0;

export const checkWinner = (boardArray, playerTurn)=>{
    const winner = document.getElementsByClassName('announceWinner');
    //check rows
    for (let index of boardArray) {
        if(index[0] === index[1] && index[0] === index[2] && index[0] !== 0){
            winner[0].innerText = `Player ${playerTurn} wins this round`
            winnerScoreIncrease = playerTurn
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

export const GameCalc = ({boardArray, setArray, playerTurn, setScoreOne, setScoreTwo}) => {

    const [nextRound, setnextRound] = useState()

    const resetRound = () => {
        const winner = document.getElementsByClassName('announceWinner');
        winner[0].innerText = '';
        const buttonLocations = ['topleft', 'topmiddle', 'topright', 'middleleft', 'middle', 'middleright', 'bottomleft', 'bottommiddle', 'bottomright'];

        for(let id of buttonLocations) {
            const changeButton = document.getElementById(id);
            changeButton.innerText = '-';
        };

        setArray((currentArray)=>{
            let newArray = [...currentArray];
            newArray = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
            return newArray;
        });
        setnextRound((currentValue)=>{
            currentValue = null;
            return currentValue
        });
    };

    let nextRoundButton = <button id='nextRoundButton' onClick={()=>{resetRound()}}>Next Round</button>

    if (winnerScoreIncrease === 1) {
        winnerScoreIncrease = 0;
        setScoreOne((currentScore)=>{
            currentScore = (currentScore + 1)
            setnextRound((currentValue)=>{
                currentValue = nextRoundButton
                return currentValue;
            });
            return currentScore;
        });
    };
    if (winnerScoreIncrease === 2) {
        winnerScoreIncrease = 0;
        setScoreTwo((currentScore)=>{
            currentScore = (currentScore + 1)
            setnextRound((currentValue)=>{
                currentValue = nextRoundButton
                return currentValue;
            });
            return currentScore;
        });
    };

    return (
        <div>
            <h2 className='announceWinner'></h2> 
            {nextRound}
        </div>
    )
}

