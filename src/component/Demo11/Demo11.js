// App.js
import React, { useState } from 'react';
import './Demo11.css'; // Import your CSS file

const planetsData = [
  { name: 'Mercury', diameter: '4,879 km', distance: '57,909,227 km', yearLength: '88 Earth days' },
  { name: 'Venus', diameter: '12,104 km', distance: '108,209,475 km', yearLength: '225 Earth days' },
  { name: 'Earth', diameter: '12,742 km', distance: '149,598,262 km', yearLength: '365.24 days' },
  // Add other planets...
];

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="Demo-11app-container">
      <header className="Demo-11header">
        <h1>Galaxy Explorer</h1>
      </header>

      <main className="Demo-11main-content">
        <section className="Demo-11planet-facts">
          <h2>Planet Facts</h2>
          <h2>Click in planet image to get planet Infomission three images represent three different planets </h2>
          <p>There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.</p>
          <p>Planets can be divided into two groups: Terrestrial Planets and Gas Giants. Planets that orbit other stars are referred to as Exoplanets.</p>
          <p>Click on any planet below to find out more about it:</p>

          <div className="Demo-11planet-list">
            {planetsData.map((planet) => (
              <div key={planet.name} className="Demo-11planet-item" onClick={() => handlePlanetClick(planet)}>
                <img src={`https://img.pikbest.com/origin/09/29/10/93EpIkbEsTdJ4.png!sw800`} alt={planet.name} />
              </div>
            ))}
          </div>

          {selectedPlanet && (
            <div className="Demo-11planet-details">
              <h3>{selectedPlanet.name} Facts</h3>
              <p>Diameter: {selectedPlanet.diameter}</p>
              <p>Distance from Sun: {selectedPlanet.distance}</p>
              <p>Length of Year: {selectedPlanet.yearLength}</p>
            </div>
          )}
        </section>
        <section className="Demo-11planet-size-order">
  <h2>Size and Order of the Planets</h2>


  <div className="Demo-11planet-info">
  <section className="Demo-11planet-info-section">
    <h3>Part 1: Planet</h3>
    <p>
      (from Greek planētes, “wanderers”), broadly, any relatively large natural body that revolves in an orbit around the Sun or around some other star and that is not radiating energy from internal nuclear fusion reactions.
    </p>
    <p>
      In addition to the above description, some scientists impose additional constraints regarding characteristics such as size (e.g., the object should be more than about 1,000 km [600 miles] across, or a little larger than the largest known asteroid, Ceres), shape (it should be large enough to have been squeezed by its gravity into a sphere—i.e., roughly 700 km [435 miles] across, depending on its density), or mass (it must have a mass insufficient for its core to have experienced even temporary nuclear fusion).
    </p>
    <p>
      As the term is applied to bodies in Earth’s solar system, the International Astronomical Union (IAU), which is charged by the scientific community with classifying astronomical objects, lists eight planets orbiting the Sun; in order of increasing distance, they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto also was listed as a planet until 2006. Until the close of the 20th century, the only planets to be recognized were components of Earth’s solar system. At that time astronomers confirmed that other stars have objects that appear to be planets in orbit around them.
    </p>
  </section>

  <section className="Demo-11planet-info-section">
    <h3>Part 2: Planets of the solar system</h3>
    <p>
      The idea of what exactly constitutes a planet of the solar system has been traditionally the product of historical and cultural consensus. Ancient sky gazers applied the term planet to the seven celestial bodies that were observed to move appreciably against the background of the apparently fixed stars.
    </p>
  </section>

  <section className="Demo-11planet-info-section">
    <h3>Part 3: August 2006 IAU Decision</h3>
    <p>
      In August 2006, after intense debate over the question of Pluto’s planetary status, the general assembly of the IAU approved a definition for a solar system planet that excluded Pluto. At the same time, it defined a new distinct class of objects called dwarf planets, for which Pluto qualified. Following the IAU proclamations, many scientists protested the definitions, considering them flawed and unscientific and calling for their reconsideration.
    </p>
  </section>

  <section className="Demo-11planet-info-section">
    <h3>Part 4: Planets of other stars</h3>
    <p>
      The planets and other objects that circle the Sun are thought to have formed when part of an interstellar cloud of gas and dust collapsed under its gravitational attraction and formed a disk-shaped nebula. Further compression of the disk’s central region formed the Sun, while the gas and dust left behind in the midplane of the surrounding disk eventually coalesced to form ever-larger objects and, ultimately, the planets.
    </p>
  </section>
</div>




</section>

      </main>

      <footer className="Demo-11footer">
        <p>&copy; 2023 Sarthi sites. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
