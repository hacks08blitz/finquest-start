import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('/images/hero-background.png')",
          filter: "blur(4px)",
          transform: "scale(1.05)", /* Prevents blur from showing edges */
        }}
      ></div>
        
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-white opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-black mb-8 leading-tight font-extrabold"
            style={{ fontFamily: 'Pixelify Sans, monospace', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Play the Game 
            <span className="block text-yellow-500 mt-4 drop-shadow-lg">Learn the Money!</span>
          </h1>

          {/* Subtext */}
          <p className="text-2xl md:text-3xl text-gray-900 mb-10 max-w-3xl mx-auto font-semibold leading-relaxed">
            Learn to budget, save, invest — and win at real-world money.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-5 px-14 text-2xl border-4 border-black transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;