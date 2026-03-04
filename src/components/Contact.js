import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    refs.forEach(r => {
      if (!r.current) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) r.current.classList.add('visible'); }, { threshold: 0.1 });
      obs.observe(r.current);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // EmailJS configuration
    const serviceID = 'service_etak3bm';
    const templateID = 'template_lv7yr95';
    const publicKey = 'BXuwt-ypXxL3HYQro';

    // Send form directly using emailjs.sendForm
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setSent(true);
        setSending(false);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSending(false);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title reveal" ref={refs[0]}>Get In <span>Touch</span></h2>
      <div className="section-line reveal" ref={refs[1]} />
      <p className="contact-subtitle reveal" ref={refs[2]}>Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>

      <div className="contact-grid">
        {/* Form */}
        <div className="contact-form-wrap reveal" ref={refs[3]}>
          <h3>Send a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={form.name} 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={form.subject} 
                onChange={e => setForm({ ...form, subject: e.target.value })} 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                value={form.message} 
                onChange={e => setForm({ ...form, message: e.target.value })} 
                required 
              />
            </div>
            <button type="submit" className="btn-send" disabled={sending}>
              {sending ? 'Sending...' : sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            {sent && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.8rem', 
                background: 'rgba(34, 197, 94, 0.15)', 
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '8px',
                color: '#4ade80',
                textAlign: 'center',
                fontSize: '0.95rem'
              }}>
                ✓ Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* Info */}
        <div className="contact-info reveal" ref={refs[4]}>
          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div>
              <h4>EMAIL</h4>
              <p>kathirvel.p2006@gmail.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div>
              <h4>LOCATION</h4>
              <p>Musiri, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="map-box">
            <iframe
              title="Musiri Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.844738!2d78.4775094!3d10.9587831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa510052a08149%3A0xbbc9f48255fbb7e9!2sPeriyasamy%20Mookkayi%20Home!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
