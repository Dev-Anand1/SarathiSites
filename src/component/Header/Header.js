// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`header-container ${isHomePage ? 'home-page' : ''}`}>
      <div className="header-buttons">
        <Link to="/Button" className="header-link">
          <button className="header-demo-button">Go to Demo page</button>
        </Link>
        <Link to="/ContactUs" className="header-link">
          <button className="header-contact-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
