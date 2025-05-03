import React from 'react';
import { Infinity, Headphones, TrendingUp, ShieldCheck, Settings2 } from 'lucide-react';

const benefits = [
  {
    title: '24/7 Support',
    description: 'We serve our clients round the clock to adapt to the evolving customer requirements.',
    icon: Headphones,
  },
  {
    title: 'Scalability',
    description: 'We target sustained growth with flexible resources to increase profits and decrease operational costs.',
    icon: TrendingUp,
  },
  {
    title: 'Reliability',
    description: 'We offer flexible support to increase satisfaction among your customers.',
    icon: ShieldCheck,
  },
  {
    title: 'Adaptable Solutions',
    description: 'With domain expertise, we service our clients as per their industry and needs.',
    icon: Settings2,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-12 px-6 bg-[#0F0E47] flex flex-col items-center">
      {/* Main Card */}
      <div className="w-full max-w-7xl bg-[#0F0E47] rounded-3xl shadow-2xl p-10 flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          Why Our Customers Choose Us
        </h2>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#1A1A6E] rounded-2xl hover:shadow-xl transition duration-300 ease-in-out"
            >
              {/* Circle Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#3B3B91] mb-4">
                {typeof benefit.icon === 'string' ? (
                  <img src={benefit.icon} alt={benefit.title} className="w-10 h-10 object-contain" />
                ) : (
                  <benefit.icon className="w-10 h-10 text-white" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
