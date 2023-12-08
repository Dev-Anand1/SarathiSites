// Demo.js
import React, { useEffect } from 'react';
import './Demo6.css';

const Demo = () => {
  useEffect(() => {
    // Add a class to the body when the component mounts
    document.body.classList.add('demo-body');
    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('demo-body');
    };
  }, []);

  const [currentImage, setCurrentImage] = React.useState(0);

  const images = [
    "https://timelinecovers.pro/facebook-cover/download/Ghost-In-The-Shell-cyberpunk-facebook-cover.jpg",
      "https://timelinecovers.pro/facebook-cover/download/video-game-cyberpunk-2077-facebook-cover.jpg",

      "https://timelinecovers.pro/facebook-cover/download/computer-monkey-facebook-cover.jpg",
  ];

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage < images.length - 1 ? prevImage + 1 : 0));
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
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Explore the future with us!</p>
            <button>Learn More</button>
          </div>
        </section>

        <section className="image-slider">
          <button onClick={handlePrevImage} className="slider-button">
            &lt;
          </button>
          <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
          <button onClick={handleNextImage} className="slider-button">
            &gt;
          </button>
        </section>

        {/* Add other sections as needed */}
      </main>

      <footer>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU" alt="footer logo" />
        <p>&copy; 2023 Sarthi, Inc. All rights reserved.</p>
        <div className="social-icons">
          {/* Add social media icons or links here */}
          <span>Follow us:</span>
          <a href="#" className="social-icon">
            Instagram
          </a>
          <a href="#" className="social-icon">
            Twitter
          </a>
          <a href="#" className="social-icon">
            Facebook
          </a>
        </div>
      </footer>
    </>
  );
};

export default Demo;
