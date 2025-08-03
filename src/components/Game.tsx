import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
  const [income, setIncome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-income');
        setIncome(response.data.income);
      } catch (err) {
        console.error('Failed to fetch income:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIncome();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl">Loading your game...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl border-4 border-black p-8 shadow-2xl">
        <h1 
          className="text-4xl font-bold mb-6 text-center"
          style={{ fontFamily: 'Pixelify Sans, monospace' }}
        >
          Your Financial Adventure
        </h1>
        
        <div className="text-center mb-8 p-4 bg-yellow-100 rounded-lg border-2 border-yellow-400">
          <p className="text-xl">Starting Income: <span className="font-bold text-green-600">${income}</span></p>
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-4">Game interface will be implemented here.</p>
          <p className="text-gray-600">This is just a placeholder for the actual game.</p>
        </div>
      </div>
    </div>
  );
};

export default Game;