import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import Products from './pages/Products';
import HeroSection from './components/HeroSection/Herosection';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="mb-7"> {/* Added margin-bottom wrapper for navbar */}
          <Navbar />
          <HeroSection />
        </div>
        <main className="flex-grow py-6 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;