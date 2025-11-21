import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // const location = useLocation();
  // if (loading) {
  //     return <DotLoader
  //     color={'#0a2159'}
  //     loading={loading}
  //     size={80}
  //     aria-label="Loading Spinner"
  //     data-testid="loader"
  //   />
  // }
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
