import React from 'react';
import './FAB.css';

export default function FAB() {
  return (
    <a href="#contact" className="fab" title="Contact Me">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <line x1="12" y1="3" x2="15" y2="3"/>
      </svg>
    </a>
  );
}
