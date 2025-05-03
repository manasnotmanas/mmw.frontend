import React from 'react';

const AboutCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#0f0e47] shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left side: What We Do */}
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-white">What We Do</h2>
          <p className="text-base text-gray-200 mt-4">
            Make MY WAY is an Indian CXM solutions provider facilitating businesses and brands to redefine their customer experience management in the digital age. Since 2004, we continue to deliver industry-specific results and an approach that strengthens customer relations and differentiates you from your competitors.
          </p>
        </div>

        {/* Right side: We Are Known For */}
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-white">We Are Known For</h2>
          <p className="text-base text-gray-200 mt-4">
            Our multilingual capabilities provide operational excellence and help you improve business processes and performance. We design and administer customer experience through digital solutions such as automation, analytics, and AI/ML-based solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
