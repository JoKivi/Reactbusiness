import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GDPR from "./components/GDPR/GDPR.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <GDPR />
      <Footer />
    </Router>
  );
}

export default App;
