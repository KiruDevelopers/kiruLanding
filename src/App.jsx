import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Servicios from './Servicios';
import Stack from './Stack';
import Manifiesto from './Manifiesto';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/manifiesto" element={<Manifiesto />} />
      </Routes>
    </Router>
  );
}

export default App;