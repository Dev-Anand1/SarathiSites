// App.js
import React from 'react';
import './Demo22.css';

function App() {
  return (
    <div className="Demo22-app">
      <header className="Demo22-header">
        <h1>Jujutsu Kaisen </h1>
        <nav className="Demo22-nav">
          <ul>
            <li>Demo22-explore</li>
            <li>Demo22-media</li>
            <li>Demo22-world</li>
            <li>Demo22-characters</li>
          </ul>
        </nav>
      </header>
      <main className="Demo22-main-content">
        <div className="Demo22-intro">
          <div className="Demo22-jujutsu-main">
            <h2>Welcome to the Jujutsu Kaisen </h2>
            <p>
              A community created by the fans, for the fans, dedicated to housing everything about Jujutsu Kaisen created by Gege Akutami.
            </p>
            <p>
              Our goal is to become the best source of information on the series.
            </p>
            <p>Please help us by creating or editing any of our articles! We currently have 57,579 edits to 901 articles and 5,228 images on this wiki.</p>
          </div>
        </div>
        <div className="Demo22-story">
          <h2>Story</h2>
          <p>
            The story of Jujutsu Kaisen is set in a world where Cursed Spirits feed on unsuspecting humans and fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about.
          </p>
          <p>
            Should any curse consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural! Read More
          </p>
        </div>
        <div className="Demo22-characters">
          <h2>Characters</h2>
          <ul>
            <li>Demo22-Yuji Itadori</li>
            <li>Demo22-Megumi Fushiguro</li>
            <li>Demo22-Nobara Kugisaki</li>
            {/* Add more characters as needed */}
          </ul>
        </div>
        <div className="Demo22-announcements">
          <h2>Announcements</h2>
          <p>December 3, 2023 - Chapter 244 has officially been released.</p>
          <p>November 30, 2023 - Episode 43 has officially been released.</p>
          <p>November 26, 2023 - Jujutsu Kaisen is featured on the Cover of Weekly Shonen JUMP and the JUMP GIGA 2023 Autumn Edition.</p>
          {/* Add more announcements as needed */}
        </div>
      </main>
      <footer className="Demo22-footer">
        <p>© 2023 . All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
