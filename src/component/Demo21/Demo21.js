// src/App.js

import React from 'react';
import './Demo21.css';

const App = () => {
  return (
    <div className="Demo21-plant-page">
      <header className="Demo21-page-header">
        <h1>Carnivorous Plants</h1>
      </header>

      <section className="Demo21-introduction">
        <p>Some plants aren’t eaten by bugs—they eat the bugs themselves! Nearly 700 species of these carnivorous plants live throughout the world.</p>
        <p>BY LAURA GOERTZEL</p>
      </section>

      <section className="Demo21-plant-list">
        <div className="Demo21-plant-item">
          <h2>Demo21-PITCHER PLANT</h2>
          <p>All that’s left of unfortunate frogs caught by this plant are little frog slippers—the skin on the frogs’ feet is the only part the plant doesn’t digest.</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-VENUS FLYTRAP</h2>
          <p>The leaves of the Venus flytrap snaps shut if its tiny hairs are brushed twice by an unsuspecting bug.</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-YELLOW PITCHER PLANT</h2>
          <p>The leaves of this meat-eating plant fill with rainwater. Bugs fly in, but they don’t fly out!</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-COBRA LILY</h2>
          <p>Bugs get confused by the translucent windows in the plant’s leaves. They think they’re escaping, but they’re really flying deeper inside.</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-BUTTERWORT</h2>
          <p>Butterwort bristles have gluey hairs that snag insects until the plant’s digestive juices do their work.</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-MONKEY CUP</h2>
          <p>Insect larvae feed on the leftovers found inside the cups of these plants.</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-AUSTRALIAN SUNDEW</h2>
          <p>Thirsty bugs are drawn to what look like raindrops on the leaves. But the “water” is actually a glue-like substance to trap insects. Talk about a sticky situation!</p>
        </div>

        <div className="Demo21-plant-item">
          <h2>Demo21-BIG FLOATING BLADDERWORT</h2>
          <p>These plants live in the water and trap tiny aquatic animals in their cup-shaped leaves.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
