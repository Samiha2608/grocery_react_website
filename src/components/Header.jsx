import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-transparent p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20 bg-opacity-70 backdrop-blur-md">
      <div className="text-2xl font-bold text-black">Logo</div>
      <nav className="flex items-center space-x-4">
        {['Home', 'Store', 'Login', 'Contact Us', 'About Us'].map((tab) => (
          <NavLink
            key={tab}
            to={`/${tab.toLowerCase().replace(' ', '-')}`}
            className={({ isActive }) =>
              `text-white hover:text-gray-200 ${
                isActive ? 'border-b-2 border-yellow-300 text-yellow-300' : ''
              }`
            }
          >
            {tab}
          </NavLink>
        ))}
        <div className="relative flex items-center">
          <NavLink to="/cart">
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
