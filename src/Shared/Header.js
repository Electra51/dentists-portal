// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Contexts/AuthProvider";
// import Lottie from "lottie-react";
// import teeth from "../teeth.json";

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((err) => console.log(err));
//   };
//   const menuItems = (
//     <React.Fragment>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/appointment">Appointment</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       {user?.uid ? (
//         <>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <button onClick={handleLogOut}>Sign out</button>
//           </li>
//         </>
//       ) : (
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       )}
//     </React.Fragment>
//   );
//   return (
//     <div className="navbar bg-base-100 flex justify-between">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={1}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//             {menuItems}
//           </ul>
//         </div>

//         <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
//           <Lottie animationData={teeth} loop={true} className="w-10 h-10" />{" "}
//           Dentist-portal
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//       <label
//         htmlFor="dashboard-drawer"
//         tabIndex={2}
//         className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </label>
//     </div>
//   );
// };

// export default Header;
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
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        <Link to="/login">
          {/* className="nav-link btn-info px-3 py-1.5 rounded-md text-white flex
          justify-center gap-1" */}
          <PrimaryButton>
            {" "}
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
      <div className="max-w-7xl mx-auto">
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

        {open && (
          <div className="lg:hidden flex flex-col gap-4 pb-4 mt-2 animate-fadeIn">
            {menuItems}
          </div>
        )}
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
