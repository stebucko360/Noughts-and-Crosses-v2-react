import React from 'react'
import {useState, useEffect} from 'react';
let winnerScoreIncrease = 0;
let isWinner = false

export const checkWinner = (boardArray, playerTurn, roundCount)=>{
    
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
        isWinner = true;
    };
    if (boardArray[0][1] === boardArray[1][1] && boardArray[0][1] === boardArray[2][1] && boardArray[2][1] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
        isWinner = true;
    };
    if (boardArray[0][2] === boardArray[1][2] && boardArray[0][2] === boardArray[2][2] && boardArray[0][2] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
        isWinner = true;
    };
    //check diagnal
    if (boardArray[0][0] === boardArray[1][1] && boardArray[0][0] === boardArray[2][2] && boardArray[0][0] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
        isWinner = true;
    };
    if (boardArray[0][2] === boardArray[1][1] && boardArray[0][2] === boardArray[2][0] && boardArray[0][2] !== 0) {
        winner[0].innerText = `Player ${playerTurn} wins this round`
        winnerScoreIncrease = playerTurn
        isWinner = true;
    };
    
    if (roundCount > 7 && !isWinner) {
        winner[0].innerText = `Draw!`
        winnerScoreIncrease = 3
    };
};

export const GameCalc = ({boardArray, setArray, playerTurn, setScoreOne, setScoreTwo, roundCount, setRoundCount}) => {

    const [nextRound, setnextRound] = useState()

    const resetRound = () => {
        isWinner = false
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
        setRoundCount((currValue)=>{
            currValue = 0;
            return currValue
        });
    };

    let nextRoundButton = <button id='nextRoundButton' onClick={()=>{resetRound()}}>Next Round</button>
    
    useEffect(() => {
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
        } else if (winnerScoreIncrease === 2) {
            winnerScoreIncrease = 0;
            setScoreTwo((currentScore)=>{
                currentScore = (currentScore + 1)
                setnextRound((currentValue)=>{
                    currentValue = nextRoundButton
                    return currentValue;
                });
                return currentScore;
            }) 
        }
        else if (winnerScoreIncrease === 3) {
            winnerScoreIncrease = 0
            setnextRound((currentValue)=>{
                currentValue = nextRoundButton
                return currentValue;
            });
        }
    
    }, [nextRoundButton, setScoreOne, setScoreTwo])
    
    
    return (
        <div>
            <h2 className='announceWinner'></h2> 
            {nextRound}
        </div>
    )
}

