import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';  // Ensure App.css is imported for styling

// HeroSection function to display the background video
function HeroSection() {
    return (
        <div className="hero-background">svenn
            <video autoPlay loop muted playsInline>
                <source src={process.env.PUBLIC_URL + "/assets/undersea-background-with-ligth.mp4"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <h1>Welcome to Vivasea</h1>
        </div>
    );
}

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

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />  {/* Add HeroSection here */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;