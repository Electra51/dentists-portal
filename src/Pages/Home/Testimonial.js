// import React from 'react';
// import quote from '../../assets/icons/quote.svg'
// import people1 from '../../assets/images/people1.png'
// import people2 from '../../assets/images/people2.png'
// import people3 from '../../assets/images/people3.png'
// import TestimonialCard from './TestimonialCard';

// const Testimonial = () => {

//     const reviewsData = [
//         {
//             id: 1,
//             name: 'WIN SON HERR',
//             review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
//             location: 'California',
//             img: people1
//         },
//         {
//             id: 2,
//             name: 'BSH SEN',
//             review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
//             location: 'California',
//             img: people2
//         },
//         {
//             id: 3,
//             name: 'JOHN MALL',
//             review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
//             location: 'California',
//             img: people3
//         }
//     ]

//     return (
//         <section className='mt-16'>
//             <div className='flex justify-between p-5'>

//                 <div>
//                     <h2 className='text-xl font-bold text-info'>Testimonial</h2>
//                     <p className='text-4xl text-accent'>What Our Patients Says</p>
//                 </div>
//                 <figure className='w-24 lg:w-48'><img src={quote} alt="" /></figure>
//             </div>
//             <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-center'>
//                 {
//                     reviewsData.map(review => <TestimonialCard
//                         key={review.id}
//                         reviews={review}
//                     ></TestimonialCard>)
//                 }
//             </div>
//         </section>
//     );
// };

// export default Testimonial;

import React, { useState } from "react";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCard = ({ review, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative ${
        isActive ? "scale-105 border-primary/30" : ""
      }`}>
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-8 h-8 text-white" fill="currentColor" />
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4 mt-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{review.review}"
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

      {/* Patient Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={review.img}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{review.location}</span>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full"></div>
    </div>
  );
};

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsData = [
    {
      id: 1,
      name: "Win Son Herr",
      review:
        "Outstanding dental care! The team made me feel comfortable throughout my treatment. The professionalism and attention to detail exceeded my expectations. Highly recommend!",
      location: "California",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    },
    {
      id: 2,
      name: "Bsh Sen",
      review:
        "Best dental experience I've ever had. The staff is friendly, the facility is modern, and the results speak for themselves. My smile has never looked better!",
      location: "California",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    },
    {
      id: 3,
      name: "John Mall",
      review:
        "Professional, caring, and efficient service. They explained every step of the procedure and made sure I was comfortable. Five stars all the way!",
      location: "California",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="inline-block mb-2">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Real experiences from our valued patients
            </p>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review, index) => (
            <TestimonialCard
              key={review.id}
              review={review}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        {/* Navigation Dots - Mobile */}
        <div className="flex justify-center items-center gap-2 mt-10 md:hidden">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Exceptional Care?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who trust us with their dental
            health
          </p>
          <button className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
