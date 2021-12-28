import React from 'react'
import { useState } from 'react'

export const Scoreboard = ({playerOneScore, playerTwoScore}) => {
    
    return (
        <div className= 'scoreboard'>
            <h3>Player 1: {playerOneScore}</h3>
            <h3>Player 2: {playerTwoScore}</h3>
        </div>
    )
}
