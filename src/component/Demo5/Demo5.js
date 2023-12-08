import React from 'react';
import './Demo5.css';

const YourNewDemo = () => {
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
        <section className="Demo5-welcome">
          <div className="Demo5-welcome-content">
            <h1>Welcome to Our Website</h1>
            <p>Explore the future with us!</p>
            <button>Learn More</button>
          </div>
        </section>

        <section className="Demo5-features">
          <h2>Key Features</h2>
          <div className="Demo5-feature-list">
            <div className="Demo5-feature">
              <h3>Environmentally Friendly</h3>
              <p>Our solution is eco-friendly and sustainable.</p>
            </div>
            <div className="Demo5-feature">
              <h3>Cost-Effective</h3>
              <p>Save money while contributing to a cleaner future.</p>
            </div>
            <div className="Demo5-feature">
              <h3>Efficient Technology</h3>
              <p>Utilizing cutting-edge technology for optimal results.</p>
            </div>
          </div>
        </section>

        <section className="Demo5-testimonials">
          <h2>What Our Customers Say</h2>
          <div className="Demo5-testimonial-list">
            <div className="Demo5-testimonial">
              <p>"Fantastic service and a great initiative towards a green future."</p>
              <span>- John Doe</span>
            </div>
            <div className="Demo5-testimonial">
              <p>"Highly impressed with the innovation and commitment to sustainability."</p>
              <span>- Jane Smith</span>
            </div>
          </div>
        </section>

        <section className="Demo5-contact-us">
          <h2>Contact Us</h2>
          <p>Have questions or want to get involved? Contact our team!</p>
          {/* Include your contact form here */}
        </section>
      </main>

      <footer>
        <img src="your-footer-logo" alt="footer logo" />
        <p>&copy; 2022 Your Company, Inc. All rights reserved.</p>
        <div className="Demo5-social-icons">
          {/* Add social media icons or links here */}
          <span>Follow us:</span>
          <a href="#" className="Demo5-social-icon">Instagram</a>
          <a href="#" className="Demo5-social-icon">Twitter</a>
          <a href="#" className="Demo5-social-icon">Facebook</a>
        </div>
      </footer>
    </>
  );
};

export default YourNewDemo;
