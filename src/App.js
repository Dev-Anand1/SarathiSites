// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './component/home page/Home';
import ContactUs from './component/contactUs/ContactUs';
import Header from './component/Header/Header';
import Demo1 from './component/Demo01/Demo1';
import Button from './component/Button/Button';
import Demo2 from './component/Demo2/Demo2';
import Demo3 from './component/Demo3/Demo3';
import Demo4 from './component/Demo4/Demo4';
import Demo5 from './component/Demo5/Demo5';
import Demo6 from './component/Demo6/Demo6';
import Demo7 from './component/Demo7/Demo7';
import Demo8 from './component/Demo8/Demo8';
import Demo9 from './component/Demo9/Demo9';
import Demo10 from './component/Demo10/Demo10';
import Demo11 from './component/Demo11/Demo11';
import Demo12 from './component/Demo12/Demo12';
import Demo13 from './component/Demo13/Demo13';
import Demo14 from './component/Demo14/Demo14';
import Demo15 from './component/Demo15/Demo15';
import Demo16 from './component/Demo16/Demo16';
import Demo17 from './component/Demo17/Demo17';
import Demo18 from './component/Demo18/Demo18';
import Demo19 from './component/Demo19/Demo19';
import Demo20 from './component/Demo20/Demo20';
import Demo21 from './component/Demo21/Demo21';
import Demo22 from './component/Demo22/Demo22';
import Demo23 from './component/Demo23/Demo23';
import Demo24 from './component/Demo24/Demo24';
import Demo25 from './component/Demo25/Demo25';
function App() {
  return (
    <Router>
           <LocationHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Demo1" element={<Demo1 />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/Demo2" element={<Demo2 />} />
        <Route path="/Demo3" element={<Demo3 />} />
        <Route path="/Demo4" element={<Demo4 />} />
        <Route path="/Demo5" element={<Demo5 />} />
        <Route path="/Demo6" element={<Demo6 />} />
        <Route path="/Demo7" element={<Demo7 />} />
        <Route path="/Demo8" element={<Demo8 />} />
        <Route path="/Demo9" element={<Demo9 />} />
        <Route path="/Demo10" element={<Demo10 />} />
        <Route path="/Demo11" element={<Demo11 />} />
        <Route path="/Demo12" element={<Demo12 />} />
        <Route path="/Demo13" element={<Demo13 />} />
        <Route path="/Demo14" element={<Demo14 />} />
        <Route path="/Demo15" element={<Demo15 />} />
        <Route path="/Demo16" element={<Demo16 />} />
        <Route path="/Demo17" element={<Demo17 />} />
        <Route path="/Demo18" element={<Demo18 />} />
        <Route path="/Demo19" element={<Demo19 />} />
        <Route path="/Demo20" element={<Demo20 />} />
        <Route path="/Demo21" element={<Demo21 />} />
        <Route path="/Demo22" element={<Demo22 />} />
        <Route path="/Demo23" element={<Demo23 />} />
        <Route path="/Demo24" element={<Demo24 />} />
        <Route path="/Demo25" element={<Demo25 />} />


      </Routes>
 
    </Router>
  );
}

// LocationHandler.js
function LocationHandler() {
  const location = useLocation();

  // Function to determine if the Header should be shown
  const shouldShowHeader = () => {
    return location.pathname !== '/';
  };

  return shouldShowHeader() ? <Header /> : null;
}

export default App;
