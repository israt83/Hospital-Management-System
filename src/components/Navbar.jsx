// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className="flex items-center justify-between text-base  py-4 mb-5">
//       <h2 onClick={() =>navigate('/')} className="text-3xl font-semibold text-primary">Medi<span >Connect</span></h2>
//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink
//           to="/"
          
//         >
//           <li className="py-1">Home</li>
//           <hr className="border-none outline-none h-0.5  w-3/5 m-auto bg-primary hidden"/>
//         </NavLink>
//         <NavLink
//           to="/doctors"
          
//         >
//           <li className="py-1">Doctors</li>
//           <hr className="border-none outline-none h-0.5  w-3/5 m-auto bg-primary hidden"/>
//         </NavLink>

//         <NavLink
//           to="/about"
          
//         >
//           <li className="py-1">About</li>
//           <hr className="border-none outline-none h-0.5  w-3/5 m-auto bg-primary hidden"/>
//         </NavLink>
//         <NavLink
//           to="/contact"
          
//         >
//           <li className="py-1">Contact</li>
//           <hr className="border-none outline-none h-0.5  w-3/5 m-auto bg-primary hidden"/>
//         </NavLink>
//       </ul>
//       <Button onclick={() => navigate("/login")} variant={"primary"} className=' py-3'>Create Account</Button>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="flex items-center justify-between py-4  w-full relative z-50">
      {/* Logo */}
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

      {/* Desktop Button */}
      <Button
        onClick={() => navigate("/login")}
        variant={"primary"}
        className="hidden md:block px-6 py-3"
      >
        Create Account
      </Button>

      {/* Mobile Menu Icon */}
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

            <Button
              onClick={() => { navigate("/login"); setIsOpen(false); }}
              variant={"primary"}
              className=" mt-6 py-3"
            >
              Create Account
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
