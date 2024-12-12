import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
/*
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
 */

import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
      </div>
  );
  /*
    return (
      <div className="App">
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        <Footer />
      </div>
  );
  */
}

export default App;