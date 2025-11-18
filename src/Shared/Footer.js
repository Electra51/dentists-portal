import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import footerBg from "../assets/images/footer.png";
import teeth from "../teeth.json";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer
        className="footer p-10 bg-base-200 text-base-content"
        style={{ background: `url(${footerBg})`, backgroundSize: "cover" }}>
        <div>
          <Lottie animationData={teeth} loop={true} className="w-10 h-10" />
          <p className="text-xl font-bold">Dentist-portal</p>
        </div>
        <div>
          <span className="footer-title">SERVICES</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <p className="text-center">Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
