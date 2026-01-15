import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hero-bg.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#132347]">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-20 object-cover rounded-md"
            />
          </Link>
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:bg-[#FF9A4A] px-3 py-2 rounded-md transition
             active:bg-[#FF9A4A] "
          >
            Daniel Akanji
          </Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/about"
            className="text-white hover:text-[#FF9A4A] px-3 py-2 rounded-md transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-[#FF9A4A] px-3 py-2 rounded-md transition"
          >
            Contact
          </Link>

          <Link
            to="/book"
            className="px-6 py-2 rounded-md font-medium bg-[#FF9A4A] text-[#132347] hover:opacity-40 transition"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      
      <div
        className={`md:hidden bg-[#132347] px-8 pb-6 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4">
        
          <Link
            to="/about"
            onClick={closeMenu}
            className="
              text-white px-4 py-3 rounded-md transition  active:bg-[#FF9A4A] focus:bg-[#FF9A4A] text-center"
          >
            About
          </Link>


          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white px-4 py-3 rounded-md transition  active:bg-[#FF9A4A] focus:bg-[#FF9A4A] text-center"
          >
            Contact
          </Link>

          <Link
            to="/book"
            onClick={closeMenu}
            className="px-6 py-3 rounded-md font-medium bg-[#FF9A4A] text-[#132347] hover:opacity-40 transition text-center"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
