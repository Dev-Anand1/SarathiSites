// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../img/Untitled_design-removebg-preview.png';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={myImage} alt="image" />
      </div>
      <div className="home-Button">
      <Link to="/Button">
        <button className="demo-button">See Demo</button>
      </Link>
      <Link to="/ContactUs">
        <button className="contact-button">Contact Us</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
