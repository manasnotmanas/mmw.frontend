import { useState, useEffect } from "react";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const headings = ["Grow", "Redefine", "Deliver"];
  const cubeMessages = [
    "Grow your business worldwide",
    "Redefine your customer experience",
    "Deliver customized solutions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#0F0E47] space-y-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-2">
        WE ARE HERE TO
        <span
          className="text-cyan-400 inline-block ml-2 animate-headingChange"
        >
          {headings[activeIndex]}
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 min-h-[60px]">
        {cubeMessages.map((message, index) => (
          <p
            key={index}
            className={`text-white text-base sm:text-lg md:text-xl transition-opacity duration-1000 ease-in-out max-w-xs ${
              activeIndex === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {message}
          </p>
        ))}
      </div>

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

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
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

        .animate-headingChange {
          animation: headingChange 1s ease-in-out, textGlow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Hero;
