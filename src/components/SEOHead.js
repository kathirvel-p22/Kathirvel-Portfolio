import { Helmet } from 'react-helmet-async';

export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kathirvel-p.netlify.app/#person",
        "name": "Kathirvel P",
        "url": "https://kathirvel-p.netlify.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://kathirvel-p.netlify.app/hero-preview.webp",
          "width": 420,
          "height": 420
        },
        "jobTitle": "AI Developer & MERN Stack Developer",
        "description": "AI and MERN Stack developer specializing in cybersecurity, multilingual AI systems, and mobile applications",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "V.S.B Engineering College",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Karur",
            "addressCountry": "IN"
          }
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "MERN Stack Development",
          "React.js",
          "Node.js",
          "Python",
          "Java",
          "Cybersecurity",
          "Mobile App Development",
          "Full Stack Development",
          "Spring Boot",
          "Flutter",
          "MySQL",
          "PostgreSQL"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Software Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "India"
          }
        },
        "sameAs": [
          "https://github.com/kathirvel-p22",
          "https://linkedin.com/in/kathirvel-p"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kathirvel-p.netlify.app/#website",
        "url": "https://kathirvel-p.netlify.app",
        "name": "Kathirvel P - AI Developer & MERN Stack Developer",
        "description": "Portfolio of Kathirvel P, an AI and MERN Stack developer specializing in cybersecurity, multilingual AI systems, and mobile applications",
        "publisher": {
          "@id": "https://kathirvel-p.netlify.app/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kathirvel-p.netlify.app/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://kathirvel-p.netlify.app/#webpage",
        "url": "https://kathirvel-p.netlify.app",
        "name": "Kathirvel P | AI Developer | MERN Stack Developer | Researcher",
        "isPartOf": {
          "@id": "https://kathirvel-p.netlify.app/#website"
        },
        "about": {
          "@id": "https://kathirvel-p.netlify.app/#person"
        },
        "description": "Kathirvel P is an AI and MERN Stack developer specializing in cybersecurity, multilingual AI systems, mobile applications, and research. Building scalable, high-performance applications with React, Node.js, Python, and Java."
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}