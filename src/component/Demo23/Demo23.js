// NarutoWiki.js

import React from 'react';
import './Demo23.css';

const NarutoWiki = () => {
  return (
    <div className="Demo23-naruto-container">
      <header className="Demo23-naruto-header">
        <h1>Narutopedia</h1>
        <nav className="Demo23-naruto-nav">
          <ul>
            <li>EXPLORE</li>
            <li>SERIES INFO</li>
            <li>SETTING</li>
            <li>WIKI ACTIVITY</li>
            <li>Home</li>
            <li>VIEW SOURCE</li>
          </ul>
        </nav>
      </header>

      <main className="Demo23-naruto-main">
        <div className="Demo23-naruto-welcome">
          <h2>Welcome to Narutopedia!</h2>
          <p>We are currently editing over 7,682 articles with 10,909 images! Be warned that this wiki is filled with SPOILERS about the Naruto series. This is your only warning, read at your own risk!</p>
        </div>

        <div className="Demo23-naruto-manga">
          <h2>Manga</h2>
          <p>Get to know what happens in each manga.</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-anime">
          <h2>Anime</h2>
          <p>Get to know what happens in each anime.</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-movies">
          <h2>Movies</h2>
          <p>Get to know what happens in each movie.</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-light-novels">
          <h2>Light Novels</h2>
          <p>Get to know what happens in each light novel.</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-synopsis">
          <h2>Synopsis</h2>
          <p>The Nine-Tails attacking Konoha...</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-latest-chapter">
          <h2>Latest Chapter</h2>
          <p>"The Awakening"</p>
          <p>Code recalls Boruto's warnings about the Claw Grime...</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-random-episode">
          <h2>Random Episode</h2>
          <p>"The Last Leg: A Final Act of Desperation"</p>
          <p>Sasuke attacks Aoi with his Chidori...</p>
          <p>Read more </p>
        </div>

        <div className="Demo23-naruto-contribute">
          <h2>Contribute to this Wiki!</h2>
          <p>Trouble getting started?</p>
          <p>If you are new to wikis, check Help:Getting Started</p>
          <p>Don't be afraid to just jump in and start it! Others can edit and improve whatever you write.</p>
          <p>Check out the recent changes to see what the community is working on.</p>
          <p>Help the wiki by editing article stubs or improving a random page.</p>
        </div>
      </main>

      <footer className="Demo23-naruto-footer">
        <p>© 2023 Fandom Inc. All rights reserved. Fandom logo</p>
      </footer>
    </div>
  );
};

export default NarutoWiki;
