import './App.css'
import Cards from './Cards.jsx'
import React, { useState, useEffect } from 'react';

export default function GameRules() {
    const [counter, setCounter ] = useState(0);
    const [bestScore, setBestScore ] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const handleIncrement = () => {
      setCounter((counter) => counter + 1);
    };
    
    const handleGameOver = () => {
      setBestScore(counter);
      handleGameReset();
    };

    const handleGameReset = () => {
      setCounter(0);
      setBestScore(counter);
      setClickedCards([]);
    };

    function handleCardClick(cardId) {
      if (clickedCards.includes(cardId)) {
        handleGameReset();
      } else {
        setClickedCards((prevClickedCards) => [...prevClickedCards, cardId]);
        handleIncrement();
      }
    }

    return(
        <>
        <div className='header-container flex-column'>
            <div>
                <h2>Memory Card Game</h2>
                <p>Click on the cards to earn points, but don't click on the same one twice. Good Luck!</p>
            </div>
            <div>
                <h3>Current Score: {counter} </h3>
                <h3>Best Score: {bestScore} </h3>
            </div>
        </div>
        <div className='cards-container flex-row'>
            <Cards 
            onCardClick={handleCardClick} />
        </div>
    </>
    )
}
