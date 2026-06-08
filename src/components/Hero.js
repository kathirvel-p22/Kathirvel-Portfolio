import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImgWebP from '../hero.webp';
import profileImgPng  from '../hero-optimized.png';

const words = ['Engineer_', 'Developer_', 'Researcher_', '_JeduAi_Founder_'];

// Inner orbit – 4 backend icons, 90° apart
const innerIcons = [
  { src: 'https://cdn.simpleicons.org/mongodb/47A248',                                          alt: 'MongoDB',    cls: 'ti-mongo'  },
  { src: 'https://cdn.simpleicons.org/nodedotjs/339933',                                        alt: 'Node.js',    cls: 'ti-node'   },
  { src: 'https://cdn.simpleicons.org/python/3776AB',                                           alt: 'Python',     cls: 'ti-python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',           alt: 'Java',       cls: 'ti-java'   },
];

// Outer orbit – 5 frontend icons, 72° apart
const outerIcons = [
  { src: 'https://cdn.simpleicons.org/react/61DAFB',                                            alt: 'React',      cls: 'ti-react'    },
  { src: 'https://cdn.simpleicons.org/javascript/F7DF1E',                                       alt: 'JavaScript', cls: 'ti-js'       },
  { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',                                      alt: 'Tailwind',   cls: 'ti-tailwind' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',                                        alt: 'Next.js',    cls: 'ti-next'     },
  { src: 'https://cdn.simpleicons.org/git/F05032',                                              alt: 'Git',        cls: 'ti-git'      },
];

export default function Hero() {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, ci + 1));
        if (ci + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCi(c => c + 1);
        }
      } else {
        setText(word.substring(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setWi(w => (w + 1) % words.length);
          setCi(0);
        } else {
          setCi(c => c - 1);
        }
      }
    }, deleting ? 70 : 110);
    return () => clearTimeout(timer);
  }, [ci, wi, deleting]);

  return (
    <section id="hero" className="hero-section">
      {/* ── Left: text content ── */}
      <div className="hero-content">
        <div className="hero-badge">JeduAI Founder &amp; AI Developer &amp; MERN Stack Developer</div>
        <h1 className="hero-title">
          Hey! I'm <span className="name">Kathirvel P</span>
        </h1>
        <div className="hero-sub">
          <span>An AI&nbsp;</span>
          <span className="typed">{text}</span>
          <span className="cursor" />
        </div>
        <p className="hero-desc">
          Kathirvel P is JeduAI Founder, AI Developer, and MERN Stack Developer specializing in cybersecurity, 
          multilingual AI systems, and innovative mobile applications. Creator of FreshField, LinkOrtex AI, and 
          secure wallet applications. I build scalable, high-performance solutions using React, Node.js, Python, 
          Java, and cutting-edge AI technologies that solve real-world problems.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Check portfolio</a>
          <a href="#contact"  className="btn-outline">Contact Me</a>
        </div>
      </div>

      {/* ── Right: orbit system ── */}
      <div className="hero-visual">

        {/* Outer orbit ring + its 5 icons */}
        <div className="orbit-ring orbit-outer">
          {outerIcons.map((icon, i) => (
            <div key={i} className={`tech-icon ${icon.cls}`}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>

        {/* Inner orbit ring + its 4 icons */}
        <div className="orbit-ring orbit-inner">
          {innerIcons.map((icon, i) => (
            <div key={i} className={`tech-icon ${icon.cls}`}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>

        {/* Profile circle in the center */}
        <div className="profile-circle">
          <div className="profile-inner">
            <picture>
              <source srcSet={profileImgWebP} type="image/webp" />
              <img
                src={profileImgPng}
                alt="Kathirvel P"
                className="profile-img"
                width="420"
                height="420"
                loading="eager"
                decoding="async"
              />
            </picture>
            <div className="profile-glow" />
          </div>
        </div>

      </div>
    </section>
  );
}
