import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Doctors", path: "/doctors" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
  
          setShowNavbar(false);
        } else {
        
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0 bg-gray-950" : "-translate-y-full "
      } `}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-8 w-full">
        <h2
          onClick={() => navigate("/")}
          className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-sky-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Medi<span className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Connect</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative py-1 cursor-pointer hover:text-primary ${
                  isActive ? "text-primary" : "text-gray-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <li>{item.label}</li>
                  <span
                    className={`absolute left-0 right-0 mx-auto w-3/5 h-0.5 bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </ul>

        <Button variant={"primary"} className="hidden md:block px-6 py-3">
          Create Account
        </Button>

  
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-gray-100" />
          </button>
        </div>

        {/* Mobile Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex justify-end items-start pt-20 z-20">
            <div className="bg-gray-950 w-2/4 rounded-lg shadow-lg p-6 mx-5 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-100"
              >
                <X className="w-6 h-6" />
              </button>

              <ul className="flex flex-col gap-5 text-lg font-medium">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary text-sm"
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>

              <Button variant={"primary"} className=" mt-6 py-3">
                Create Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
