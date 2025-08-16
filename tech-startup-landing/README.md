# Tech Startup Landing Page

A modern, animated landing page for tech startups built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient effects and glassmorphism
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered animations
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Interactive Components**: Hover effects, animated cards, and engaging UI elements
- **Performance Optimized**: Fast loading with optimized animations

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-startup-landing.git
cd tech-startup-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Hero section with animated background
│   ├── Features.tsx    # Features grid with hover animations
│   ├── About.tsx       # About section with parallax
│   ├── TechStack.tsx   # Tech stack with 3D cards
│   ├── Contact.tsx     # Contact form with validation
│   └── Footer.tsx      # Footer with animated links
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Tailwind directives
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update the content in each component file to match your startup's information.

### Animations
Modify Framer Motion variants in each component for custom animations.

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:
```bash
npx vercel
```

### Deploy to Netlify:
```bash
npx netlify deploy --prod --dir=build
```

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email hello@techstartup.com or open an issue on GitHub.

---

Made with ❤️ by TechStartup Team
