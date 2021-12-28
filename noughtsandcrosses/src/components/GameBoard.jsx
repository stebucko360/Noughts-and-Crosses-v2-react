import React from 'react'
import { useState } from 'react';

export const GameBoard = ({setArray, setplayerTurn, playerTurn}) => {
    
    const setBoard = (indexOne, indexTwo) => {
        setArray((currArray)=>{
            const newArray = [...currArray];
            if(playerTurn === 1) {
                newArray[indexOne][indexTwo] = 'X'
                setplayerTurn((currPlayer)=>{
                    currPlayer = 2
                    return currPlayer;
                })
                return newArray;
            } else {
                newArray[indexOne][indexTwo] = 'O'
                setplayerTurn((currPlayer)=>{
                    currPlayer = 1
                    return currPlayer;
                })
                return newArray;
            }

        })
    };

    return (
        <div>
            <h1>Noughts and Crosses</h1>
            <div className= 'gameboard'>
                <button id='topleft' onClick={()=>{setBoard(0, 0)}}>-</button>
                <button id='topmiddle' onClick={()=>{setBoard(0, 1)}}>-</button>
                <button id='topright' onClick={()=>{setBoard(0, 2)}}>-</button>
                <button id='middleleft' onClick={()=>{setBoard(1, 0)}}>-</button>
                <button id='middle' onClick={()=>{setBoard(1, 1)}}>-</button>
                <button id='middleright' onClick={()=>{setBoard(1, 2)}}>-</button>
                <button id='bottomleft' onClick={()=>{setBoard(2, 0)}}>-</button>
                <button id='bottommiddle' onClick={()=>{setBoard(2, 1)}}>-</button>
                <button id='bottomright' onClick={()=>{setBoard(2, 2)}}>-</button>
            </div>
        </div>
    )
}
