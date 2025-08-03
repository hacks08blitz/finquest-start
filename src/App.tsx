import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import GamePreview from './components/GamePreview';
import IncomeSelection from './components/IncomeSelection';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-transparent">
            <Header />
            <Hero />
            <IntroSection />
            <FeaturesSection />
          </div>
        } />
        <Route path="/income-selection" element={<IncomeSelection />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;