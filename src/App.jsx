import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pricing from './Routes/Pricing';
import Training from './Routes/Training';
import Contact from './Routes/Contact';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="">
      <Routes>

      
        <Route path = "/" element = {<Home />} />
        <Route path = "/pricing" element = {<Pricing />} />
        <Route path = "/training" element = {<Training />} />
        <Route path = "/contact" element = {<Contact />} />


      </Routes>
      
    </div>
    </Router>
  )
}

export default App
// <Routes>
//   <Route path="/" element={<Home />}/>
//   <Route path="/about" element={<About />} />
// </Routes>