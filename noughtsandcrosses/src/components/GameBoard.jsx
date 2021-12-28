import React from 'react'
import { useState } from 'react';
import { checkWinner } from './Game-calc';

export const GameBoard = ({setArray, setplayerTurn, playerTurn}) => {
    
    const setBoard = (boardLocation ,indexOne, indexTwo) => {
        const changeButton = document.getElementById(boardLocation);

        setArray((currArray)=>{
            const newArray = [...currArray];
            if(playerTurn === 1) {
                newArray[indexOne][indexTwo] = 'X'
                changeButton.innerText = 'X'
                setplayerTurn((currPlayer)=>{
                    currPlayer = 2
                    return currPlayer;
                })
                checkWinner(newArray, playerTurn)
                return newArray;
            } else {
                newArray[indexOne][indexTwo] = 'O'
                changeButton.innerText = 'O'
                setplayerTurn((currPlayer)=>{
                    currPlayer = 1
                    return currPlayer;
                })
                checkWinner(newArray, playerTurn)
                return newArray;
            }

        })
    };

    return (
        <div>
            <h1>Noughts and Crosses</h1>
            <div className= 'gameboard'>
                <button id='topleft' onClick={()=>{setBoard('topleft', 0, 0)}}>-</button>
                <button id='topmiddle' onClick={()=>{setBoard('topmiddle', 0, 1)}}>-</button>
                <button id='topright' onClick={()=>{setBoard('topright', 0, 2)}}>-</button>
                <button id='middleleft' onClick={()=>{setBoard('middleleft', 1, 0)}}>-</button>
                <button id='middle' onClick={()=>{setBoard('middle', 1, 1)}}>-</button>
                <button id='middleright' onClick={()=>{setBoard('middleright', 1, 2)}}>-</button>
                <button id='bottomleft' onClick={()=>{setBoard('bottomleft', 2, 0)}}>-</button>
                <button id='bottommiddle' onClick={()=>{setBoard('bottommiddle', 2, 1)}}>-</button>
                <button id='bottomright' onClick={()=>{setBoard('bottomright', 2, 2)}}>-</button>
            </div>
        </div>
    )
}
