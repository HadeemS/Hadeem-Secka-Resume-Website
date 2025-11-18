# Aaron Williams - Resume Portfolio Website

A modern, high-energy portfolio website built with React + Vite featuring a dark galaxy theme with smooth animations and responsive design.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
  ├── main.jsx              # React entry point
  ├── App.jsx               # Main app component with routing logic
  ├── index.css             # Global styles (dark galaxy theme)
  ├── data/
  │   └── siteData.js       # All your content - customize here!
  └── components/
      ├── AnimatedBackground.jsx
      ├── Navbar.jsx
      ├── Hero.jsx
      ├── About.jsx
      ├── Skills.jsx
      ├── Experience.jsx
      ├── Projects.jsx
      ├── Contact.jsx
      ├── Footer.jsx
      └── BackToTopButton.jsx
```

## ✏️ Customization

### Update Your Content

Edit `src/data/siteData.js` to customize:
- **Hero section**: Name, tagline, description
- **About**: Bio paragraphs
- **Skills**: Technology categories and skills
- **Projects**: Project details, links, tech stacks
- **Experience**: Roles, companies, dates, bullet points
- **Social Links**: Email, GitHub, LinkedIn URLs

### Update Colors & Theme

Edit CSS variables in `src/index.css` (the `:root` section):
- `--accent`: Main accent color (neon cyan)
- `--accent-soft`: Secondary accent (electric indigo)
- `--accent-pink`: Tertiary accent (magenta)
- `--bg-main`: Background color
- Adjust other variables as needed

### Add Your Links

In `src/data/siteData.js`, replace all placeholder URLs:
- Project `liveUrl` and `codeUrl` fields
- `socialLinks.email`
- `socialLinks.github`
- `socialLinks.linkedin`

## 🎨 Features

- ✅ Dark galaxy/space theme with animated background
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Active section highlighting in navbar
- ✅ Back-to-top button
- ✅ Glassmorphism effects
- ✅ Hover animations on cards and buttons
- ✅ Accessible (semantic HTML, ARIA labels)
- ✅ Keyboard navigation support

## 📝 Notes

- The contact form is UI-only (no backend). You can integrate with a service like Formspree, EmailJS, or your own API later.
- The navbar links are hidden on mobile for simplicity. You can add a hamburger menu later if needed.
- All animations respect `prefers-reduced-motion` for accessibility.

## 🛠️ Tech Stack

- React 18
- Vite 5
- Pure CSS (no CSS frameworks)
- Vanilla JavaScript (no animation libraries)

## 📄 License

Personal project - customize freely!

---

Built with ❤️ using React & Vite

