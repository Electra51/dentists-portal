// import React from 'react';
// import treatment from '../../assets/images/treatment.png'
// import PrimaryButton from '../../Components/PrimaryButton';
// const About = () => {
//     return (
//         <div className="hero min-h-max rounded-md p-10 mt-28" >
//         <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-14">

//           <div>
//             <h1 className="text-4xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
//             <p className="py-6">Filling most cavities is a quick procedure. You'll likely be numbed, which can last for a few hours after the filling is over. It usually takes about an hour to finish up, and then it's good as new! You might feel pressure while they're working, but it shouldn't be painful.</p>
//             <PrimaryButton>About Us</PrimaryButton>
//                 </div>
//                 <img src={treatment} alt="dentist-chair" className="lg:w-1/2 rounded-lg shadow-2xl " />
//         </div>
//       </div>
//     );
// };

// export default About;

import React from "react";
import { Check, Award, Shield } from "lucide-react";

const FeatureItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 group">
    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{number}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  </div>
);

const About = () => {
  const features = [
    { icon: Check, text: "Quick and painless procedures" },
    { icon: Check, text: "Experienced dental professionals" },
    { icon: Check, text: "State-of-the-art equipment" },
    { icon: Check, text: "Flexible scheduling options" },
  ];

  const stats = [
    { number: "500+", label: "Happy Patients", icon: Award },
    { number: "50k+", label: "Procedures", icon: Shield },
    { number: "4.9★", label: "Patient Rating", icon: Award },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"
                  alt="Dental treatment chair"
                  className="w-full h-full object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Exceptional Dental Care,{" "}
              <span className="text-primary">on Your Terms</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We understand that dental visits can be stressful. That's why
              we've created a comfortable, modern environment where your care
              comes first. Most procedures are quick and painless, with numbing
              that ensures your comfort throughout the treatment.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More About Us
              </button>
              <button className="px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
