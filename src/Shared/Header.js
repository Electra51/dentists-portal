import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { LogIn, X, Menu } from "lucide-react";
import PrimaryButton from "../Components/PrimaryButton";
import LogoName from "../Components/LogoName";
import { logout } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const NavItems = React.memo(({ user, pathname, handleLogOut }) => {
  return (
    <>
      <Link
        to="/"
        className={`nav-link relative pb-1 group ${
          pathname === "/" ? "active-nav" : ""
        }`}>
        Home
      </Link>

      <Link
        to="/appointment"
        className={`nav-link relative pb-1 group ${
          pathname === "/appointment" ? "active-nav" : ""
        }`}>
        Appointment
      </Link>

      <Link
        to="/about"
        className={`nav-link relative pb-1 group ${
          pathname === "/about" ? "active-nav" : ""
        }`}>
        About
      </Link>

      {user?.uid ? (
        <>
          <Link
            to="/dashboard"
            className={`nav-link relative pb-1 group ${
              pathname === "/dashboard" ? "active-nav" : ""
            }`}>
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
});

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = useCallback(() => {
    logOut()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }, [logOut, dispatch, navigate]);

  useEffect(() => {
    let timeout = null;

    const handleScroll = () => {
      if (timeout) return;

      timeout = setTimeout(() => {
        const isScrolled = window.scrollY > 10;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
        timeout = null;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = useMemo(
    () => (
      <NavItems
        user={user}
        pathname={location.pathname}
        handleLogOut={handleLogOut}
      />
    ),
    [user, location.pathname, handleLogOut]
  );

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 border-b border-gray-200 shadow-sm backdrop-blur-md"
          : "bg-[#F5F6FF] backdrop-blur-xl"
      }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-1.5">
        <div className="flex items-center justify-between h-16">
          <LogoName />
          <nav className="hidden lg:flex items-center gap-8">{menuItems}</nav>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setOpen((prev) => !prev)}>
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col gap-4 py-4">{menuItems}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
