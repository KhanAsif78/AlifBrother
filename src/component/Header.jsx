import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with animation */}
        <div className="flex items-center">
          <img
            src="./image/simg.png"
            alt="Logo"
            className="h-10 w-10 animate-bounce"
          />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
            AlifBrother
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 relative`}
        >
          <a
            href="#home"
            className="block md:inline-block hover:text-blue-400 transition-colors duration-300 py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline-block hover:text-blue-400 transition-colors duration-300 py-2 md:py-0"
          >
            About
          </a>

          {/* Dropdown Menu for Services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="block md:inline-block hover:text-blue-400 transition-colors duration-300 focus:outline-none py-2 md:py-0"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg">
                <a
                  href="#web-development"
                  className="block px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                >
                  Web Development
                </a>
                <a
                  href="#mobile-apps"
                  className="block px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                >
                  Mobile Apps
                </a>
                <a
                  href="#seo"
                  className="block px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                >
                  SEO
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="block md:inline-block hover:text-blue-400 transition-colors duration-300 py-2 md:py-0"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
