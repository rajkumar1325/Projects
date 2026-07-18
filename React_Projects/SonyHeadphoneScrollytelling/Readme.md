# 🎧 Sony WH-1000XM6 Scrollytelling Experience

<p align="center">
An Apple-inspired <b>scrollytelling</b> experience built with <b>React</b>, <b>Vite</b>, and the <b>HTML5 Canvas API</b>. The website transforms scrolling into an interactive storytelling experience by rendering a high-quality <b>192-frame image sequence</b>, creating smooth product animations commonly seen on premium hardware landing pages.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5)

</p>

<p align="center">
<img src="./preview.gif" alt="Sony Scrollytelling Preview" width="100%">
</p>

---

## 🌐 Live Demo

🔗 **Coming Soon**

---

# ✨ Features

- 🎬 Apple-inspired **Scrollytelling** experience
- 🖼️ **192-frame** canvas-based image sequence animation
- 📜 Scroll-driven storytelling with floating content overlays
- ⚡ Smooth frame interpolation using **requestAnimationFrame + LERP**
- 📊 Interactive specifications section powered by **Framer Motion**
- 🎨 Responsive glassmorphism interface
- 🚀 Asset preloading with animated loading screen
- 📱 Fully responsive layout

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Development |
| Vite | Fast Development & Bundling |
| HTML5 Canvas API | Image Sequence Rendering |
| Framer Motion | UI Animations |
| Lucide React | Icons |
| Vanilla CSS | Styling & Glassmorphism |
| Oxlint | Code Linting |

---

# ⚙️ How It Works

Instead of playing a video, the animation is generated from **192 high-resolution image frames**.

As the user scrolls:

- All frames are preloaded before the experience begins.
- The current scroll position is converted into a target frame.
- A `requestAnimationFrame()` loop smoothly interpolates toward that frame using Linear Interpolation (LERP).
- The selected frame is rendered onto an **HTML5 Canvas**, while content overlays animate in sync with the scroll progress.

This approach provides precise scroll control, smoother reverse playback, and higher visual quality than traditional video-based animations.

---

# 📁 Project Structure

```text
sony-scrollytelling/
│
├── public/
│   └── asset_image/          # 192 image sequence frames
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Loader.jsx        # Asset preloader
│   │   ├── Navbar.jsx        # Navigation
│   │   ├── Scrollytell.jsx   # Canvas rendering & scroll engine
│   │   ├── Specs.jsx         # Interactive specifications
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/sony-scrollytelling.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

# 📸 Screenshots

> Replace these placeholders with your project screenshots or GIFs.

| Hero Section | Product Animation |
|--------------|-------------------|
| ![](screenshots/hero.png) | ![](screenshots/animation.png) |

| Specifications | Footer |
|----------------|--------|
| ![](screenshots/specs.png) | ![](screenshots/footer.png) |

---

# 🚀 Future Improvements

- GSAP + ScrollTrigger integration
- Lenis smooth scrolling
- Three.js / React Three Fiber version
- Product color switcher
- Audio interaction
- Dark / Light theme toggle

---

# 🙌 Inspiration

This project is inspired by the premium product storytelling experiences found on modern hardware websites, where scrolling controls cinematic product animations to create an engaging user experience.

---

## ⭐ Support

If you enjoyed this project or found it useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 💡 Share your feedback or suggestions

---

## 📄 License

This project is created for **educational and portfolio purposes**.

Product names and trademarks belong to their respective owners.
