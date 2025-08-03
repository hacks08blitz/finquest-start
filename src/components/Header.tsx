import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-transparent fixed w-full z-50 transition-all duration-300">
      <div className="backdrop-blur-sm bg-white/30 max-w-100xl mx-auto px-4 sm:px-6 lg:px-8 rounded-b-xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Link to="/">
              <span className="text-4xl font-bold text-black" style={{ fontFamily: 'Pixelify Sans, monospace' }}>
                FinQuest
              </span>
            </Link>
          </div>
          {/* Navigation */}
          {isHomePage && (
            <nav className="hidden md:flex items-center space-x-8 ml-auto px-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <a href="#home" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 ">
                Features
              </a>
            </nav>
          )}
          {/* CTA Button */}
          <Link to={isHomePage ? "https://finquest-mission-page-final-i9sbj2b2t-hacksbliotzs-projects.vercel.app/" : "/"}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 border-4 border-black transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {isHomePage ? "Start Playing" : "Back to Home"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;