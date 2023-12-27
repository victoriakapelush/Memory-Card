import './App.css'
import GameRules from './GameRules.jsx'
import React, { useState, useEffect } from 'react';

const Cards = ({ onCardClick }) => {
  const initialCards = [{
    id: 0,
    name: '6 of hearts',
    src: "https://deckofcardsapi.com/static/img/6H.png"
  },
  {
    id: 1,
    name: '2 of diamonds',
    src: "https://deckofcardsapi.com/static/img/2D.png"
  },
  {
    id: 2,
    name: 'Jack of spades',
    src: "https://deckofcardsapi.com/static/img/JS.png"
  },
  {
    id: 3,
    name: 'Joker',
    src: "https://deckofcardsapi.com/static/img/X2.png"
  },
  {
    id: 4,
    name: 'Queen of clubs',
    src: "https://deckofcardsapi.com/static/img/QC.png"
  },
  {
  id: 5,
  name: '4 of spades',
  src: "https://deckofcardsapi.com/static/img/4S.png"
  }
]

const [cards, setCards] = useState(initialCards);

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const handleCardClick = (card) => {
  const shuffledCards = shuffleArray(cards);
  setCards(shuffledCards);
  onCardClick(card.id);
};


    return (
        cards.map(card =>
        <div key={card.id} onClick={() => handleCardClick(card)}>
          <img
            src={card.src}
            alt={card.name}
            className="card" />
        </div>
        )  
    )
}

export default Cards;