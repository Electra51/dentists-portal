import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Lottie from "lottie-react";
import teeth from "../teeth.json";
import { LogIn } from "lucide-react";
import PrimaryButton from "../Components/PrimaryButton";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/appointment" className="nav-link">
        Appointment
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>

      {user?.uid ? (
        <>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <button onClick={handleLogOut} className="nav-link">
            Sign out
          </button>
        </>
      ) : (
        <Link to="/login" className="w-full lg:w-auto">
          <PrimaryButton>
            <LogIn className="w-5" />
            <span className="pl-2">Login</span>
          </PrimaryButton>
        </Link>
      )}
    </>
  );

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-base/30 backdrop-blur-md"
      }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-1.5">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center font-semibold text-lg">
            <Lottie animationData={teeth} loop={true} className="w-10 h-10" />
            <span className="font-bold text-gray-800 tracking-wide text-xl lg:text-2xl">
              Dentist - <span className="text-info">Portal</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">{menuItems}</nav>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col gap-4 pb-4 pt-2">{menuItems}</div>
        </div>
      </div>

      <style>
        {`
          .nav-link {
            @apply text-gray-700 hover:text-blue-600 transition font-medium;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
