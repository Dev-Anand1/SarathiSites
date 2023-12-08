// ContactUs.js
import React from 'react';
import '../contactUs/ContactUs.css';
import myImage from '../img/Untitled_design-removebg-preview.png';

function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="image-container">
          <img src={myImage} alt='image' />
        </div>
        <div className="info-container">
          <h className="logo">   सारथी Sites  </h>
          <h className="address">Website Creating Services</h>
          <h className="phone"> (+91) 7020 49 4920 + (+91) 9922 32 9866</h>
          <h className="email">WWW.SarathiSites@gmail.com</h>
          <h className="title">Contact Us Today for a free Consultantion</h>
          <h className="title01">Professional, Affordable, Tailored</h>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
