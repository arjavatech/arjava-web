import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/images/img/Arjava Logo.png" alt="Arjava" className="h-10 w-29" />
          </Link>
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-gray-700 hover:text-blue-900'}`}>Home</Link>
              <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-gray-700 hover:text-blue-900'}`}>About</Link>
              <Link to="/services" className={`text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-gray-700 hover:text-blue-900'}`}>Services</Link>
              <Link to="/projects" className={`text-sm font-medium transition-colors ${location.pathname === '/projects' ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-gray-700 hover:text-blue-900'}`}>Projects</Link>
              <Link to="/privacy-policy" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Privacy</Link>
            </div>
          </div>
          <Link to="/contact" className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">Contact</Link>
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full -translate-y-1"></span>
              <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full my-0.5 opacity-100"></span>
              <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full translate-y-1"></span>
            </div>
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
        <div className="px-6 py-4 space-y-2">
          <Link to="/" className={`block px-4 py-2 text-sm font-medium rounded-lg ${location.pathname === '/' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>Home</Link>
          <Link to="/about" className={`block px-4 py-2 text-sm font-medium rounded-lg ${location.pathname === '/about' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>About</Link>
          <Link to="/services" className={`block px-4 py-2 text-sm font-medium rounded-lg ${location.pathname === '/services' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>Services</Link>
          <Link to="/projects" className={`block px-4 py-2 text-sm font-medium rounded-lg ${location.pathname === '/projects' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>Projects</Link>
          <Link to="/privacy-policy" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Privacy</Link>
          <Link to="/contact" className="block px-4 py-2 text-sm font-medium bg-blue-900 text-white rounded-lg text-center">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;