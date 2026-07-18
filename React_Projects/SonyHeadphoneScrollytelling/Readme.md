# 🎧 Sony WH-1000XM6 Scrollytelling Experience

<p align="center">
  <b>An Apple-inspired Scrollytelling website built with React, Vite, and the HTML5 Canvas API.</b><br>
  Experience smooth scroll-driven storytelling powered by a 192-frame image sequence, interactive overlays, and a premium glassmorphism interface.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5)

</p>

<p align="start">
  <a href="https://sonywh1000.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-blue?style=for-the-badge" alt="Live Demo">
  </a>

  <a href="https://github.com/rajkumar1325/Projects/tree/main/React_Projects/SonyHeadphoneScrollytelling" target="_blank">
    <img src="https://img.shields.io/badge/📂%20Source%20Code-GitHub-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## 🌐 Live Demo

🚀 **Experience the website here**

**👉 https://sonywh1000.vercel.app**

---

## 🎥 Preview

<p align="center">

  <img width="800" height="500" alt="ScreenRecording2026-07-18at11 31 09PM-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/7dafe2db-75f5-4513-a743-a3ce93e10617" />

</p>

---

# ✨ Features

- 🎬 Apple-inspired Scrollytelling experience
- 🖼️ 192-frame image sequence animation
- 📜 Scroll-driven storytelling
- 🎨 Sticky HTML5 Canvas rendering
- ⚡ Smooth frame interpolation using `requestAnimationFrame`
- 📊 Interactive technical specifications section
- 🌫️ Modern Glassmorphism UI
- 📱 Fully responsive layout
- 🚀 Asset preloading with animated loading screen

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| **React 19** | UI Development |
| **Vite** | Development & Bundling |
| **HTML5 Canvas API** | Image Sequence Rendering |
| **Framer Motion** | UI Animations |
| **Lucide React** | Icons |
| **Vanilla CSS** | Styling |
| **Oxlint** | Code Linting |

---

# ⚙️ How It Works

Instead of using a video, the animation is created from **192 high-resolution image frames**.

As the user scrolls:

- All image frames are preloaded.
- Scroll position is converted into the corresponding animation frame.
- A `requestAnimationFrame()` loop smoothly interpolates between frames using **Linear Interpolation (LERP)**.
- The selected frame is rendered onto an **HTML5 Canvas**.
- Floating overlays animate in sync with the user's scroll position.

This technique provides smooth reverse playback, precise animation control, and higher visual quality than traditional video-based animations.

---

# 📂 Project Structure

```text
SonyHeadphoneScrollytelling/
│
├── public/
│   └── asset_image/
│       ├── ezgif-frame-001.jpg
│       ├── ...
│       └── ezgif-frame-192.jpg
│
├── screenshots/
│   └── preview.gif
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Scrollytell.jsx
│   │   ├── Specs.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

# 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/rajkumar1325/Projects.git
```

### Navigate to the project

```bash
cd Projects/React_Projects/SonyHeadphoneScrollytelling
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

# 🚀 Future Improvements

- GSAP + ScrollTrigger implementation
- Lenis smooth scrolling
- Three.js / React Three Fiber version
- Product color selector
- Sound interaction
- Accessibility improvements
- Enhanced mobile optimization

---

# 🙏 Inspiration

Inspired by the premium product storytelling experiences found on Apple's flagship product pages and modern interactive hardware showcases.

---

# ⭐ Support

If you enjoyed this project, consider:

- ⭐ Starring this repository
- 🍴 Forking the project
- 🛠️ Contributing improvements

---

---

# 👨‍💻 About the Developer

Hi, I'm **Raj Kumar**, a Full Stack Developer passionate about building modern web experiences, interactive UI, and scalable applications.

If you enjoyed this project, feel free to connect with me!

<p align="center">

<a href="https://github.com/rajkumar1325">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github">
</a>

<a href="https://www.linkedin.com/in/rajkumar0104/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin">
</a>

<a href="mailto:Rajkumar.rk0104@gmail.com">
  <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail">
</a>

</p>
