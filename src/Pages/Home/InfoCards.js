// import React from 'react';
// import clock from '../../assets/icons/clock.svg';
// import marker from '../../assets/icons/marker.svg';
// import phone from '../../assets/icons/phone.svg'
// import InfoCard from './InfoCard';

// const InfoCards = () => {
//     const cardData = [
//         {
//             id: 1,
//             infoName: 'Opening Hours',
//             description: 'Open 9.00am to 5.00pm everyday',
//             icon: clock,
//             bgClass:'bg-gradient-to-r from-secondary to-info'
//         },
//         {
//             id: 2,
//             infoName: 'Visit our location',
//             description: 'Brooklyn, NY 10036, United States',
//             icon: marker,
//             bgClass:'bg-accent'
//         },
//         {
//             id: 3,
//             infoName: 'Contact us now',
//             description: '+000 123 456789',
//             icon: phone,
//             bgClass:'bg-gradient-to-r from-info to-secondary'
//         }
//     ]
//     return (

//         <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//             {
//                 cardData.map(card => <InfoCard
//                     key={card.id}
//                     card={card}
//                 ></InfoCard>)
//             }
//        </div>
//     );
// };

// export default InfoCards;

import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const InfoCard = ({ card }) => {
  return (
    <div className="group relative">
      {/* Hover glow effect */}
      <div
        className={`absolute -inset-0.5 ${card.bgClass} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>

      {/* Card content */}
      <div
        className={`relative ${card.bgClass} rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}>
        <div className="flex items-center gap-6">
          {/* Icon container with animation */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <img src={card.icon} alt={card.infoName} className="w-8 h-8" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2">
              {card.infoName}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      infoName: "Opening Hours",
      description: "Open 9.00am to 5.00pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      infoName: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-gradient-to-r from-teal-500 to-cyan-500",
    },
    {
      id: 3,
      infoName: "Contact us now",
      description: "+000 123 456789, +000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      {/* Section with cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <InfoCard key={card.id} card={card} />
        ))}
      </div>

      {/* Optional: Decorative line */}
      <div className="mt-16 flex items-center justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default InfoCards;
