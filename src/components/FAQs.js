import React, { useState, useRef, useEffect } from 'react';
import './FAQs.css';

const faqs = [
  { q: 'What technologies do you specialize in?', a: 'I specialize in Java, Python, JavaScript, and Dart. For frontend, I work with React.js, HTML5, CSS3, and Tailwind CSS. On the backend, I use Spring Boot, REST APIs, and PHP. I have experience with MySQL and PostgreSQL databases, and I integrate AI/ML capabilities using Machine Learning, Computer Vision, and Google Gemini AI.' },
  { q: 'What kind of projects have you built?', a: "I've built AIVONITY (AI-powered vehicle health platform with Flutter and FastAPI), an Exam Hall Allocation system for 500+ students using PHP and MySQL, a Java Search Engine with advanced web crawling, and JetraAI (educational platform with Google Gemini AI integration). Each project focuses on scalability and real-world problem-solving." },
  { q: 'Do you have experience with DevOps and Deployment?', a: "Yes. I have hands-on experience with Docker and Kubernetes for containerization and orchestration. I deployed AIVONITY using scalable cloud infrastructure with Docker and Kubernetes. I'm comfortable with Git/GitHub workflows and version control practices." },
  { q: 'How do you ensure code quality and stability?', a: 'I follow clean code principles and OOPS concepts. I implement proper data structures and algorithms for optimal performance. I conduct software testing to ensure reliability. My projects include role-based authentication and secure automated systems, reducing manual effort by up to 80%.' },
  { q: 'Do you have full-stack development experience?', a: "Absolutely. I completed a Full Stack Development Internship at Brainery Spot Technology where I engineered frontend and backend components using React, Spring Boot, and MySQL. I've built complete applications handling database design, REST APIs, and responsive UI/UX, reducing response time by 40% through optimized API design." },
  { q: 'Are your projects mobile responsive?', a: 'Yes — I build mobile-first applications using Flutter for cross-platform development. My JetraAI platform serves 100+ users with real-time tutoring on mobile devices. I also ensure web applications are fully responsive using Tailwind CSS and Bootstrap for optimal viewing across all screen sizes.' },
  { q: 'How do you optimize application performance?', a: 'I focus on algorithm optimization and efficient data structures. In my Java Search Engine, I improved keyword indexing retrieval speed by 60%. For the Exam Hall Allocation system, I implemented smart seat management with real-time tracking. I use proper database indexing and query optimization for faster data processing.' },
  { q: 'What is your approach to security?', a: 'Security is a priority in all my projects. I implement role-based authentication, secure automated report generation, and proper input validation. I follow best practices for database security, use environment variables for sensitive data, and ensure proper error handling to prevent security vulnerabilities.' },
  { q: 'What are you currently learning or improving?', a: "I'm currently pursuing B.Tech in Computer Science and Business Systems (CGPA: 8.39/10). I'm actively solving LeetCode problems (155+ solved with 69-day streak) and participating in technical competitions. I'm also expanding my knowledge in AI-integrated development and scalable application design through various certifications." },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className={`faq-item reveal ${open ? 'open' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.05}s` }}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <div className="faq-icon">{open ? '×' : '+'}</div>
      </div>
      <div className={`faq-a ${open ? 'open' : ''}`}>{faq.a}</div>
    </div>
  );
}

export default function FAQs() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    refs.forEach(r => {
      if (!r.current) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) r.current.classList.add('visible'); }, { threshold: 0.1 });
      obs.observe(r.current);
    });
  }, []);
  return (
    <section id="faqs" className="faqs-section">
      <h2 className="section-title reveal" ref={refs[0]}>Technical <span>Insights</span></h2>
      <div className="section-line reveal" ref={refs[1]} />
      <p className="faqs-subtitle reveal" ref={refs[2]}>Explore my technical skills, thought process, and how I build scalable, aesthetic, and performant systems.</p>
      <div className="faqs-list">
        {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} />)}
      </div>
    </section>
  );
}
