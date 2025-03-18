import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import Products from './pages/Products';
import HeroSection from './components/HeroSection/Herosection';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes without navbar, hero, or footer */}
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        
        {/* Main layout routes with navbar, hero, and footer */}
        <Route path="/*" element={
          <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="mb-7">
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
        } />
      </Routes>
    </Router>
  );
};

export default App;