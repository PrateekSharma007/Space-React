import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <Navbar />
    <div className="">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/pricing" element = {<Home />} />
        <Route path = "/training" element = {<Home />} />
        <Route path = "/contact" element = {<Home />} />


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