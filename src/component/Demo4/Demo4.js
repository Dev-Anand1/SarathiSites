import React from 'react';
import './Demo4.css';

const Demo = () => {
  const validateForm = () => {
    // Reset previous error messages
    document.getElementById('demo-4-firstNameError').textContent = '';
    document.getElementById('demo-4-lastNameError').textContent = '';
    document.getElementById('demo-4-emailError').textContent = '';
    document.getElementById('demo-4-phoneError').textContent = '';
    document.getElementById('demo-4-messageError').textContent = '';
    document.getElementById('demo-4-privacyPolicyError').textContent = '';

    // Get form values
    const firstName = document.getElementById('demo-4-firstName').value;
    const lastName = document.getElementById('demo-4-lastName').value;
    const email = document.getElementById('demo-4-email').value;
    const phone = document.getElementById('demo-4-phone').value;
    const message = document.getElementById('demo-4-message').value;
    const privacyPolicy = document.getElementById('demo-4-privacyPolicy').checked;

    // Validate form fields
    if (firstName.trim() === '') {
      document.getElementById('demo-4-firstNameError').textContent = 'First name is required';
    }

    if (lastName.trim() === '') {
      document.getElementById('demo-4-lastNameError').textContent = 'Last name is required';
    }

    if (email.trim() === '') {
      document.getElementById('demo-4-emailError').textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
      document.getElementById('demo-4-emailError').textContent = 'Invalid email address';
    }

    if (phone.trim() === '') {
      document.getElementById('demo-4-phoneError').textContent = 'Phone number is required';
    }

    if (message.trim() === '') {
      document.getElementById('demo-4-messageError').textContent = 'Message is required';
    }

    if (!privacyPolicy) {
      document.getElementById('demo-4-privacyPolicyError').textContent = 'You must agree to the privacy policy';
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    
    <>
    
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/activity">Our Activity</a>
          <a href="/plan">Future Plan</a>
          <a href="/events">Our Events</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </header>

      <main>
        <section className="demo-4-middle">
          <h1>Let’s drive the future</h1>
          <p>We don’t need gas. We don’t create pollution. And we don’t waste your money.</p>
          <button>Free Demo</button>
          <button>Pre-order now</button>
          <img src="" alt="photo" />
          <img src="" alt="second-img" />
          <section className="demo-4-contact-us">
            <h2>Contact us</h2>
            <p>Our friendly team would love to hear from you.</p>
            {/* Include your form here */}
          </section>
        </section>

        <main>
          <div className="demo-4-middle">
            <h1>Let’s drive the future</h1>
            <p>We don’t need gas. We don’t create pollution. And we don’t waste your money.</p>
            <ul>
              <li>Free Demo</li>
              <li>Pre-order now</li>
              <li>Photo</li>
              <li>Second Image</li>
            </ul>
            <div className="demo-4-button-container">
              <button>Contact us</button>
            </div>
            <div className="demo-4-contact-us">
              <h2>Contact Us</h2>
              <form>
                {/* Your form elements with updated classnames */}
              </form>
            </div>
          </div>
        </main>

      </main>

      <footer>
        <img src="footer logo" alt="footer logo" />
        <p>&copy; 2022 Workflow, Inc. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Demo;
