// import React from "react";
// import banner from "../../assets/images/chair.png";
// import PrimaryButton from "../../Components/PrimaryButton";
// const Banner = () => {
//   return (
//     <div
//       className="hero min-h-max rounded-md p-10 mt-32"
//       style={{
//         backgroundImage: `url("https://i.ibb.co/wNqKDzB/bg.png")`,
//       }}>
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <img
//           src={banner}
//           alt="dentist-chair"
//           className="lg:w-1/2 rounded-lg shadow-2xl "
//         />
//         <div>
//           <h1 className="text-4xl font-bold">
//             Your New Smile <br /> Starts Here
//           </h1>
//           <p className="py-6">
//             Find a dentist near you on this website. Check your local dentist's
//             opening times, services, facilities, reviews and ratings. And also
//             easily schedule an appointment at home.
//           </p>
//           <PrimaryButton>Get Started</PrimaryButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import banner from "../../assets/images/chair.png";
import PrimaryButton from "../../Components/PrimaryButton";

const Banner = () => {
  return (
    // <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
    //   {/* Animated background blobs */}
    //   <div className="absolute inset-0 overflow-hidden opacity-30">
    //     <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    //     <div
    //       className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
    //       style={{ animationDelay: "700ms" }}></div>
    //     <div
    //       className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
    //       style={{ animationDelay: "1000ms" }}></div>
    //   </div>

    //   {/* Main content */}
    //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       <div className="space-y-8">
    //         <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-cyan-100">
    //           <svg
    //             className="w-4 h-4 text-cyan-600"
    //             fill="currentColor"
    //             viewBox="0 0 20 20">
    //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //           </svg>
    //           <span className="text-sm font-semibold text-gray-700">
    //             Trusted by 10,000+ Patients
    //           </span>
    //         </div>

    //         <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
    //           <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
    //             Your New Smile
    //           </span>
    //           <br />
    //           <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
    //             Starts Here
    //           </span>
    //         </h1>

    //         <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
    //           Find a dentist near you on this website. Check your local
    //           dentist's opening times, services, facilities, reviews and
    //           ratings. And also easily schedule an appointment at home.
    //         </p>

    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <PrimaryButton variant="solid">Book Appointment</PrimaryButton>
    //           <PrimaryButton variant="outline">Learn More</PrimaryButton>
    //         </div>

    //         <div className="grid grid-cols-3 gap-6 pt-8 justify-items-start">
    //           <div className="text-center">
    //             <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
    //               500+
    //             </div>
    //             <div className="text-sm text-gray-600 mt-1">Dentists</div>
    //           </div>
    //           <div className="text-center">
    //             <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
    //               50k+
    //             </div>
    //             <div className="text-sm text-gray-600 mt-1">Happy Patients</div>
    //           </div>
    //           <div className="text-center">
    //             <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
    //               4.9★
    //             </div>
    //             <div className="text-sm text-gray-600 mt-1">Rating</div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="relative lg:h-[600px]">
    //         <div
    //           className="absolute top-10 -left-4 lg:left-0 bg-white rounded-2xl shadow-2xl p-4 z-10 max-w-[200px] animate-bounce"
    //           style={{ animationDuration: "3s" }}>
    //           <div className="flex items-center gap-3">
    //             <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
    //               <svg
    //                 className="w-6 h-6 text-white"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24">
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //                 />
    //               </svg>
    //             </div>
    //             <div>
    //               <div className="text-xs text-gray-500">Next Available</div>
    //               <div className="font-bold text-gray-800 text-sm">
    //                 Today 2:30 PM
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div
    //           className="absolute bottom-10 -right-4 lg:right-0 bg-white rounded-2xl shadow-2xl p-4 z-10 max-w-[200px] animate-bounce"
    //           style={{ animationDuration: "3s", animationDelay: "1s" }}>
    //           <div className="flex items-center gap-3">
    //             <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
    //               <svg
    //                 className="w-6 h-6 text-white"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24">
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //                 />
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //                 />
    //               </svg>
    //             </div>
    //             <div>
    //               <div className="text-xs text-gray-500">Nearest Clinic</div>
    //               <div className="font-bold text-gray-800 text-sm">
    //                 0.5 km away
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="relative h-full flex items-center justify-center">
    //           <div className="relative w-full max-w-md lg:max-w-lg">
    //             <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

    //             <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
    //               <img
    //                 src={banner}
    //                 alt="dentist-chair"
    //                 className="w-full h-auto rounded-2xl object-cover"
    //               />

    //               <div className="absolute -top-4 -right-4 w-24 h-24 opacity-50">
    //                 <div className="grid grid-cols-4 gap-2">
    //                   {[...Array(16)].map((_, i) => (
    //                     <div
    //                       key={i}
    //                       className="w-2 h-2 bg-cyan-400 rounded-full"></div>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className="hero min-h-max max-w-7xl mx-auto rounded-md p-10 mt-32 border border-gray-100 shadow shadow-slate-100"
      style={{
        backgroundImage: `url("https://i.ibb.co/wNqKDzB/bg.png")`,
      }}>
      <div className="hero-content grid grid-cols-2">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your New Smile
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="text-[17px] text-gray-600 leading-relaxed max-w-xl mb-7">
            Find a dentist near you on this website. Check your local dentist's
            opening times, services, facilities, reviews and ratings. And also
            easily schedule an appointment at home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton variant="solid">Get Started</PrimaryButton>
            {/* <PrimaryButton variant="outline">Learn More</PrimaryButton> */}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full ">
              <div
                className="absolute top-4 -left-8 lg:left-0 bg-white rounded-2xl shadow-2xl p-4 z-10 max-w-[200px] animate-bounce"
                style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Next Available</div>
                    <div className="font-bold text-gray-800 text-sm">
                      Today 2:30 PM
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-4 -right-4 lg:right-0 bg-white rounded-2xl shadow-2xl p-4 z-10 max-w-[200px] animate-bounce"
                style={{ animationDuration: "3s", animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Nearest Clinic</div>
                    <div className="font-bold text-gray-800 text-sm">
                      0.5 km away
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500 m-11">
                <img
                  src={banner}
                  alt="dentist-chair"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
