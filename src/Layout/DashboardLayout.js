import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import { jwtDecode } from "jwt-decode";
const DashboardLayout = () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  console.log(decoded.role);
  console.log(decoded._id);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role={decoded.role} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
