import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const activeClass = "text-red-500 font-semibold";
  const normalClass = "text-gray-800 hover:text-red-500 transition";

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClass : normalClass;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gradient-main font-serif"
        >
          Fashionista
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/collections" className={linkClasses}>
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex items-center justify-center w-8 h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute left-0 top-full w-full bg-white shadow-lg flex flex-col items-center space-y-20 py-6 h-[100vh]">
              <li>
                <NavLink
                  to="/"
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collections"
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
