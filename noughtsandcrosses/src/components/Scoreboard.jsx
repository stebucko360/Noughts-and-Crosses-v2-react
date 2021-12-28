import React from 'react'
import { useState } from 'react'

export const Scoreboard = () => {
    const [playerOneScore, setScoreOne] = useState(0)
    const [playerTwoScore, setScoreTwo] = useState(0)
    return (
        <div className= 'scoreboard'>
            <h3>Player 1: {playerOneScore}</h3>
            <h3>Player 2: {playerTwoScore}</h3>
        </div>
    )
}
