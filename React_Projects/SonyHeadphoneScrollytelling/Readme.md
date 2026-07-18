# Sony WH-1000XM6 Scrollytelling Showcase

A premium, interactive web experience showcasing the concept **Sony WH-1000XM6** headphones. Built using React and Vite, this project implements a hardware-accelerated **scrollytelling engine** that scrubs through a high-definition 3D image sequence dynamically as the user scrolls, creating a fluid product reveal inspired by Apple's marketing pages.

---

## 🛠️ Tech Stack & Design System

* **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (For ultra-fast, Hot Module Replacement development)
* **Animation & Motion**: [Framer Motion 12](https://www.framer.com/motion/) (For page transitions, loading screen fading, and specification tab transitions)
* **Icons**: [Lucide React](https://lucide.dev/) (For clean, modern interface iconography)
* **Styling**: Vanilla CSS (Built on custom CSS variables, glassmorphic cards, gradients, and typography using the *Inter* typeface)
* **Linter**: [Oxlint](https://github.com/oxc-project/oxc) (A Rust-based, high-performance linter for code health)

---

## 🌟 Key Features & Implementation Details

### 1. Asynchronous Asset Preloading & Loader
* **Component**: [`Loader.jsx`](file:///Users/rajkumar/Desktop/headphone%20project/src/components/Loader.jsx) and [`App.jsx`](file:///Users/rajkumar/Desktop/headphone%20project/src/App.jsx)
* **How it works**: Before displaying the landing page, `App.jsx` triggers a preloading sequence for all 192 image frames. It initializes `new Image()` instances and tracks their `onload` progress. This percentage is mapped to a premium, high-contrast overlay loader displaying a dynamic progress bar and custom tabular-num percentage. Once fully loaded, Framer Motion's `AnimatePresence` triggers a smooth, cubic-bezier fade-out.

### 2. Scroll-Scrubbed Canvas Renderer (Scrollytelling)
* **Component**: [`Scrollytell.jsx`](file:///Users/rajkumar/Desktop/headphone%20project/src/components/Scrollytell.jsx)
* **How it works**: Instead of using heavy, resource-intensive video files, the site converts a high-quality 3D render animation into a sequence of JPG frames. As the user scrolls through a `500vh` scroll-track container, the scroll offset calculates a `targetFrame`.
* **Lerp & Animation Loop**: To prevent stuttering, a `requestAnimationFrame` loop continuously runs to calculate the difference (`diff = targetFrame - currentFrame`). It applies a **linear interpolation (lerp) damping factor of `0.09`** to smoothly ease the frame transitions, drawing them onto an HTML5 `<canvas>` scaled for high Device Pixel Ratio (DPR).

### 3. Scroll-Linked Floating Overlays
* **Component**: [`Scrollytell.jsx`](file:///Users/rajkumar/Desktop/headphone%20project/src/components/Scrollytell.jsx) (via `getOverlayStyle()`)
* **How it works**: Transparent text card overlays are positioned on top of the sticky canvas. Their opacity and translation are dynamically computed using scroll boundaries (e.g., Hero starts at `0%` to `15%`, Acoustic isolation at `38%` to `64%`). As the user scrolls into a section's range, it slides up and fades in, and slides up and fades out as they scroll past it.

### 4. Technical Specifications Dashboard
* **Component**: [`Specs.jsx`](file:///Users/rajkumar/Desktop/headphone%20project/src/components/Specs.jsx)
* **How it works**: A categorization grid built with premium dark-mode glassmorphic cards (`backdrop-filter`). It features an interactive tab-bar that renders custom specs dynamically. Framer Motion's `layoutId="activeTabUnderline"` animates the active indicator line smoothly between tabs, avoiding rigid tab jumps.

---

## 📂 Project Structure

```bash
headphone-project/
├── public/
│   └── asset_image/            # 192 HD pre-rendered image frames (ezgif-frame-001.jpg - 192.jpg)
├── src/
│   ├── assets/                 # Local assets and brand materials
│   ├── components/             # Reusable UI Components
│   │   ├── Loader.jsx          # Initial asset preloader with tabular progress text
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with scroll indicators
│   │   ├── Scrollytell.jsx     # Sticky canvas rendering engine & scrolling overlays
│   │   ├── Specs.jsx           # Technical specifications dashboard with Framer-motion tabs
│   │   └── Footer.jsx          # Interactive footer with product copyright and site links
│   ├── App.css                 # Standard component CSS overrides
│   ├── App.jsx                 # Application entry point, preloads frames, orchestrates rendering
│   ├── index.css               # Design tokens, resets, utility classes, and glassmorphic variables
│   └── main.jsx                # React DOM initializer
├── index.html                  # HTML entry point (contains metadata/SEO tags)
├── package.json                # Project dependencies and run scripts
├── vite.config.js              # Vite bundler configurations
└── README.md                   # Project documentation (this file)
```

---

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository and install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build the production bundle**:
   ```bash
   npm run build
   ```
