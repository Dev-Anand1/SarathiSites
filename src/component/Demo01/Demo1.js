// Import React and any necessary dependencies
import React from 'react';
import './Demo1.css'; // Import your CSS file

// Create the functional component
function Demo01 () {
  return (
    <>
      <header className="demo-1-header">
        <span>
          <img className="demo-1-header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaaLSM0dkOWaJ1NseGhAMp049j9PlZQe-AA&usqp=CAU" alt="logo" width="50px" />
        </span>
        <nav className="demo-1-cta-button">
          <ul className="demo-1-nav-links">
            <li className="demo-1-nav-link-home"> Home</li>
            <li className="demo-1-nav-link"><a href="#">About Us</a></li>
            <li className="demo-1-nav-link"><a href="#">Contact</a></li>
            <li className="demo-1-nav-link"><a href="#">Buy</a></li>
          </ul>
        </nav>
        <div className="demo-1-cta-button, demo-1-cta-button1 ">
          <button id="demo-1-book-button">Book Demo</button>
          <button id="demo-1-pre-order-button">Pre order</button>
        </div>
      </header>

      <main className="demo-1-main">
        <article className="demo-1-main-text">
          <div className="demo-1-art-text">
            <h1>Let’s drive the <br />future</h1>
            <h3>We don’t need gas. We don’t create<br /> pollution. And we don’t waste your money.</h3>
            <span className="demo-1-main-button">
            <div className="demo-1-cta-button, demo-1-cta-button1 ">
          <button id="demo-1-book-button">Book Demo</button>
          <button id="demo-1-pre-order-button">Pre order</button>
        </div>
            </span>
          </div>
          <div className="demo-1-main-img">
            <img src="data:image/jpeg;base64,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" alt="photo" width="100%" />
          </div>
        </article>
      </main>

      <section className="demo-1-alt-section">
        <div className="demo-1-form-section">
          <div className="demo-1-video-section">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU" alt="second-img" width="104%" />
          </div>
          <form>
            <span className="demo-1-form-text">
              <h3>Contact us</h3>
              <p>Our friendly team would love to hear from you.</p>
            </span>
            <div className="demo-1-user-name">
              <div className="demo-1-form-input">
                <label htmlFor="demo-1-first-name">First name </label>
                <input id="demo-1-first-name" type="text" placeholder="First name" />
              </div>
              <div className="demo-1-form-input">
                <label htmlFor="demo-1-last-name">Last name</label>
                <input id="demo-1-last-name" type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="demo-1-form-input">
              <label htmlFor="demo-1-email">Email </label>
              <input id="demo-1-email" type="email" placeholder="www.you@company.com" />
            </div>
            <div className="demo-1-form-input">
              <label htmlFor="demo-1-phone" > Phone number </label>
              <input id="demo-1-phone" type="tel" placeholder="+91 9876 54 3210" />
            </div>
            <div className="demo-1-form-input">
              <label htmlFor="demo-1-massage">Massage</label>
              <textarea rows="5" cols="55" id="demo-1-massage"> Include your Massage...</textarea>
            </div>
            <div className="demo-1-input-check">
              <input type="checkbox" id="demo-1-checkbox" />
              <label htmlFor="demo-1-checkbox">You agree to our friendly <a href="#"><span className="demo-1-pri">
                privacy policy.</span>
              </a></label>
            </div>
            <div className="demo-1-form-input">
              <button type="submit" className="demo-1-submit-button">Send massage</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="demo-1-footer">
        <div className="demo-1-footer-logo">
          <img src="./m3-head-logo.png" alt="footer logo" />
        </div>
        <div className="demo-1-jama">
          <div className="demo-1-copyright">
            <span>
              © 2022 Workflow, Inc. All rights reserved.
            </span>
          </div>
          <div className="demo-1-footer-social">
            <img src="./insta-icon (1).svg" alt="insta logo" />
            <img src="./fb-icon.svg" alt="fb logo" />
            <img src="./twitter-icon.svg" alt="twi logo" />
            <img src="./dribble-icon.svg" alt="dri logo" />
          </div>
        </div>
      </footer>
    </>
  );
}

// Export the component for use in other files
export default Demo01;
