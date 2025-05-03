import React, { useEffect, useState } from 'react';
import { ArrowRight, LineChart, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function DigitalServicesCardsSideBySide() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setOffset(prevOffset => (prevOffset + 1) % 100);
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        
        {/* Data Analytics Card */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-lg text-white" style={{ backgroundColor: '#0f0e47' }}>
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

              {[...Array(12)].map((_, i) => (
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

              {[...Array(6)].map((_, i) => (
                <polyline 
                  key={i}
                  points={`${10 + i*5},${80 - i*8} ${30 + i*5},${60 - i*3} ${50 + i*5},${70 - i*5} ${70 + i*5},${50 - i*4} ${90 + i*5},${65 - i*6}`}
                  stroke="#a5b4fc"
                  strokeWidth="1"
                  fill="none"
                  opacity={0.2}
                  transform={`translate(${offset * 0.2}%, 0)`}
                />
              ))}
            </svg>
          </div>
          
          {/* Card content */}
          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-8 bg-indigo-400 rounded-full"></div>
              <div className="flex items-center">
                <LineChart size={22} className="mr-2 text-indigo-300" />
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Contact Center</h1>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-indigo-100 mb-8 leading-relaxed">
              We have vernacular capabilities to serve customers in over 10 languages including English, Hindi, and regional languages. Services include handling customer complaints and inquiries, customer lifecycle management, business analytics, partner support, and upselling.
            </p>
            <NavLink to={"/contact-us"}>
            <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
            </NavLink>
           
          </div>
        </div>
        
        {/* Global Marketing Card */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-lg text-white" style={{ backgroundColor: '#1e0b42' }}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle 
                cx={`${(offset * 1.2 + 20) % 100}%`} 
                cy="40%" 
                r="120" 
                fill="url(#gradient2)"
              >
                <animate attributeName="r" values="80;150;80" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle 
                cx={`${(offset * 0.7 + 50) % 100}%`} 
                cy="60%" 
                r="100" 
                fill="url(#gradient2)"
              >
                <animate attributeName="r" values="40;110;40" dur="7s" repeatCount="indefinite" />
              </circle>

              {[...Array(15)].map((_, i) => (
                <circle 
                  key={i}
                  cx={`${(offset * (i * 0.15 + 0.4) + i * 6) % 100}%`} 
                  cy={`${(i * 6 + 10) % 100}%`} 
                  r={1 + (i % 4)} 
                  fill="#c4b5fd"
                  opacity={0.3 + (i % 7) * 0.1}
                >
                  <animate 
                    attributeName="r" 
                    values={`${1 + (i % 4)};${3 + (i % 4)};${1 + (i % 4)}`} 
                    dur={`${3 + i}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
              ))}

              {[...Array(10)].map((_, i) => (
                <line 
                  key={i}
                  x1={`${(i * 12) % 100}%`}
                  y1={`${(i * 10) % 100}%`}
                  x2={`${((i * 12) + 25) % 100}%`}
                  y2={`${((i * 10) + 25) % 100}%`}
                  stroke="#c4b5fd"
                  strokeWidth="1"
                  opacity={0.2}
                  strokeDasharray="5,5"
                  strokeDashoffset={offset}
                />
              ))}
            </svg>
          </div>

          {/* Card content */}
          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-8 bg-purple-400 rounded-full"></div>
              <div className="flex items-center">
                <Globe size={22} className="mr-2 text-purple-300" />
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Customer Experience & Backend Services
                </h1>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-purple-100 mb-8 leading-relaxed">
              Solutions for e-commerce and online sales including e-commerce analytics, conversion rate optimization, catalog management, logistics management, loyalty programs, and return/refund management.
            </p>
            
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
