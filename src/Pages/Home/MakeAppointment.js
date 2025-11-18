// import React from 'react';
// import doctor from '../../assets/images/doctor.png'
// import appointmentBg from '../../assets/images/appointment.png'
// import PrimaryButton from '../../Components/PrimaryButton';

// const MakeAppointment = () => {
//     return (
//         <section className='mt-16 rounded-md' style={{background:`url(${appointmentBg})`}}>
//             <div className="">
//   <div className="flex lg:flex-row items-center">
//     <img src={doctor} alt="doctor" className="-mt-32 hidden lg:block lg:w-1/2 " />
//                     <div className='p-12'>
//                         <p className='text-info font-bold'>Appointment</p>
//       <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
//       <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
//       <PrimaryButton>Appointment Now</PrimaryButton>
//     </div>
//   </div>
// </div>
//         </section>
//     );
// };

// export default MakeAppointment;

import React from "react";
import { Calendar, Clock, Phone, CheckCircle, ArrowRight } from "lucide-react";

const AppointmentFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

const MakeAppointment = () => {
  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose appointment times that work best for you",
    },
    {
      icon: Clock,
      title: "Quick Appointments",
      description: "Most visits completed within an hour",
    },
    {
      icon: CheckCircle,
      title: "Expert Care",
      description: "Board-certified dental professionals",
    },
  ];

  return (
    <section className="relative py-20 px-4 my-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image Section */}
          <div className="relative hidden lg:block">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            {/* Doctor Image */}
            <div className="relative z-10 -mt-32">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600"
                alt="Professional dentist"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />

              {/* Floating stats card */}
              <div className="absolute bottom-10 -right-5 bg-white rounded-2xl shadow-2xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Book Your Visit
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Make an Appointment <br />
              <span className="text-white/90">Today</span>
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Schedule your dental appointment with ease. Our experienced team
              is ready to provide you with exceptional care in a comfortable
              environment. Whether it's a routine checkup or a specific
              treatment, we're here to help you achieve optimal oral health.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <AppointmentFeature key={index} {...feature} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/95 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                Book Appointment Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-2">
                Available Monday - Saturday, 9AM - 6PM
              </p>
              <p className="text-white font-semibold text-lg">
                📞 +880-1234-567890
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
    </section>
  );
};

export default MakeAppointment;
