import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards = [
    {
      id: 1,
      title: "creating customer feedback channels through multiple technology platforms",
      info: "A few of our customers in the consumer white-goods, retail and e-commerce verticals were facing the challenge of getting accurate customer feedback. Customer satisfaction feedback was not obtained in a structured manner and feedback lacked details and accuracy.",
    },
    {
      id: 2,
      title: "handling volume spikes due to seasonality by providing self-service feature",
      info: "Our client, a consumer white-goods brand with pan-India presence, struggled to manage increase in customer interactions during the peak summer season within a limited time span.",
    },
    {
      id: 3,
      title: "automation of large datasets inflow from multiple sources in real time",
      info: "Our client is a telecommunications service provider with pan-India presence. Due to dynamic changes in the telecommunications market in India, they wanted to reach out to customers instantaneously upon any change in customer status.",
    },
    {
      id: 4,
      title: "streamlining non delivery returns",
      info: "Our client, an India headquartered e-commerce company, experienced unsustainably high non-delivery returns (NDR) in cash on delivery (COD) cases due to various factors including courier and customer denials.",
    },
    {
      id: 5,
      title: "geographic information systems (location mapping)",
      info: "Our client, an automotive manufacturer, experienced difficulties in providing service during vehicle breakdowns due to constraints in tracking the vehicle locations.",
    },
    {
      id: 6,
      title: "smart IVR",
      info: "Cogent’s intelligent voice response system was set up with the dual aim of reducing call volumes and solving customer concerns efficiently.",
    },
  ];

  const cardsPerPage = 1; // One card per page
  const pageCount = cards.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageCount);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pageCount) % pageCount);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-12 rounded-xl">
      <h2 className="text-4xl font-bold mb-10 text-indigo-900">
Case studies      </h2>

      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="relative w-full bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl shadow-xl">
          <div className="relative overflow-hidden" style={{ height: "400px" }}>
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div 
                key={pageIndex}
                className="w-full grid grid-cols-1 gap-6 absolute top-0 left-0 px-6 py-8 transition-all duration-500 ease-out"
                style={{ 
                  transform: `translateX(${(pageIndex - currentIndex) * 100}%)`,
                  opacity: pageIndex === currentIndex ? 1 : 0,
                  zIndex: pageIndex === currentIndex ? 10 : 0
                }}
              >
                {cards
                  .slice(pageIndex * cardsPerPage, (pageIndex * cardsPerPage) + cardsPerPage)
                  .map((card) => (
                    <div 
                      key={card.id} 
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:translate-y-2 hover:shadow-2xl border-b-4 border-indigo-500 h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                            <span className="text-white font-bold">{card.id}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-indigo-900">{card.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">{card.info}</p>
                        <div className="mt-auto">
                          <button className="bg-indigo-900 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition-colors duration-300 flex items-center justify-center group w-full md:w-auto">
                            <span>Learn More</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-900" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-indigo-900" />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-indigo-900 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
}
