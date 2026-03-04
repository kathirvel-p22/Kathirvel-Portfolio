import React from 'react';
import useReveal from './useReveal';
import './About.css';

const workExp = [
  { icon: '💼', title: 'Full Stack Development Intern', org: 'Brainery Spot Technology', badge: 'June 2024 – July 2024', badgeClass: 'badge-blue', desc: 'Engineered frontend and backend components for web applications using React, Spring Boot, and MySQL. Designed and built REST APIs for real-time data processing, reducing response time by 40% via Git/GitHub collaboration.' },
];

const education = [
  { icon: '🎓', title: 'B.Tech – Computer Science and Business Systems', org: 'V.S.B Engineering College, Karur', badge: '2023 – 2027', badgeClass: 'badge-blue', desc: 'CGPA: 8.39 / 10' },
  { icon: '🏫', title: 'Higher Secondary (XII)', org: 'Government Boys Higher Secondary School, Musiri', badge: '2023', badgeClass: 'badge-orange', desc: 'Percentage: 81.33%' },
];

const certs = [
  { icon: '📜', title: 'Artificial Intelligence: Concepts and Techniques', org: 'NPTEL (IISc Bangalore)', badge: '2024', badgeClass: 'badge-blue', desc: 'Comprehensive study of AI fundamentals, machine learning algorithms, and practical applications.' },
  { icon: '🥇', title: 'Java Full Stack Developer', org: 'Infosys Springboard', badge: '2024', badgeClass: 'badge-orange', desc: 'Mastered Java, Spring Boot, REST APIs, and full stack development practices.' },
  { icon: '🎯', title: 'Prompt Engineering for ChatGPT', org: 'Vanderbilt University (Coursera)', badge: '2024', badgeClass: 'badge-green', desc: 'Advanced techniques for effective AI prompt design and optimization.' },
  { icon: '📊', title: 'Foundations of Project Management', org: 'Google (Coursera)', badge: '2024', badgeClass: 'badge-blue', desc: 'Project planning, execution, and agile methodologies.' },
  { icon: '🏆', title: 'Salesforce Agenforce Champion – FutureSkills Prime', org: 'NASSCOM', badge: '2024', badgeClass: 'badge-orange', desc: 'Salesforce platform expertise and cloud-based solutions.' },
  { icon: '💻', title: 'Java (Basic)', org: 'HackerRank', badge: '2024', badgeClass: 'badge-green', desc: 'Certified in Java programming fundamentals and problem-solving.' },
];

const philosophy = [
  { key: 'Java, Python, JavaScript, Dart', desc: 'Proficient in multiple programming languages with strong problem-solving skills. Solved 155+ LeetCode problems with a 69-day coding streak.' },
  { key: 'React.js, Spring Boot, Flutter', desc: 'Building scalable web and mobile applications with modern frameworks. Focus on clean architecture and performance optimization.' },
  { key: 'MySQL, PostgreSQL, REST APIs', desc: 'Designing robust database schemas and RESTful APIs for real-time data processing and secure backend systems.' },
  { key: 'Machine Learning, AI, Computer Vision', desc: 'Integrating AI capabilities into applications using Google Gemini AI, prompt engineering, and computer vision techniques.' },
];

function TimelineSection({ title, items, delay = 0 }) {
  const ref = useReveal();
  return (
    <div className={`reveal`} ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <h3 className="timeline-section-header">{title}</h3>
      <div className="timeline-wrap">
        {items.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot">{item.icon}</div>
            <h4>{item.title}</h4>
            <div className="tl-org">📍 {item.org}</div>
            <span className={`tl-badge ${item.badgeClass}`}>{item.badge}</span>
            {item.desc && <p>{item.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const titleRef = useReveal();
  const lineRef = useReveal();
  const philoRef = useReveal();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title reveal" ref={titleRef}>About My <span>Journey</span></h2>
      <div className="section-line reveal" ref={lineRef} />

      <div className="about-grid">
        {/* Left */}
        <div className="about-left">
          <TimelineSection title="Work Experience" items={workExp} delay={0} />
          <TimelineSection title="Education Background" items={education} delay={0.1} />
          <TimelineSection title="Certifications" items={certs} delay={0.2} />
        </div>

        {/* Right */}
        <div className="about-right">
          <div className="reveal" ref={philoRef}>
            <div className="philo-box">
              <h3>My Development Philosophy</h3>
              <ul>
                {philosophy.map((p, i) => (
                  <li key={i}><strong>{p.key}:</strong> {p.desc}</li>
                ))}
              </ul>
            </div>

            <div className="trait-grid">
              <div className="trait-card">
                <div className="trait-icon">🧠</div>
                <h4>Problem Solving & Debugging</h4>
                <p>Strong analytical skills with adaptability and continuous learning mindset.</p>
              </div>
              <div className="trait-card">
                <div className="trait-icon">🚀</div>
                <h4>Agile Practices</h4>
                <p>Leadership & team collaboration with focus on delivering high-quality solutions.</p>
              </div>
            </div>

            <div className="goal-box">
              <h4>Professional Strengths</h4>
              <div className="goal-chips">
                <span className="chip">Scalable Application Design</span>
                <span className="chip">AI-Integrated Development</span>
                <span className="chip">Clean Code & Architecture</span>
                <span className="chip">Problem Solving & Debugging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
