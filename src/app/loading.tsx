"use client"
import React from 'react';

const Loader = () => {
  const letters = ['N', 'I', 'D', 'H', 'I', 'V', 'A', 'N'];
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        {/* Main NIDHIVAN Text */}
        <div className="flex justify-center items-end space-x-1">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 drop-shadow-lg transform"
              style={{
                animation: `jump 2.4s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes jump {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
        }
        
        /* Optional: Add a subtle glow effect */
        span {
          text-shadow: 0 0 20px rgba(255, 193, 7, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Loader;