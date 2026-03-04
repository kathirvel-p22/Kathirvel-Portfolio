import React, { useRef, useEffect } from 'react';
import './Skills.css';

const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JAVA', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBmaWxsPSIjRTc2RjAwIiBkPSJNMjc3LjcgMzEyLjljOS44LTYuNyAxMy44LTE3LjMgNi45LTIzLjQtMy42LTMuMy0xMC00LjktMTYuMi00LjktNi4wIDAtMTIuOCAxLjgtMTkuNiA1LjMtNy45IDQuMi0xMy4yIDEwLjMtMTMuNiAxNi4yLS4zIDQuMiAxLjggOC41IDYuNiAxMS43IDEzLjYgOS4xIDM1LjkgOS40IDM1LjkgOS40em0tNTAuMiA4My40YzYuMiA0LjYgMTMuNiA2LjkgMjEuOCA2LjkgNi4yIDAgMTIuOC0xLjYgMTkuNi00LjggNy45LTMuNyAxMy4yLTkuMSAxMy42LTE1LjIuMy00LjItMS44LTguNS02LjYtMTEuNy0xMy42LTkuMS0zNS45LTkuNC0zNS45LTkuNHptNTAuMiA4My40YzYuMiA0LjYgMTMuNiA2LjkgMjEuOCA2LjkgNi4yIDAgMTIuOC0xLjYgMTkuNi00LjggNy45LTMuNyAxMy4yLTkuMSAxMy42LTE1LjIuMy00LjItMS44LTguNS02LjYtMTEuNy0xMy42LTkuMS0zNS45LTkuNC0zNS45LTkuNHoiLz48L3N2Zz4=', bg: '#1e0f00' },
      { name: 'PYTHON', icon: 'https://cdn.simpleicons.org/python/3776AB', bg: '#0a1a2e' },
      { name: 'JAVASCRIPT', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', bg: '#1a1800' },
      { name: 'DART', icon: 'https://cdn.simpleicons.org/dart/0175C2', bg: '#0a1a2e' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'REACT', icon: 'https://cdn.simpleicons.org/react/61DAFB', bg: '#1a3a4a' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', bg: '#1e1008' },
      { name: 'CSS3', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBmaWxsPSIjMTU3MkI2IiBkPSJNMCAwaDM4NGw0OCA1MTItMTkyIDY0TDQ4IDUxMnptMzE2LjkgMzk1LjdsLTEyNC45IDQxLjYtMTI0LjktNDEuNkw1Ni4xIDExNi4xaDI3MS44eiIvPjwvc3ZnPg==', bg: '#0a1a2e' },
      { name: 'TAILWIND', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', bg: '#0c2a30' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'SPRING BOOT', icon: 'https://cdn.simpleicons.org/springboot/6DB33F', bg: '#0a1e0a' },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/fastapi/009688', bg: '#0a1e15' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', bg: '#1a1433' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MYSQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', bg: '#0a1a2e' },
      { name: 'POSTGRESQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', bg: '#0a1a2e' },
    ],
  },
  {
    name: 'AI/ML & Tools',
    skills: [
      { name: 'MACHINE LEARNING', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', bg: '#1e0f00' },
      { name: 'PROMPT ENGINEERING', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNDEyOTkxIiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCAzNjhjLTY2LjMgMC0xMjAtNTMuNy0xMjAtMTIwczUzLjctMTIwIDEyMC0xMjAgMTIwIDUzLjcgMTIwIDEyMC01My43IDEyMC0xMjAgMTIwem0wLTIwMGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6Ii8+PC9zdmc+', bg: '#0a0a20' },
      { name: 'COMPUTER VISION', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8', bg: '#1a1433' },
      { name: 'GOOGLE GEMINI AI', icon: 'https://cdn.simpleicons.org/google/4285F4', bg: '#0a1a2e' },
      { name: 'GIT/GITHUB', icon: 'https://cdn.simpleicons.org/github/FFFFFF', bg: '#111' },
      { name: 'DOCKER', icon: 'https://cdn.simpleicons.org/docker/2496ED', bg: '#001525' },
      { name: 'VS CODE', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDA3QUNDIiBkPSJNMzgzLjc4NSA0NzAuNDdsLTg5LjEyIDI5LjcwN2MtNC4xMTQgMS4zNzItOC41MDcgMS4zNzItMTIuNjIxIDBsLTg5LjEyLTI5LjcwN2MtMTAuMjg1LTMuNDI4LTE3LjE0My0xMy4xNDMtMTcuMTQzLTI0LjI4NlYxMjguMjg2YzAtMTEuMTQzIDYuODU3LTIwLjg1NyAxNy4xNDMtMjQuMjg2bDg5LjEyLTI5LjcwN2M0LjExNC0xLjM3MiA4LjUwNy0xLjM3MiAxMi42MjEgMGw4OS4xMiAyOS43MDdjMTAuMjg1IDMuNDI4IDE3LjE0MyAxMy4xNDMgMTcuMTQzIDI0LjI4NnYzMTcuODk4YzAgMTEuMTQzLTYuODU3IDIwLjg1Ny0xNy4xNDMgMjQuMjg2eiIvPjwvc3ZnPg==', bg: '#0a1a2e' },
      { name: 'XAMPP', icon: 'https://cdn.simpleicons.org/xampp/FB7A24', bg: '#1e0f00' },
    ],
  },
  {
    name: 'Core',
    skills: [
      { name: 'DATA STRUCTURES', icon: 'https://cdn.simpleicons.org/databricks/FF3621', bg: '#1e0e0a' },
      { name: 'ALGORITHMS', icon: 'https://cdn.simpleicons.org/algolia/5468FF', bg: '#0a1030' },
      { name: 'OOPS', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', bg: '#0a1a2e' },
      { name: 'DBMS', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjNDA1M0Q2IiBkPSJNNDQ4IDczLjE0M3YzNS43MTRDNDQ4IDE1NC4yODYgMzQ3LjQyOSAyMDAgMjI0IDIwMFM0IDEzNC4yODYgNCA4OC44NTdWNzMuMTQzQzQgMzIuODU3IDEwNC41NzEgMCAyMjQgMHMyMjAgMzIuODU3IDIyMCA3My4xNDN6TTQgMTc2djcwLjg1N0M0IDI4Ny40MjkgMTA0LjU3MSAzMzMgMjI0IDMzM3MyMjAtNDUuNTcxIDIyMC0xMDYuMTQzVjE3NmMtNDguMTI1IDMzLjE0My0xMzguODc1IDU0LTIyMCA1NHMtMTcxLjg3NS0yMC44NTctMjIwLTU0em0wIDE2MHY3MC44NTdDNCA0NDcuNDI5IDEwNC41NzEgNDkzIDIyNCA0OTNzMjIwLTQ1LjU3MSAyMjAtMTA2LjE0M1YzMzZjLTQ4LjEyNSAzMy4xNDMtMTM4Ljg3NSA1NC0yMjAgNTRzLTE3MS44NzUtMjAuODU3LTIyMC01NHoiLz48L3N2Zz4=', bg: '#0a0a20' },
      { name: 'SOFTWARE TESTING', icon: 'https://cdn.simpleicons.org/jest/C21325', bg: '#1e0a0a' },
    ],
  },
];

function CategoryBlock({ cat, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="skill-category reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <h3><span className="cat-bar" />{cat.name}</h3>
      <div className="skills-icons-grid">
        {cat.skills.map((s, si) => (
          <div className="skill-card" key={si} style={{ background: s.bg }}>
            <img src={s.icon} alt={s.name} onError={e => { e.target.style.opacity = 0.3; }} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    refs.forEach(r => {
      if (!r.current) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) r.current.classList.add('visible'); }, { threshold: 0.1 });
      obs.observe(r.current);
    });
  }, []);
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title reveal" ref={refs[0]}>Tech Stack <span>Expertise</span></h2>
      <div className="section-line reveal" ref={refs[1]} />
      <p className="skills-subtitle reveal" ref={refs[2]}>A professional toolkit optimized for performance and scalability</p>
      <div className="skills-grid">
        {categories.map((cat, ci) => (
          <CategoryBlock key={ci} cat={cat} delay={ci * 0.12} />
        ))}
      </div>
    </section>
  );
}
