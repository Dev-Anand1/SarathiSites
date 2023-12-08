// App.js
import React from 'react';
import './Demo16.css';

const AirTypes = [
  {
    title: 'Oxygen',
    description: 'Oxygen is a vital gas for life, essential for respiration in animals and plants.',
  },
  {
    title: 'Nitrogen',
    description: 'Nitrogen is the most abundant gas in Earth\'s atmosphere, making up about 78% of it.',
  },
  {
    title: 'Carbon Dioxide',
    description: 'Carbon Dioxide plays a crucial role in the carbon cycle and is a greenhouse gas in the atmosphere.',
  },
  {
    title: 'Argon',
    description: 'Argon is a noble gas, colorless, odorless, and makes up a small percentage of Earth\'s atmosphere.',
  },
  {
    title: 'Hydrogen',
    description: 'Hydrogen is the lightest and most abundant element in the universe, primarily found in stars.',
  },
  {
    title: 'Helium',
    description: 'Helium is a colorless, odorless, and inert gas known for its use in balloons and as a cooling agent.',
  },
  {
    title: 'Methane',
    description: 'Methane is a potent greenhouse gas and is also the main component of natural gas.',
  },
  {
    title: 'Neon',
    description: 'Neon is a noble gas used in neon signs, producing a characteristic bright red-orange glow.',
  },
  {
    title: 'Krypton',
    description: 'Krypton is a noble gas with applications in lighting and photography due to its spectral properties.',
  },
  {
    title: 'Xenon',
    description: 'Xenon is a noble gas used in various applications, including lighting and medical imaging.',
  },
  {
    title: 'Radon',
    description: 'Radon is a radioactive gas that can accumulate in homes and poses health risks if not mitigated.',
  },
  {
    title: 'Ammonia',
    description: 'Ammonia is a compound of nitrogen and hydrogen, essential for various industrial and agricultural processes.',
  },
  {
    title: 'Sulfur Dioxide',
    description: 'Sulfur Dioxide is a gas produced by burning fossil fuels and industrial processes, contributing to air pollution.',
  },
  {
    title: 'Hydrogen Sulfide',
    description: 'Hydrogen Sulfide is a colorless gas with a characteristic rotten egg smell, often found in natural gas and volcanic gases.',
  },
  {
    title: 'Carbon Monoxide',
    description: 'Carbon Monoxide is a colorless, odorless gas produced by incomplete combustion, posing health risks.',
  },
  {
    title: 'Chlorine',
    description: 'Chlorine is a highly reactive gas used in water treatment and as a disinfectant.',
  },
  {
    title: 'Fluorine',
    description: 'Fluorine is a highly reactive element, and its compounds are used in various industrial applications, including toothpaste production.',
  },
  {
    title: 'Hydrogen Chloride',
    description: 'Hydrogen Chloride is a gas used in various industrial processes, including the production of PVC.',
  },
  {
    title: 'Ozone',
    description: 'Ozone is a molecule composed of three oxygen atoms and plays a vital role in the stratosphere, protecting life on Earth from harmful ultraviolet radiation.',
  },
  {
    title: 'Water Vapor',
    description: 'Water Vapor is the gaseous form of water, a key component of the Earth\'s atmosphere and the water cycle.',
  },
];

const App = () => {
  return (
    <div className="Demo16-app-container">
      <header className="Demo16-header">
        <h1>Explore Different Types of Air</h1>
      </header>

      <main className="Demo16-main">
        {AirTypes.map((airType, index) => (
          <div key={index} className="Demo16-air-type">
            <h2>{airType.title}</h2>
            <p>{airType.description}</p>
          </div>
        ))}
      </main>

      <footer className="Demo16-footer">
        <p>&copy; 2023 Air Exploration</p>
      </footer>
    </div>
  );
};

export default App;
