# Harsh Portfolio - React.js

A complete modern portfolio website built with React.js.

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

## 📁 Project Structure
```
src/
  components/
    Navbar.js/css     - Fixed navigation bar
    Hero.js/css       - Hero section with orbit animation
    About.js/css      - Timeline: Work, Education, Certs + Philosophy
    Skills.js/css     - Tech stack with real SVG icons
    Projects.js/css   - Timeline project showcase
    FAQs.js/css       - Accordion FAQ section
    Contact.js/css    - Contact form + Google Map
    Footer.js/css     - Footer with social links
    FAB.js/css        - Floating action button
```

## 🖼️ Adding Your Photo

In `Hero.js`, replace the profile placeholder:

```jsx
// Find this in Hero.js:
<span className="profile-emoji">👨‍💻</span>

// Replace with:
<img src="/your-photo.jpg" alt="Harsh Kumar" />
```

Then add your photo to the `public/` folder.

## 🔧 Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Content**: All content is in the component files
- **Resume link**: Update the `href` in `Navbar.js`
- **Social links**: Update hrefs in `Footer.js`
- **Contact form**: Connect to EmailJS by adding the emailjs SDK

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com):
1. Push to GitHub
2. Import in Vercel
3. Deploy

## Tech Stack
- React 18
- CSS Modules
- SimpleIcons CDN (tech logos)
- Google Fonts (Space Grotesk + Fira Code)
- Google Maps Embed API
