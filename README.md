# 🚀 Kathirvel P - Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A premium, modern portfolio showcasing full-stack development expertise with stunning animations and interactive features**

[🌐 Live Demo](#) • [📧 Contact](mailto:mpmahendhira@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/kathirvel-p-981092330/)

</div>

---

## ✨ Features

### 🎨 **Premium Design**
- 🌊 **WebGL Fluid Cursor Animation** - Interactive fluid dynamics that follow your mouse
- 🎯 **Rotating Tech Orbit** - Animated tech stack icons orbiting around profile picture
- ⚡ **Smooth Scroll Animations** - Reveal animations on scroll with intersection observer
- 🎭 **Glassmorphism Effects** - Modern frosted glass UI elements
- 🌈 **Gradient Accents** - Beautiful blue gradient theme throughout

### 🛠️ **Interactive Components**
- 📱 **Responsive Navigation** - Premium animated navbar with hover effects
- 🎪 **Animated Timeline** - Project showcase with flowing spark effects
- 📊 **Tech Stack Grid** - Organized skill categories with icon cards
- 🎓 **Experience Timeline** - Work experience, education, and certifications
- ❓ **Accordion FAQs** - Smooth expanding FAQ section
- 📬 **Contact Form** - EmailJS integration for direct messaging
- 🗺️ **Google Maps** - Embedded location map

### 🚀 **Performance Optimized**
- ⚡ Fast loading with optimized assets
- 📱 Fully responsive across all devices
- 🎯 SEO optimized with meta tags
- ♿ Accessibility compliant
- 🔧 Clean, maintainable code structure

---

## 🎯 Tech Stack

### **Frontend**
```
⚛️  React 18          - Modern UI library
🎨  CSS3              - Advanced styling with animations
🌊  WebGL             - Fluid cursor effects
📐  Flexbox/Grid      - Responsive layouts
```

### **Tools & Libraries**
```
📧  EmailJS           - Contact form integration
🗺️  Google Maps API   - Location embedding
🎭  Intersection Observer - Scroll animations
🎨  Simple Icons CDN  - Tech stack icons
```

### **Fonts**
```
✍️  Space Grotesk     - Modern sans-serif
💻  Fira Code         - Monospace for code
🎨  Roboto            - Clean hierarchy
```

---

## 📂 Project Structure

```
kathir-portfolio/
│
├── 📁 public/
│   ├── index.html          # HTML template with meta tags
│   └── favicon.png         # Custom favicon
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.js/css       # 🧭 Premium animated navigation
│   │   ├── Hero.js/css         # 🎯 Hero with rotating tech orbit
│   │   ├── About.js/css        # 📖 Experience & education timeline
│   │   ├── Skills.js/css       # 💪 Tech stack expertise grid
│   │   ├── Projects.js/css     # 🚀 Animated project showcase
│   │   ├── FAQs.js/css         # ❓ Accordion FAQ section
│   │   ├── Contact.js/css      # 📬 Contact form + map
│   │   ├── Footer.js/css       # 🔗 Social links & info
│   │   ├── FAB.js/css          # ⬆️ Floating action button
│   │   ├── SplashCursor.js     # 🌊 WebGL fluid animation
│   │   └── useReveal.js        # ✨ Scroll reveal hook
│   │
│   ├── App.js              # Main app component
│   ├── App.css             # Global app styles
│   ├── index.js            # React entry point
│   ├── index.css           # CSS variables & base styles
│   ├── hero.png            # Profile image
│   └── Kathirvel_P_Resume.pdf  # Downloadable resume
│
├── package.json            # Dependencies
├── .gitignore             # Git ignore rules
└── README.md              # You are here! 📍
```

---

## 🚀 Quick Start

### Prerequisites
```bash
📦 Node.js v16+ 
📦 npm or yarn
```

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/kathirvel-p22/Kathirvel-Portfolio.git

# 2️⃣ Navigate to project directory
cd Kathirvel-Portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm start

# 🎉 Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed! 🚀
```

---

## 🎨 Customization Guide

### 🎨 **Colors & Theme**
Edit CSS variables in `src/index.css`:
```css
:root {
  --blue: #2563eb;          /* Primary blue */
  --blue-light: #60a5fa;    /* Light blue accent */
  --bg: #0a0e17;            /* Dark background */
  --text: #e2e8f0;          /* Light text */
  /* ... more variables */
}
```

### 🖼️ **Profile Image**
Replace `src/hero.png` with your photo (recommended: 500x500px)

### 📄 **Resume**
Replace `src/Kathirvel_P_Resume.pdf` with your resume

### 📧 **Contact Form**
Update EmailJS credentials in `src/components/Contact.js`:
```javascript
const serviceID = 'your_service_id';
const templateID = 'your_template_id';
const publicKey = 'your_public_key';
```

### 🔗 **Social Links**
Update links in `src/components/Footer.js`:
```javascript
WhatsApp: https://wa.me/YOUR_NUMBER
LinkedIn: https://linkedin.com/in/YOUR_PROFILE
GitHub: https://github.com/YOUR_USERNAME
```

---

## 🌐 Deployment

### **Deploy to Vercel** (Recommended)
```bash
# 1️⃣ Install Vercel CLI
npm i -g vercel

# 2️⃣ Deploy
vercel

# ✅ Your site is live!
```

### **Deploy to Netlify**
```bash
# 1️⃣ Build the project
npm run build

# 2️⃣ Drag & drop the 'build' folder to Netlify
# Or connect your GitHub repo for auto-deployment
```

### **Deploy to GitHub Pages**
```bash
# 1️⃣ Install gh-pages
npm install --save-dev gh-pages

# 2️⃣ Add to package.json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# 3️⃣ Deploy
npm run deploy
```

---

## 🎯 Key Highlights

### 💼 **Professional Experience**
- 🏢 Software Engineering Intern at Brainery Spot Technology
- 🚀 Built scalable applications serving 500+ users
- 🤖 AI/ML integration with Google Gemini AI
- 🐳 Docker & Kubernetes deployment experience

### 🏆 **Featured Projects**
- 🚗 **AIVONITY** - AI-powered vehicle health platform
- 📝 **Exam Hall Allocation** - Smart seat management system
- 🔍 **Java Search Engine** - Google-like search with ranking
- 🎓 **JeduAI** - AI-powered learning platform

### 💪 **Technical Skills**
- **Languages**: Java, Python, JavaScript, Dart
- **Frontend**: React, HTML5, CSS3, Tailwind
- **Backend**: Spring Boot, REST APIs, PHP
- **Database**: MySQL, PostgreSQL
- **AI/ML**: Machine Learning, Computer Vision, Prompt Engineering
- **Tools**: Git/GitHub, Docker, VS Code, XAMPP

### 🎓 **Education**
- 🎓 B.Tech in Computer Science Engineering
- 🏫 V.S.B Engineering College
- 📊 CGPA: 8.39/10

---

## 📊 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=kathirvel-p22&show_icons=true&theme=tokyonight)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=kathirvel-p22&layout=compact&theme=tokyonight)

</div>

---

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kathirvel-p-981092330/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kathirvel-p22)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/918637684914)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mpmahendhira@gmail.com)

</div>

---

## 📝 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

---

## 💖 Acknowledgments

- 🎨 Design inspiration from modern portfolio trends
- 🌊 WebGL fluid animation concept
- ⚛️ React community for amazing tools
- 🎯 All open-source contributors

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ by Kathirvel P**

*Aspiring Software Engineer building scalable, high-performance applications*

</div>
