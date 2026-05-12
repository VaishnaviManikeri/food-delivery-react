import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/food-del-assets/assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <Link to='/' className='logo-link'>
        <img src={assets.logo} alt="logo" className='logo' />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div 
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop Navigation */}
      <ul className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              closeMobileMenu();
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
              closeMobileMenu();
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              closeMobileMenu();
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
              closeMobileMenu();
            }}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search" className='search-icon' />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
