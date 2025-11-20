import React from "react";
import Lottie from "lottie-react";
import teeth from "../teeth.json";
import { Link } from "react-router-dom";
const LogoName = () => {
  return (
    <Link to="/" className="flex items-center font-semibold text-lg">
      <Lottie animationData={teeth} loop={true} className="w-10 h-10" />
      <span className="font-bold text-gray-800 tracking-wide text-xl lg:text-2xl">
        Dentist - <span className="text-[#5ecdc9]">Portal</span>
      </span>
    </Link>
  );
};

export default LogoName;
