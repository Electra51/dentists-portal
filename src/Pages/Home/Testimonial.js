import React, { useState } from "react";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";

const TestimonialCard = ({ review, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
        isActive ? "scale-105 border-primary/30" : ""
      }`}>
      {/* Quote Icon */}
      <div className="w-14 h-14 md:w-16 md:h-16 -mt-10 bg-primary rounded-full flex items-center justify-center shadow-lg mx-auto md:mx-0">
        <Quote className="w-7 h-7 text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3 mt-6 justify-center md:justify-start">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
        "{review.review}"
      </p>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

      {/* Reviewer Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.img}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{review.location}</span>
          </div>
        </div>
      </div>
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
        "Outstanding dental care! The team made me feel comfortable throughout my treatment.",
      location: "California",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    },
    {
      id: 2,
      name: "Bsh Sen",
      review:
        "Best dental experience I've ever had. Friendly staff and modern facility!",
      location: "California",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    },
    {
      id: 3,
      name: "John Mall",
      review:
        "Professional and caring service. They explained every step thoroughly!",
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
    <section className="py-16 md:py-20 px-4 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider inline-block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              Real feedback from our valued patients
            </p>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review, index) => (
            <TestimonialCard
              key={review.id}
              review={review}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        {/* Mobile Slider Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 md:hidden">
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

        {/* Mobile Prev/Next Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="px-6 py-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/80">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-gray-600">Avg Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-info to-secondary text-white hover:opacity-90 shadow-md rounded-2xl p-10 ">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Experience Exceptional Care?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join hundreds of satisfied patients who trust us with their dental
            health.
          </p>
          <Link to={"/appointment"}>
            <PrimaryButton
              variant="outline"
              className=" border border-white bg-white">
              Book Appointment
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
