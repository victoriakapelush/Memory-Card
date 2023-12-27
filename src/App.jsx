import './App.css'
import Cards from './Cards.jsx'
import GameRules from './GameRules.jsx'
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <>
      <div className='header-container flex-row'>
        <GameRules />
      </div>
    </>
  )
}

export default App


