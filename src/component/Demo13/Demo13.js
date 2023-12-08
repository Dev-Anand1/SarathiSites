// App.js
import React from 'react';
import './Demo13.css';

const Header = () => (
  <header className="header">
    <nav>
      <a href="/">सारथी Sites</a>
    </nav>
  </header>
);

const Home = () => (
  <section className="home">
    <div className="container">
      <h2>Welcome to the Lava Theme Website</h2>
      {/* Add any content for the home section */}
    </div>
  </section>
);

const EarthScience = () => (
  <section className="earth-science">
    <div className="container">
      <h2>Earth Science, Geologic Time & Fossils</h2>

      {/* Part 1 */}
      <div className="main-part">
        <h3>Part 1</h3>
        <p>
          Lava, magma (molten rock) emerging as a liquid onto Earth’s surface. The term lava is also used for the solidified rock formed by the cooling of a molten lava flow. The temperatures of molten lava range from about 700 to 1,200 °C (1,300 to 2,200 °F). The material can be very fluid, flowing almost like syrup, or it can be extremely stiff, scarcely flowing at all. The higher the lava’s silica content, the higher its viscosity.
        </p>
      </div>

      {/* Part 2 */}
      <div className="main-part">
        <h3>Part 2</h3>
        <p>
          Mafic (ferromagnesian, dark-colored) lavas such as basalt characteristically form flows known by the Hawaiian names pahoehoe and aa (or a’a). Pahoehoe lava flows are characterized by smooth, gently undulating, or broadly hummocky surfaces. The liquid lava flowing beneath a thin, still-plastic crust drags and wrinkles it into tapestry-like folds and rolls resembling twisted rope. Pahoehoe lava flows are fed almost wholly internally by streams of liquid lava flowing beneath a solidified or partly solidified surface. Typically, the margin of a pahoehoe flow advances by protruding one small toe or lobe after another.
        </p>
      </div>

      {/* Part 3 */}
      <div className="main-part">
        <h3>Part 3</h3>
        <p>
          In contrast to pahoehoe, the surface of aa lava is exceedingly rough, covered with a layer of partly loose, very irregular fragments commonly called clinkers. Aa lava flows are fed principally by rivers of liquid lava flowing in open channels. Typically, such a feeding river forms a narrow band that is 8 to 15 meters (25 to 50 feet) wide along the center line of the flow, with broad fields of less actively moving clinker on each side of it. At the front of the flow, clinkers from the top roll down and are overridden by the pasty center layer, like a tread on an advancing bulldozer.
        </p>
      </div>

      {/* Part 4 */}
      <div className="main-part">
        <h3>Part 4</h3>
        <p>
          Pillow lava is named for the pillow-shaped masses that form underwater as highly fluid lava is quenched by the surrounding water. These pillow-shaped masses are a unique and fascinating feature of certain volcanic activities.
        </p>
      </div>

      {/* Part 5 */}
      <div className="main-part">
        <h3>Part 5</h3>
        <p>
          Block lava flows are another type formed by lavas of andesitic or intermediate composition. These flows have tops consisting largely of loose rubble, with fragments more regular in shape, often forming polygons with fairly smooth sides.
        </p>
      </div>

      {/* Part 6 */}
      <div className="main-part">
        <h3>Part 6</h3>
        <p>
          Sometimes, volcanic activity results in the formation of volcanic islands. These islands are created by the accumulation of lava, ash, and other volcanic materials. Volcanic islands can be found in various parts of the world.
        </p>
      </div>

      {/* Part 7 */}
      <div className="main-part">
        <h3>Part 7</h3>
        <p>
          The study of volcanoes, known as volcanology, helps scientists understand the Earth's geological processes. It involves monitoring volcanic activity, studying eruption patterns, and assessing potential risks for surrounding areas.
        </p>
      </div>

    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>Home | Games & Quizzes | History & Society | Science & Tech | Biographies | Animals & Nature | Geography & Travel | Arts & Culture | Money | Videos</p>
    </div>
  </footer>
);

const App = () => (
  <div className="Demo-13">
    <Header />
    <Home />
    <EarthScience />
    <Footer />
  </div>
);

export default App;
