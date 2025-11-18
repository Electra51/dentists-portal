// import React from 'react';
// import fluoride from '../../assets/images/fluoride.png';
// import cavity from '../../assets/images/cavity.png';
// import whitening from '../../assets/images/whitening.png'
// import ServiceCard from './ServiceCard';

// const Services = () => {
//     const serviceData = [
//         {
//             id: 1,
//             serviceName: 'Fluoride Treatment',
//             description: 'Fluoride treatments are a great way to prevent more cavities in patients who are already prone to them.',
//             icon: fluoride,

//         },
//         {
//             id: 2,
//             serviceName: 'Cavity Filling',
//             description: 'A cavity filling is when the dentist fills the opening in your tooth with some kind of material.',
//             icon: cavity,

//         },
//         {
//             id: 3,
//             serviceName: 'Teeth Whitening',
//             description: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results',
//             icon: whitening,

//         }
//     ]
//     return (
//         <div>
//             <div className='text-center mt-28'>
//                 <p className='text-xl font-bold text-primary uppercase'>OUR SERVICES</p>
//                 <h1 className='text-3xl text-accent'>Services We Provide</h1>
//             </div>
//             <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
//                 {

//                     serviceData.map(service => <ServiceCard
//                         key={service.id}
//                         service={service}
//                     ></ServiceCard>)
//                 }
//             </div>
//       </div>
//     );
// };

// export default Services;

import React from "react";
import { Activity, Shield, Sparkles } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-8 h-8 text-primary" />
        </div>
        {/* Decorative element */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/5 rounded-full blur-sm group-hover:bg-primary/10 transition-colors"></div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
        {service.serviceName}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Learn More Link */}
      <button className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
        Learn More
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
      </button>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

const Services = () => {
  const serviceData = [
    {
      id: 1,
      serviceName: "Fluoride Treatment",
      description:
        "Professional fluoride treatments strengthen tooth enamel and prevent cavities, especially beneficial for patients prone to dental decay.",
      icon: Shield,
    },
    {
      id: 2,
      serviceName: "Cavity Filling",
      description:
        "Advanced cavity filling procedures using high-quality materials to restore tooth structure and function while maintaining natural appearance.",
      icon: Activity,
    },
    {
      id: 3,
      serviceName: "Teeth Whitening",
      description:
        "Professional in-office whitening system delivering dramatic, long-lasting results in a single comfortable session.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services We Provide
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental care solutions tailored to your needs
          </p>
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
