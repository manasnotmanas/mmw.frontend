import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, description }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-[#0f0e47] to-[#1f1f61] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md shadow-xl p-8 md:p-10 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle
            cx={`${(offset * 1.5) % 100}%`}
            cy="30%"
            r="100"
            fill="url(#bgGradient)"
          />
          <circle
            cx={`${(offset * 0.8 + 40) % 100}%`}
            cy="70%"
            r="80"
            fill="url(#bgGradient)"
          />

          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={`${(offset * (i * 0.3 + 0.6) + i * 5) % 100}%`}
              cy={`${(i * 7) % 100}%`}
              r={2 + (i % 2)}
              fill="#93c5fd"
              opacity={0.5 + (i % 4) * 0.1}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1.5 h-8 bg-blue-400 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        </div>
        <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">{description}</p>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20">
          <span>Learn More</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const TransformationCards = () => {
  return (
    <div className="w-[90vw] md:w-4/5 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card
        title="back office solutions"
        description="solutions for e-commerce and online sales including e-commerce analytics, conversion rate optimisation, catalogue management, logistics management, loyalty programs as well as return and refund management."
      />
      <Card
        title="Custom Solutions"
        description="Tailored strategies and solutions designed to meet your business needs and drive measurable results."
      />
    </div>
  );
};

export default TransformationCards;
