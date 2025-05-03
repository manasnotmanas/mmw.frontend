import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RevisedDigitalTransformationCard() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setOffset(prevOffset => (prevOffset + 1) % 100);
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="w-[90vw] md:w-4/5 mx-auto relative overflow-hidden rounded-xl shadow-lg text-white my-8" style={{ backgroundColor: '#0f0e47' }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle 
            cx={`${(offset * 1.5) % 100}%`} 
            cy="30%" 
            r="100" 
            fill="url(#gradient1)"
          >
            <animate attributeName="r" values="50;120;50" dur="8s" repeatCount="indefinite" />
          </circle>

          <circle 
            cx={`${(offset * 0.8 + 30) % 100}%`} 
            cy="70%" 
            r="80" 
            fill="url(#gradient1)"
          >
            <animate attributeName="r" values="30;90;30" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <circle 
              key={i}
              cx={`${(offset * (i * 0.2 + 0.5) + i * 7) % 100}%`} 
              cy={`${(i * 7) % 100}%`} 
              r={2 + (i % 3)} 
              fill="#a5b4fc"
              opacity={0.4 + (i % 6) * 0.1}
            >
              <animate 
                attributeName="cy" 
                values={`${(i * 7) % 100}%;${((i * 7) - 20) % 100}%;${(i * 7) % 100}%`} 
                dur={`${5 + i}s`} 
                repeatCount="indefinite" 
              />
            </circle>
          ))}

          {/* Network lines */}
          {[...Array(8)].map((_, i) => (
            <line 
              key={i}
              x1={`${(i * 10) % 100}%`}
              y1={`${(i * 12) % 100}%`}
              x2={`${((i * 10) + 20) % 100}%`}
              y2={`${((i * 12) + 20) % 100}%`}
              stroke="#a5b4fc"
              strokeWidth="1"
              opacity={0.2}
            >
              <animate 
                attributeName="x2" 
                values={`${((i * 10) + 20) % 100}%;${((i * 10) + 30) % 100}%;${((i * 10) + 20) % 100}%`} 
                dur={`${3 + i}s`} 
                repeatCount="indefinite" 
              />
            </line>
          ))}
        </svg>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-6">
          <div className="w-2 h-8 bg-indigo-400 rounded-full"></div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Digital Transformation</h1>
        </div>

        <p className="text-base md:text-lg text-indigo-100 mb-6 md:mb-8 leading-relaxed">
          Leveraging technology, we provide digital transformative services to enhance the way brands connect with their online audience. We deliver the latest digital marketing solutions and insights across multiple platforms to help brands achieve their digital goals.
        </p>

        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
