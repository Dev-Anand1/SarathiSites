// App.js

import React from 'react';

const App = () => {
  const styles = `
    /* Add your custom styles here */
    .demo-10-app-container {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Header Styles */
    .demo-10-header {
      background-color: #343a40;
      padding: 20px;
      color: white;
      text-align: center;
    }

    .demo-10-nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }

    .demo-10-nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
    }

    /* Main Content Styles */
    .demo-10-main-content {
      padding: 20px;
    }

    /* Hero Section Styles */
    .demo-10-hero-section {
      text-align: center;
      color: #007bff;
      margin-bottom: 40px;
    }

    .demo-10-hero-section h2 {
      color: #0056b3;
      margin-bottom: 10px;
    }

    .demo-10-hero-section p {
      font-size: 1.2em;
      margin-bottom: 20px;
    }

    .demo-10-hero-section button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      border: none;
    }

    .demo-10-hero-section button:hover {
      background-color: #0056b3;
    }

    /* Features Section Styles */
    .demo-10-features-section {
      margin-top: 40px;
    }

    .demo-10-features-section h2 {
      color: #007bff;
      margin-bottom: 20px;
    }

    .demo-10-features-section ul {
      list-style: none;
      padding: 0;
    }

    .demo-10-features-section li {
      background-color: #007bff;
      color: white;
      padding: 10px;
      margin-bottom: 5px;
    }

    /* Swimming Section Styles */
    .demo-10-swimming-section {
      margin-top: 40px;
    }

    .demo-10-swimming-section h2 {
      color: #007bff;
      margin-bottom: 20px;
    }

    .demo-10-swimming-section p {
      font-size: 1.2em;
      margin-bottom: 20px;
    }

    /* Coach Section Styles */
    .demo-10-coach-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    .demo-10-coach-info {
      flex: 1;
      margin-right: 20px;
    }

    .demo-10-coach-info h3 {
      color: #007bff;
    }

    .demo-10-coach-info p {
      font-size: 1.1em;
    }

    .demo-10-coach-images {
      flex: 1;
      display: flex;
      gap: 10px;
    }

    .demo-10-coach-images img {
      max-width: 100%;
      border-radius: 5px;
    }

    /* Footer Styles */
    .demo-10-footer {
      background-color: #343a40;
      padding: 20px;
      text-align: center;
      color: white;
      margin-top: 40px;
    }

    .demo-10-footer p {
      margin: 0;
    }
  `;

  return (
    <div>
      <style>{styles}</style>

      <header className="demo-10-header">
        <h1>सारथी Sites</h1>
        <nav className="demo-10-nav">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/contact" className="text-white">Contact</a>
        </nav>
      </header>

      <main className="demo-10-main-content">
        <section className="demo-10-hero-section">
          <h2>Welcome to our React Website!</h2>
          <p>Explore the power of React for building dynamic web applications.</p>
          <button className="btn btn-primary">Learn More</button>
        </section>

        <section className="demo-10-features-section">
          <h2>Key Features</h2>
          <ul>
            <li>सारथी Sites</li>
            <li>Virtual DOM for Efficient Updates</li>
            <li>Declarative UI Design</li>
            <li>Component Reusability</li>
          </ul>
        </section>

        <section className="demo-10-swimming-section">
          <h2>Swimming Programs</h2>
          <p>
            Lap swimming, water aerobics, strength and endurance training sessions,
            breathing exercises, hydrotherapy, water polo, and aqua basketball shall keep you in the water for longer.
          </p>

          <div className="demo-10-coach-section">
            <div className="demo-10-coach-info">
              <h3>Ajinkya Taru</h3>
              <p>
                Head Coach – Swimming<br />
                Vice President – Swimming Pool Association Pune (SPAP)<br />
                20+ Year Experience in Swimming Coaching
              </p>
            </div>
            <div className="demo-10-coach-images">
              <img src="ajinkya_taru_image1.jpg" alt="Ajinkya Taru Image 1" />
              <img src="ajinkya_taru_image2.jpg" alt="Ajinkya Taru Image 2" />
            </div>
          </div>

          {/* Additional coaches */}
          <div className="demo-10-coach-section">
            <div className="demo-10-coach-info">
              <h3>Sagar Sitapkar</h3>
              <p>
                Head Coach – Swimming<br />
                L.S.S. (Rashtriya Life Saving Society of India) Certified Lifeguard<br />
                National Player of Master’s Championship
              </p>
            </div>
            <div className="demo-10-coach-images">
              <img src="sagar_sitapkar_image1.jpg" alt="Sagar Sitapkar Image 1" />
              <img src="sagar_sitapkar_image2.jpg" alt="Sagar Sitapkar Image 2" />
            </div>
          </div>

          {/* Add similar sections for other coaches with their images and information */}
        </section>
      </main>

      <footer className="demo-10-footer">
        <p>&copy; 2023 React Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
