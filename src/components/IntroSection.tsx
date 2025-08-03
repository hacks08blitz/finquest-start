import React from 'react';
import { GraduationCap, DollarSign } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-transparent p-8 md:p-12 rounded-2xl shadow-lg border-4 border-black">
          {/* Icons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="bg-yellow-400 p-4 rounded-xl border-4 border-black">
              <GraduationCap className="h-8 w-8 text-black" />
            </div>
            <div className="text-4xl">➡️</div>
            <div className="bg-green-500 p-4 rounded-xl border-4 border-black">
              <DollarSign className="h-8 w-8 text-black" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Your Journey Begins Now
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Congratulations! You've just graduated high school with <span className="font-bold text-green-600">$3,000</span> in your pocket. 
            Now it's time to enter the real world and learn how to manage your money like a pro. 
            Through exciting missions and real-world scenarios, you'll master the financial skills that schools never taught you. 
            Are you ready to level up your money game?
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;