import React from 'react';

const SolutionHero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#0F0E47] space-y-6">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 animate-headingChange">
        Solutions
      </h2>

      {/* Content */}
      <p className="text-white text-lg md:text-xl max-w-2xl animate-fadeIn text-opacity-90">
        We have the customized solutions you need.
      </p>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes headingChange {
          0% {
            opacity: 0;
            transform: translateY(20px);
            color: #fff;
          }
          50% {
            opacity: 1;
            transform: translateY(0);
            color: #00bcd4;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            color: #00bcd4;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-headingChange {
          animation: headingChange 1s ease-in-out, textGlow 2s infinite alternate;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0 0 10px rgba(0, 188, 212, 0.5), 0 0 20px rgba(0, 188, 212, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 188, 212, 0.7), 0 0 30px rgba(0, 188, 212, 0.7);
          }
          100% {
            text-shadow: 0 0 10px rgba(0, 188, 212, 0.5), 0 0 20px rgba(0, 188, 212, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionHero;
