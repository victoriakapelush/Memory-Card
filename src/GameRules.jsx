import './App.css'
import Cards from './Cards.jsx'
import ApiCall from './ApiCall.jsx'
import React, { useState, useEffect } from 'react';

export default function GameRules() {
    const [counter, setCounter ] = useState(0);

    function increment() {
        setCounter (counter + 1);
      }

    return(
        <>
        <div className='header-container flex-column'>
            <div>
                <h2>Memory Game</h2>
                <p>Click on the cards to earn points, but don't click on the same one twice. Good Luck!</p>
            </div>
            <div>
                <h3>Current Score: {counter} </h3>
                <h3>Best Score: </h3>
            </div>
        </div>
        <div className='cards-container flex-row'>
            <Cards 
            onIncrement={increment} />
        </div>
    </>
    )
}
