import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import LogoName from "../Components/LogoName";
import { menuItemsSideBar } from "./Jsondata";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 flex flex-col">
      <div className="p-5">
        <LogoName type="dashboard" />

        <nav className="space-y-1 pt-6">
          {menuItemsSideBar.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#42c4c0] font-medium shadow-sm"
                      : "text-gray-600 hover:bg-blue-50 hover:text-gray-900"
                  }`
                }>
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={
                        isActive
                          ? "text-[#42c4c0]"
                          : "text-gray-500 hover:text-gray-900"
                      }
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-5 border-t">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
