// import React from 'react';

// const PrimaryButton = ({children}) => {
//     return (
//         <div>
//             <button className="btn btn-primary bg-gradient-to-r from-secondary to-info text-white">{children}</button>
//         </div>
//     );
// };

// export default PrimaryButton;

import React from "react";

const PrimaryButton = ({ children, variant = "solid" }) => {
  const baseClasses =
    "btn btn-primary px-6 py-2.5 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    solid:
      "bg-gradient-to-r from-secondary to-info text-white hover:opacity-90 shadow-md",
    outline:
      "border-2 border-info text-info bg-transparent hover:bg-info hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
