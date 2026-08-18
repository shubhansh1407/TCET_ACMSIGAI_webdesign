import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "TEAM", path: "/team" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PUBLICATIONS", path: "/publications" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-50">
      <nav className="bg-white border-3 border-black rounded-2xl shadow-brutal p-4 flex justify-between items-center relative">
        
        {/* Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-retroPink border-2 border-black px-2 py-1 rounded-lg shadow-brutal-sm group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-brutal transition-all duration-200">
            <span className="font-black text-xl leading-none">TCET</span>
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tighter uppercase">ACM SIGAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-3 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 border-2 border-black rounded-xl font-bold uppercase tracking-tight transition-all duration-200 ${
                  isActive
                    ? "bg-retroYellow shadow-brutal-sm -translate-y-[2px] -translate-x-[2px]"
                    : "bg-transparent hover:bg-retroBg hover:shadow-brutal-sm hover:-translate-y-[2px] hover:-translate-x-[2px]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border-2 border-black rounded-xl bg-retroYellow shadow-brutal-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal transition-all duration-200 flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-[110%] left-0 right-0 bg-white border-3 border-black rounded-2xl shadow-brutal flex flex-col p-4 z-50 gap-3 lg:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-2 border-black rounded-xl font-bold uppercase text-center transition-all duration-200 ${
                    isActive
                      ? "bg-retroYellow shadow-brutal-sm -translate-y-[2px] -translate-x-[2px]"
                      : "bg-retroBg hover:bg-retroPink hover:shadow-brutal-sm hover:-translate-y-[2px] hover:-translate-x-[2px]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};
