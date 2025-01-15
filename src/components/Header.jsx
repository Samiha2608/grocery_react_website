import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20 bg-opacity-70 backdrop-blur-md">
      <div className="text-2xl font-bold text-black">Logo</div>
      
      {/* Hamburger menu button for small screens */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <nav
        className={`flex-col md:flex-row md:static absolute top-16 left-0 w-full md:w-auto bg-black md:bg-transparent space-y-4 md:space-y-0 md:flex items-center md:space-x-4 transition-all duration-300 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {['Home', 'Store', 'Login', 'Contact Us', 'About Us'].map((tab) => (
          <NavLink
            key={tab}
            to={`/${tab.toLowerCase().replace(' ', '-')}`}
            className={({ isActive }) =>
              `text-white hover:text-gray-200 px-4 py-2 md:px-0 md:py-0 ${
                isActive ? 'border-b-2 border-yellow-300 text-yellow-300' : ''
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {tab}
          </NavLink>
        ))}
        <div className="relative flex items-center">
          <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
            <FaShoppingCart className="text-white text-2xl" />
          </NavLink>
          {itemCount > 0 && (
            <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {itemCount}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
