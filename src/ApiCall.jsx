import React, { useState, useEffect } from 'react';
import './App.css'
import Cards from './Cards.jsx'
import GameRules from './GameRules.jsx'


const ApiCall = () => {
  const [responseData, setResponseData] = useState(null);

  const handleApiCall = async () => {
    try {
      const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>API Call Component</h2>
      <button onClick={handleApiCall}>Make API Call</button>

      {responseData && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiCall;
