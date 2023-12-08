// Home.js
import React from 'react';
import './Demo7.css';

const Home = () => {
  return (
    <div className="body01" >
    <div className="home-container">
      <header>
        <div className="header-content">
          <div className="logo">
            <img src="https://imgmedia.lbb.in/media/2023/04/642e74453f755b46b63c6225_1680766021648.jpg" alt="Endless Pools Logo" />
          </div>
          <div className="contact-info">
            <p>(888) 712-3217</p>
          </div>
          <nav>
            <a href="/">Build A Pool</a>
            <a href="/gallery">Gallery</a>
            <a href="/inspiration">Inspiration Guide</a>
            <a href="/buy">Where To Buy</a>
          </nav>
        </div>
      </header>

      <main className="main-section">


      <section className="coaching-section">
          <h2>Free your coaching from limitations.</h2>
          <p>
            Swim coaches have always worked miracles. They manage to develop skills in athletes that they view only from a distance, with their strokes partially obscured by water.
            But coaches don’t have to settle for those limitations. When you shift to Endless Pools® coaching, you have better visibility and a faster, more effective way to coach your swimmers.
          </p>
          <p>Learn how you can <a href="/coach-at-home">Coach At Home</a></p>
          <p>Blow traditional swim training out of the water with maximum visibility.</p>
          <p>The Endless Pools current transforms swimming for both the coach and the athlete. Coaches get close enough to easily see every detail, even underwater. Swimmers gain unprecedented opportunities to explore and discover their skills. With the help of our underwater mirror, swimmers can connect what they feel with what they see. Using that combined physical and visual feedback, they can expand their capabilities and elevate their swim training to a whole new level.</p>

          {/* Expanded content */}
          <p>Discover the endless possibilities of our pools and revolutionize your approach to swim coaching. Whether you're a professional coach or a beginner, Endless Pools offers a unique and effective environment for developing and enhancing swimming skills.</p>

          {/* Image */}
          <img src="https://www.compass-pools.co.uk/wp-content/uploads/2020/02/stock-2-1920x1080-copy.jpeg" alt="Swimming Pool" className="pool-image" />

          {/* More content */}
          <p>Explore our state-of-the-art swimming pools designed to meet the needs of swimmers at all levels. Our pools are equipped with the latest technology to provide a seamless and enjoyable swimming experience.</p>

          {/* Buttons */}
          <div className="button-container">
            <button className="explore-button">Explore Now</button>
            <button className="learn-more-button">Learn More</button>
          </div>
        </section>

        <section className="resources-section">
          <h2>RESOURCES</h2>
          <p>See how your Endless Pools income may offset your payments!</p>
          <p>With credit approval, get started today with loan and lease options.</p>
          <p>Ready to get started? Discover how a customized pool solution can boost your customer satisfaction and your bottom line.</p>
        </section>


        <section className="coaching-section">
          <h2>Free your coaching from limitations.</h2>
          <p>
            Swim coaches have always worked miracles. They manage to develop skills in athletes that they view only from a distance, with their strokes partially obscured by water.
            But coaches don’t have to settle for those limitations. When you shift to Endless Pools® coaching, you have better visibility and a faster, more effective way to coach your swimmers.
          </p>
          <p>Learn how you can <a href="/coach-at-home">Coach At Home</a></p>
          <p>Blow traditional swim training out of the water with maximum visibility.</p>
          <p>The Endless Pools current transforms swimming for both the coach and the athlete. Coaches get close enough to easily see every detail, even underwater. Swimmers gain unprecedented opportunities to explore and discover their skills. With the help of our underwater mirror, swimmers can connect what they feel with what they see. Using that combined physical and visual feedback, they can expand their capabilities and elevate their swim training to a whole new level.</p>

          {/* Expanded content */}
          <p>Discover the endless possibilities of our pools and revolutionize your approach to swim coaching. Whether you're a professional coach or a beginner, Endless Pools offers a unique and effective environment for developing and enhancing swimming skills.</p>

          {/* Button */}
          <button className="explore-button">Explore Now</button>
        </section>

        <section className="resources-section">
          <h2>RESOURCES</h2>
          <p>See how your Endless Pools income may offset your payments!</p>
          <p>With credit approval, get started today with loan and lease options.</p>
          <p>Ready to get started? Discover how a customized pool solution can boost your customer satisfaction and your bottom line.</p>
        </section>
      </main>

      <footer>
        <div className="social-icons">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Pinterest</a>
          <a href="#" className="social-icon">Houzz</a>
          <a href="#" className="social-icon">YouTube</a>
        </div>
        <div className="footer-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;
