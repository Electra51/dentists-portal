import React, { useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoName from "../Components/LogoName";
import { adminMenuItems, dentistMenuItems, patientMenuItems } from "./Jsondata";
import { logout } from "../redux/slice/authSlice";
import { AuthContext } from "../Contexts/AuthProvider";
import { ROLES } from "../Constatnts/roles";

const Sidebar = ({ role }) => {
  console.log("role", role);

  const { logOut } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getMenuItems = useCallback(() => {
    console.log("Role received:", role);

    switch (role) {
      case ROLES.PATIENT:
        return patientMenuItems;
      case ROLES.ADMIN:
        return adminMenuItems;
      case ROLES.DENTIST:
      default:
        return dentistMenuItems;
    }
  }, [role]);

  const getColorScheme = useCallback(() => {
    switch (role) {
      case ROLES.PATIENT:
        return {
          active: "bg-green-50 text-green-600",
          hover: "hover:bg-green-50",
          iconActive: "text-green-600",
        };
      case ROLES.ADMIN:
        return {
          active: "bg-purple-50 text-purple-600",
          hover: "hover:bg-purple-50",
          iconActive: "text-purple-600",
        };
      case ROLES.DENTIST:
      default:
        return {
          active: "bg-blue-50 text-[#42c4c0]",
          hover: "hover:bg-blue-50",
          iconActive: "text-[#42c4c0]",
        };
    }
  }, [role]);

  const handleLogOut = useCallback(() => {
    logOut()
      .then(() => {
        dispatch(logout());
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  }, [logOut, dispatch, navigate]);

  const menuItems = getMenuItems();
  const colors = getColorScheme();

  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 flex flex-col">
      <div className="p-5">
        <LogoName type="dashboard" />

        <nav className="space-y-1 pt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path.endsWith("/dashboard")}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? `${colors.active} font-medium shadow-sm`
                      : `text-gray-600 ${colors.hover} hover:text-gray-900`
                  }`
                }>
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={
                        isActive
                          ? colors.iconActive
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
        <button
          className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200"
          onClick={handleLogOut}
          aria-label="Logout">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
