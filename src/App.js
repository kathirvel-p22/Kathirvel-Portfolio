import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAB from './components/FAB';
import SplashCursor from './components/SplashCursor';
import SEOHead from './components/SEOHead';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <SEOHead />
        <SplashCursor />
        <div className="grid-bg" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FAQs />
        <Contact />
        <Footer />
        <FAB />
      </div>
    </HelmetProvider>
  );
}

export default App;
