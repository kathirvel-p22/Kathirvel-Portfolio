import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../hero.png'; // Import your profile image

const words = ['Engineer_', 'Developer_', 'Problem Solver_','_JeduAi_Founder_'];

const techIcons = [
  { src: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB', cls: 'ti-mongo' },
  { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind', cls: 'ti-tailwind' },
  { 
  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
  alt: 'Java', 
  cls: 'ti-java' 
},
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', cls: 'ti-react' },
  { src: 'https://cdn.simpleicons.org/git/F05032', alt: 'Git', cls: 'ti-git' },
  { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js', cls: 'ti-node' },
  { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript', cls: 'ti-js' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', alt: 'Next.js', cls: 'ti-next' },
  { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', cls: 'ti-python' },
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
      <div className="hero-content">
        <div className="hero-badge">Software Engineer &amp; Full Stack Developer</div>
        <h1 className="hero-title">
          Hey! I'm <span className="name">Kathirvel P</span>
        </h1>
        <div className="hero-sub">
          <span>A Software&nbsp;</span>
          <span className="typed">{text}</span>
          <span className="cursor" />
        </div>
        <p className="hero-desc">
          Aspiring Software Engineer and Full Stack Developer with strong skills in Java, Python, JavaScript, Spring Boot, React JS, Flutter, and MySQL. 
          I specialize in building scalable, high-performance web and mobile applications with a focus on performance, security, and user experience. 
          Possesses solid problem-solving ability, adaptability, and a continuous learning mindset, committed to delivering high-quality software solutions in professional environments.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Check portfolio</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit-ring orbit-1">
          {techIcons.map((icon, i) => (
            <div key={i} className={`tech-icon ${icon.cls}`}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
        <div className="profile-circle">
          <div className="profile-inner">
            <img src={profileImg} alt="Kathirvel P" className="profile-img" />
            <div className="profile-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
