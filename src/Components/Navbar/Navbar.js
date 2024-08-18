import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cards/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLoggedIn') === 'true';

  const handleHamburger = () => {
    setMenuOpen((Mopen) => !Mopen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between shadow-xl fixed w-full px-6 top-0 bg-white z-50">
      <div className="text-[35px] text-bold text-[#c72092]">
        WOW<span className="text-blue-700 underline">shoes</span>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-7">
          <li>
            <Link to="/" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/form" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <span className="text-2xl mr-6">
          <FontAwesomeIcon icon={faHeart} className="mr-4 hover:text-[#c72092]" />
          <Link to="/cart" className="relative">
            <FontAwesomeIcon icon={faCartShopping} className="hover:text-[#c72092]" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </span>
        <button
          className="bg-[#c72092] rounded-md text-white px-2 py-1 mr-4"
          onClick={handleLogin}
        >
          {isLogin ? 'LogOut' : 'LogIn'}
        </button>
      </div>
      <span
        className="md:hidden bg-gray-500 text-white px-4 py-[6px] fa-xl rounded-sm"
        onClick={handleHamburger}
      >
        <FontAwesomeIcon icon={!menuOpen ? faBars : faXmark} />
      </span>
      {menuOpen && (
        <div className="flex items-center justify-center absolute mt-[282px] bg-gray-200 w-full left-0">
          <ul className="flex-col">
            <li className="mb-3">
              <Link to="/" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/shop" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
                Shop
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/form" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
                Contact
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/blog" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
                Blog
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/faqs" className="hover:text-[#c72092] border-b-2 border-transparent hover:border-blue-700">
                FAQs
              </Link>
            </li>
            <li className="pb-4">
              <button
                className="bg-[#c72092] rounded-md text-white px-2 py-1 -ml-2"
                onClick={handleLogin}
              >
                {isLogin ? 'LogOut' : 'LogIn'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
