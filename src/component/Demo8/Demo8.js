// src/components/Demo8.js
import React from 'react';
import TypeWriter from './TypeWriter';
import './Demo8.css';

function Demo8() {
  return (
    <div className="Demo8">
      <header className="Demo8-header">
        <h1>Welcome to our Swimming Pool</h1>
        <TypeWriter text="Dive into the Fun and Fitness" />
      </header>

      <nav className="Demo8-nav">
        <ul>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#training">TRAINING</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#b-stock">B-STOCK</a></li>
          <li><a href="#shipping">SHIPPING</a></li>
          <li><a href="#videos">VIDEOS</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#cart">CART</a></li>
          <li><a href="#english">ENGLISH</a></li>
        </ul>
      </nav>

      <section className="Demo8-PoolTrainer">
        <div className="Demo8-section-image">
          <img src="https://phinizycenter.org/wp-content/uploads/2016/08/8116040042_b10d9ab8c7_o.jpg" alt="Section Image 1" />
        </div>

        <div className="Demo8-section-content">
          <h2>ENDLESS SWIMMING AND TRAINING</h2>
          <p>
            NO MATTER WHICH POOL! The Pooltrainer is the innovation for swimming training in your own pool.
            The Pooltrainer can be mounted to any pool within about 30 minutes. Once installed, the pool trainer is ready to use.
          </p>
          <p>Simply strap on the hip belt and off you go.</p>
          <p>
            Whether effective swim training to train endurance, aqua-walking, or technique training, swimming is one of the healthiest sports.
            Unlike other sports, the joints and discs are not loaded during swimming. The back muscles are additionally strengthened.
            Not without reason swimming therapy is so successful. The special feature of the Pooltrainer: the hip belt supports by raising the pelvis the right swimming position.
            This will help you avoid a wrong hollow back posture that can otherwise be very painful.
          </p>
        </div>
      </section>

      <section className="Demo8-AnotherSection">
        <div className="Demo8-section-image">
          <img src="https://images.hindustantimes.com/img/2021/09/17/550x309/db469b3a-17df-11ec-872f-dc0e4bb8a7cd_1631901205527.jpg" alt="Section Image 2" />
        </div>

        <div className="Demo8-section-content">
          <h2>ENHANCE YOUR SWIMMING EXPERIENCE</h2>
          <p>
            Take your swimming to the next level with our Pooltrainer. Whether you're a professional athlete or just starting, our innovative training equipment is designed for everyone.
          </p>
          <p>
            Our Pooltrainer utilizes advanced technology to provide a unique and effective swimming experience. It's not just about exercise; it's about enjoyment and achieving your fitness goals.
          </p>
          <p>
            Join us on this journey towards a healthier lifestyle. Dive in, have fun, and stay fit!
          </p>
        </div>
        <TypeWriter text="Dive into the Fun and Fitness" />
      </section>

      <footer className="Demo8-footer">
        <p>Contact us at: example@email.com</p>
      </footer>
    </div>
  );
}

export default Demo8;
