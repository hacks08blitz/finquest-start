import React from 'react';

const GamePreview = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl mb-4"
            style={{ fontFamily: 'Pixelify Sans, monospace' }}
          >
            <span className="text-yellow-400">Preview</span> The Game
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a sneak peek at your financial adventure
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden border-4 border-yellow-400 shadow-2xl">
          {/* Game screenshot or video would go here */}
          <div className="aspect-video bg-gray-800 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="inline-block p-4 bg-yellow-400 text-black rounded-full mb-6 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold">Game Preview Video</p>
            </div>
          </div>
          
          {/* Game features highlights */}
          <div className="grid grid-cols-3 divide-x divide-yellow-400 bg-black">
            <div className="p-4 text-center">
              <p className="font-bold text-yellow-400">8 Financial Missions</p>
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-yellow-400">Real-World Scenarios</p>
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-yellow-400">Track Your Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePreview;