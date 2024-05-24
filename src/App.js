
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Languages from './pages/Languages';
import Footer from './components/Footer';
import CertifiedTranslation from "./pages/CertifiedTranslation"
import Landing from './pages/Landing';
import Careers from './pages/Careers';
import Contact from "./pages/Contact";
import Industry from './pages/Industry';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industry" element={<Industry/>} />
          <Route path="/contact_us" element={<Contact/>} />
          <Route path="/languages" element={<Languages/>} />
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/certified_translation' element={<CertifiedTranslation/>}/>
        </Routes>
        <Footer/>
        </div>
    </Router>
    
  );
};

export default App;


