import React, { useState, useEffect } from 'react';
import './Navbar.css';
import resumePDF from '../Kathirvel_P_Resume.pdf';

const links = ['About', 'Skills', 'Projects', 'Blog', 'FAQs', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="logo">
        {'{ '}<span>Kathirvel</span>{' }'}
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a
            key={l}
            href={l === 'Blog' ? 'https://kathirvel-p.blogspot.com/' : `#${l.toLowerCase()}`}
            className={active === l.toLowerCase() ? 'active' : ''}
            target={l === 'Blog' ? '_blank' : '_self'}
            rel={l === 'Blog' ? 'noopener noreferrer' : ''}
          >{l}</a>
        ))}
      </div>
      <a href={resumePDF} download="Kathirvel_P_Resume.pdf" className="btn-resume">Resume <span>↓</span></a>
    </nav>
  );
}
