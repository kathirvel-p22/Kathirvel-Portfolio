import React from 'react';
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
import './App.css';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
