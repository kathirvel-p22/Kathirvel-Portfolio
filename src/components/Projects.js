import React, { useRef, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AIVONITY – Intelligent Vehicle Assistant Ecosystem',
    sub: 'Flutter, FastAPI, PostgreSQL, Docker, Kubernetes',
    desc: 'Engineered AI-powered vehicle health platform with real-time telemetry monitoring and predictive maintenance algorithms. Architected conversational AI for intelligent scheduling and deployed scalable cloud infrastructure via Docker and Kubernetes.',
    tags: ['#Flutter', '#FastAPI', '#PostgreSQL', '#AI', '#Docker', '#Kubernetes'],
    titleColor: '#a78bfa',
    subColor: '#a78bfa',
    imgBg: 'linear-gradient(135deg,#1a0a3a,#2a0a5a)',
    imgEmoji: '🚗',
    link: 'https://github.com/kathirvel-p22/Aivonity_App',
    side: 'left',
  },
  {
    title: 'Exam Hall Allocation – Full Stack Web Application',
    sub: 'PHP, MySQL, JavaScript, Bootstrap',
    desc: 'Developed and engineered exam hall allocation system for 500+ students with smart seat management and real-time tracking. Implemented role-based authentication reducing manual allocation effort by 80% with secure automated report generation.',
    tags: ['#PHP', '#MySQL', '#JavaScript', '#Bootstrap'],
    titleColor: '#f97316',
    subColor: '#f97316',
    imgBg: 'linear-gradient(135deg,#1a0a0a,#2a1010)',
    imgEmoji: '📝',
    link: 'https://github.com/kathirvel-p22/Exam_Hallallocation_Management',
    side: 'right',
  },
  {
    title: 'Java Search Engine – Advanced Web Search Platform',
    sub: 'Java, Swing, Web Crawling',
    desc: 'Engineered Google-like search engine with Boolean queries, relevance ranking, and real-time web search capabilities. Designed smart word suggestion system and optimized keyword indexing improving retrieval speed by 60%.',
    tags: ['#Java', '#Swing', '#Web Crawling', '#Algorithms'],
    titleColor: '#3b82f6',
    subColor: '#3b82f6',
    imgBg: 'linear-gradient(135deg,#0a1020,#0d1a30)',
    imgEmoji: '🔍',
    link: 'https://github.com/kathirvel-p22/Search-Engine-in-Java',
    side: 'left',
  },
  {
    title: 'JeduAI – Smart Learning & Assessment Platform',
    sub: 'Flutter, Dart, Google Gemini AI',
    desc: 'Created and architected AI-powered educational platform with automated assessments serving 100+ users with real-time tutoring and multilingual support. Designed role-based portals for students, staff, and administrators using Google Gemini AI integration.',
    tags: ['#Flutter', '#Dart', '#Google Gemini AI', '#Education'],
    titleColor: '#10b981',
    subColor: '#10b981',
    imgBg: 'linear-gradient(135deg,#0a1a10,#0d2a18)',
    imgEmoji: '🎓',
    link: 'https://github.com/kathirvel-p22/JeduAi',
    side: 'right',
  },
];

function ProjectItem({ project, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isRight = project.side === 'right';

  return (
    <div className={`project-row reveal ${isRight ? 'row-reverse' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      {/* Info */}
      <div className="project-info">
        <h3 style={{ color: project.titleColor }}>{project.title}</h3>
        {project.sub && <div className="project-sub" style={{ color: project.subColor }}>{project.sub}</div>}
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
        </div>
      </div>

      {/* Dot */}
      <div className="project-center">
        <div className="project-dot" style={{ background: project.titleColor, boxShadow: `0 0 15px ${project.titleColor}55` }} />
      </div>

      {/* Image */}
      <div className="project-img-wrap">
        <div className="project-img-placeholder" style={{ background: project.imgBg }}>
          <span>{project.imgEmoji}</span>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">View Project →</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const refs = [useRef(null), useRef(null)];
  useEffect(() => {
    refs.forEach(r => {
      if (!r.current) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) r.current.classList.add('visible'); }, { threshold: 0.1 });
      obs.observe(r.current);
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title reveal" ref={refs[0]}>Latest <span>Works</span></h2>
      <div className="section-line reveal" ref={refs[1]} />

      <div className="projects-timeline">
        <div className="timeline-line" />
        {projects.map((p, i) => <ProjectItem key={i} project={p} index={i} />)}
      </div>

      {/* Note box */}
      <div className="project-note reveal">
        <p>
          <span className="note-label">Achievements:</span> Solved 155+ LeetCode problems (Java) with 69-day coding streak. 
          Active GitHub contributor with full stack and AI projects. Participated in Tata Crucible, Tata Imagination Challenge, and national-level technical competitions.
        </p>
        <div className="currently-bar">
          <span className="dot-live" />
          <span>PROFESSIONAL STRENGTHS</span>
          <span className="mastering-badge">Scalable Application Design</span>
          <span className="mastering-badge">AI-Integrated Development</span>
          <span className="mastering-badge">Clean Code & Architecture</span>
        </div>
      </div>
    </section>
  );
}
