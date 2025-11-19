// import React from "react";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import footerBg from "../assets/images/footer.png";
// import teeth from "../teeth.json";

// const Footer = () => {
//   return (
//     <div className="mt-20">
//       <footer
//         className="footer p-10 bg-base-200 text-base-content max-w-7xl mx-auto "
//         style={{ background: `url(${footerBg})`, backgroundSize: "cover" }}>
//         <div>
//           <Lottie animationData={teeth} loop={true} className="w-10 h-10" />
//           <p className="text-xl font-bold">Dentist-portal</p>
//         </div>
//         <div>
//           <span className="footer-title">SERVICES</span>
//           <Link className="link link-hover">Emergency Checkup</Link>
//           <Link className="link link-hover">Monthly Checkup</Link>
//           <Link className="link link-hover">Weekly Checkup</Link>
//           <Link className="link link-hover">Deep Checkup</Link>
//         </div>
//         <div>
//           <span className="footer-title">ORAL HEALTH</span>
//           <Link className="link link-hover">Fluoride Treatment</Link>
//           <Link className="link link-hover">Cavity Filling</Link>
//           <Link className="link link-hover">Teeth Whitening</Link>
//         </div>
//         <div>
//           <span className="footer-title">OUR ADDRESS</span>
//           <Link className="link link-hover">New York - 101010 Hudson</Link>
//         </div>
//       </footer>
//       <p className="text-center">Copyright 2022 All Rights Reserved</p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import footerBg from "../assets/images/footer.png";
import teeth from "../teeth.json";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer
        className="p-10 bg-base-200 text-base-content rounded-xl"
        style={{
          background: `url(${footerBg}) center/cover no-repeat`,
        }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col items-center font-semibold text-lg">
            <Lottie animationData={teeth} loop={true} className="w-16 h-16" />
            <span className="font-bold text-gray-800 tracking-wide text-xl lg:text-2xl">
              Dentist - <span className="text-info">Portal</span>
            </span>
          </Link>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <span className="footer-title font-semibold text-gray-700">
              SERVICES
            </span>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Emergency Checkup
            </Link>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Monthly Checkup
            </Link>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Weekly Checkup
            </Link>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Deep Checkup
            </Link>
          </div>

          {/* Oral Health */}
          <div className="flex flex-col gap-2">
            <span className="footer-title font-semibold text-gray-700">
              ORAL HEALTH
            </span>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Fluoride Treatment
            </Link>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Cavity Filling
            </Link>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              Teeth Whitening
            </Link>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <span className="footer-title font-semibold text-gray-700">
              OUR ADDRESS
            </span>
            <Link className="link link-hover text-gray-600 hover:text-primary transition-colors">
              New York - 101010 Hudson
            </Link>
          </div>
        </div>
      </footer>

      <p className="text-center mt-6 text-gray-500 text-sm pb-5">
        © 2022 Dentist-Portal. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
