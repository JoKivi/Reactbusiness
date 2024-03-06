import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* etusivun komponentit  */
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import AboutSection from './components/aboutSection/about.jsx';
import ServicesSection from './components/ServicesSection/ServicesSection.jsx';
import GallerySection from './components/GallerySection/GallerySection.jsx';
import ContactSection from './components/ContactsSection/ContactsSection.jsx';
import Collaborators from './components/CollaboratorsSection/collaborators.jsx';
import Footer from './components/Footer/Footer.jsx';

/* sivut */
const Home = () => { return <><HeroSection /><AboutSection /><ServicesSection /><GallerySection /><ContactSection /><Collaborators /></> }
import DJKaraoke from './pages/DJKaraoke.jsx';
import Yksityistilaisuudet from './pages/Yksityistilaisuudet.jsx';
import Yritysjuhlat from './pages/Yritysjuhlat.jsx';
import Erikoisohjelmat from './pages/Erikoisohjelmat.jsx';
import Haat from './pages/Haat.jsx';
import Gallery from './pages/Gallery.jsx';
import Regon from './pages/Regon.jsx';
import ContactForm from './pages/ContactForm.jsx';

function App() {

  return (
    <Router>
      <Navbar />

      <div className="main">
        <Link to="*" /> {/* etusivu */}

        <Routes>
        <Route path='*' element={<Home />} />

          <Route path='/DJKaraoke' element={<DJKaraoke />} />
          <Route path='/Yksityistilaisuudet' element={<Yksityistilaisuudet />} />
          <Route path='/Yritysjuhlat' element={<Yritysjuhlat />} />
          <Route path='/Erikoisohjelmat' element={<Erikoisohjelmat />} />
          <Route path="/Haat" element={<Haat />} />
          <Route path='/Gallery' element={<Gallery />} /> {/* gallery path */}
          <Route path='/Regon' element={<Regon />} />
          <Route path='/ContactForm' element={<ContactForm />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
