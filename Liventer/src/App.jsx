import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import GDPR from './components/GDPR/GDPR.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Services from './components/Services/Services.jsx';
import Haat from './components/Services/ServicePage/Haat.jsx'


function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <GDPR />
      <Footer />
    </Router>
  );
}

export default App;
