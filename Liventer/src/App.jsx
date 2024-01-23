import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/about/about.jsx';
import Footer from './components/Footer/Footer.jsx';
import GDPR from './components/GDPR/GDPR.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Services from './components/Services/Services.jsx';
import Haat from './components/Services/Haat.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/src/components/Services/Haat.jsx" element={<Haat />} />
        <Route path="/" element={<Services />} />
      </Routes>
      <HeroSection />
      <About />
      <Services />
      <GDPR />
      <Footer />
    </Router>
  );
}

export default App;
