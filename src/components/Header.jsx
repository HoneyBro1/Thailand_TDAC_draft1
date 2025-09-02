import React from 'react';
// Import Link and NavLink for routing
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top red banner */}
      <div className="bg-red-800 text-white text-center py-2 text-sm">
        <p>Mandatory for all travelers wishing to enter Thailand</p>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo and Site Title on the left */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://flagcdn.com/w40/th.png" 
              alt="Thailand Flag" 
              className="w-8 h-auto"
            />
            <span className="text-xl font-bold text-gray-800">
              Thailand TDAC
            </span>
          </Link>

          {/* Navigation Buttons on the right */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/check-status"
              className="px-5 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Check Status
            </NavLink>
            <NavLink
              to="/apply"
              className="px-5 py-2 text-sm font-semibold text-white bg-red-800 rounded-md hover:bg-red-900 transition-colors"
            >
              Apply For Thailand Digital Arrival Card
            </NavLink>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;