import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const IncomeSelection = () => {
  const [income, setIncome] = useState(3000); // Default value
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await axios.post('http://localhost:5000/api/set-income', { income });
      navigate('/game'); // Navigate to game page after successful submission
    } catch (err) {
      setError('Failed to save income. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl border-4 border-black shadow-2xl">
        <div className="text-center">
          <h2 
            className="text-3xl font-extrabold text-gray-900 mb-2"
            style={{ fontFamily: 'Pixelify Sans, monospace' }}
          >
            Set Your Starting Income
          </h2>
          <p className="text-gray-600 text-lg">
            Choose how much money you'll start with
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-6">
              <label htmlFor="income" className="block text-lg font-medium text-gray-700 mb-2">
                Starting Income: ${income}
              </label>
              <input
                id="income"
                name="income"
                type="range"
                min="500"
                max="5000"
                step="100"
                value={income}
                onChange={(e) => setIncome(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$500</span>
                <span>$5000</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-4 border-4 border-black text-xl font-bold rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Pixelify Sans, monospace' }}
            >
              {isSubmitting ? 'Saving...' : 'Start Your Adventure'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeSelection;