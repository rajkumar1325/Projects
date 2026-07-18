# 🎧 Sony WH-1000XM6 Scrollytelling Experience

<p align="center">

A premium **Apple-inspired Scrollytelling** experience built with **React**, **Vite**, and the **HTML5 Canvas API**, featuring a smooth **192-frame image sequence animation**, immersive scroll-linked storytelling, floating content overlays, and a modern glassmorphic interface.

Designed to demonstrate how high-end product landing pages are engineered using **Scroll-Driven Animations**, **Canvas Rendering**, and **Interactive UI Motion**.

<br>

<img src="./preview.gif" width="100%" alt="Sony Scrollytelling Preview">

</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3)

</p>

---

# ✨ Live Demo

> **Coming Soon**

---

# 📖 Overview

This project recreates the premium storytelling experience commonly seen on flagship product websites such as Apple and Sony.

Instead of playing a traditional video, the product animation is rendered using a sequence of **192 high-resolution image frames** that are synchronized directly with the user's scroll position.

The result is a cinematic, buttery-smooth browsing experience where scrolling becomes the animation timeline.

---

# ✨ Features

### 🎬 Apple-style Scrollytelling

Scroll becomes the animation controller.

Instead of watching a video, users literally control the playback frame-by-frame while scrolling.

---

### 🖼️ Canvas Image Sequence Rendering

- 192 pre-rendered HD frames
- HTML5 Canvas rendering
- High DPI support
- Responsive scaling
- Extremely smooth frame transitions

---

### 🎯 Scroll-Driven Animation Engine

Unlike time-based animations:

✔ Scroll down → animation moves forward

✔ Scroll up → animation reverses

✔ Stop scrolling → animation pauses instantly

Everything is directly linked to scroll progress.

---

### 🎞️ Image Sequence Scrubbing

Rather than loading a video, every animation frame is an individual image.

```
Frame 001
Frame 002
Frame 003
...
Frame 192
```

As the scroll position changes, the appropriate frame is rendered onto the canvas.

This technique is widely used on premium product landing pages because it offers:

- Higher image quality
- Better browser compatibility
- Frame-perfect control
- Smooth reverse playback

---

### 🚀 Smooth Frame Interpolation (LERP)

Directly jumping between frames causes noticeable jitter.

To solve this, the rendering engine uses **Linear Interpolation (LERP)** inside a continuous `requestAnimationFrame()` loop.

```javascript
currentFrame += (targetFrame - currentFrame) * 0.09;
```

This damping technique creates:

- buttery smooth transitions
- cinematic movement
- natural easing
- no frame skipping

---

### 📜 Sticky Canvas Rendering

The product remains fixed while the page scrolls underneath.

```
Canvas
   │
   │  (Sticky)
   │
────────────── Scroll
────────────── Scroll
────────────── Scroll
```

This allows the animation to remain centered while different story sections appear around it.

---

### 💬 Floating Storytelling Overlays

Content cards appear only during specific scroll ranges.

Each overlay smoothly:

- fades in
- slides upward
- remains visible
- fades out

The animation timing is calculated entirely from the current scroll percentage.

---

### 📊 Interactive Technical Specifications

The specifications section includes:

- Animated category switching
- Smooth active indicator
- Dynamic content rendering
- Glassmorphism design
- Responsive layout

Framer Motion powers the animated tab transitions.

---

### 🎨 Modern UI Design

Features include:

- Glassmorphism
- Soft gradients
- Blur effects
- Premium typography
- Responsive layout
- Dark theme
- Modern spacing system

---

### ⚡ Smart Asset Preloading

Before rendering begins:

- all 192 frames are preloaded
- loading percentage updates live
- progress bar animates
- application waits until every frame is available

This eliminates animation hiccups during scrolling.

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React 19 | Component Architecture |
| Vite | Lightning-fast Development Server |
| Framer Motion | UI Animations |
| HTML5 Canvas API | Image Sequence Rendering |
| Vanilla CSS | Styling |
| Lucide React | Icons |
| Oxlint | Code Linting |

---

# 🧠 How the Scrollytelling Engine Works

## Step 1 — Preload Assets

```
192 Images

↓

Browser Memory
```

Every frame is loaded before the application becomes interactive.

---

## Step 2 — Track Scroll Progress

```
Window Scroll

↓

Scroll Percentage

↓

Target Frame
```

The current scroll position is converted into an image frame index.

---

## Step 3 — Smooth Interpolation

```
Target Frame

↓

LERP

↓

Current Frame
```

Rather than jumping instantly, the animation eases naturally toward the destination frame.

---

## Step 4 — Canvas Rendering

```
Current Frame

↓

drawImage()

↓

Canvas
```

Each frame is rendered directly onto an HTML5 Canvas.

---

## Step 5 — Overlay Synchronization

Every overlay calculates:

- opacity
- translateY
- visibility

using the exact same scroll percentage.

As a result, both the animation and text remain perfectly synchronized.

---

# ⚙️ Technical Highlights

✔ Scroll-linked animations

✔ Image sequence scrubbing

✔ Canvas rendering pipeline

✔ requestAnimationFrame rendering loop

✔ Linear interpolation (LERP)

✔ Sticky rendering

✔ Responsive canvas scaling

✔ High-DPI rendering

✔ Asynchronous image preloading

✔ Framer Motion layout animations

✔ Glassmorphism UI

✔ Modular React architecture

---

# 📁 Folder Structure

```text
sony-scrollytelling/
│
├── public/
│   └── asset_image/
│       ├── ezgif-frame-001.jpg
│       ├── ...
│       └── ezgif-frame-192.jpg
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
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/yourusername/sony-scrollytelling.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# 📸 Screenshots

> Add screenshots or GIFs here.

```
Hero Section

Animation

Technical Specs

Footer
```

---

# 🔮 Future Improvements

- GSAP ScrollTrigger integration
- Lenis smooth scrolling
- Three.js version
- React Three Fiber support
- Mobile performance optimization
- Accessibility improvements
- Dark/Light themes
- Sound effects
- Product configurator
- Multiple product color variants

---

# 🙏 Inspiration

Inspired by the interactive product storytelling experiences found on premium hardware websites, particularly Apple's flagship product pages and modern Sony product showcases.

---

# ⭐ If You Like This Project

If this project helped or inspired you:

⭐ Star this repository

🍴 Fork it

🛠️ Build something awesome with it

Your support helps the project reach more developers!

---

## 📄 License

This project is intended for **educational and portfolio purposes**.

All product names, trademarks, and brand assets belong to their respective owners.

The implementation demonstrates front-end animation techniques and does not imply any official affiliation with Sony.
