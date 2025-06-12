# 📝 Transparent Notepad — ElectronJS Project

A fully transparent, always-on-top desktop Notepad built using ElectronJS.  
Designed to stay on screen like Picture-in-Picture mode — perfect for quick notes without disturbing your main workflow.

---

## ✨ Features

✔️ Transparent floating window (frameless & draggable)  
✔️ Minimize and Close buttons on a transparent frame  
✔️ Multiple pages (tabs) — create unlimited note pages dynamically  
✔️ Dark Mode toggle 🌙  
✔️ Manual Save Notes to file (`notes.txt` auto-saved in app data)  
✔️ System Tray icon with "Show" and "Exit" menu options  
✔️ Always on top — stays visible over other apps  
✔️ Lightweight and distraction-free  

---

## 🎯 Why this project?

When you combine **basic coding knowledge** with **clever prompting skills** (and ChatGPT guidance 😉), you get a handy Transparent Notepad app like this — built in just a few steps!

---

## 🖥️ Demo Preview

<img width="305" alt="Image1" src="https://github.com/user-attachments/assets/9d08d35e-2ff1-4f80-97b7-71e066eca945" />
![Screenshot (876)](https://github.com/user-attachments/assets/875e302e-803d-4b31-80b8-965368455c04.png)


---

## 🚀 How to Run on Your Local Machine

### ✅ Pre-requisites:

- **Node.js (v16 or higher)** and **npm** installed  
  Check with:
  ```bash
  node -v
  npm -v
  git --version 

- git is optional --> used for cloning purpose

--- 

## Installation Steps:
- Clone the repository
git clone https://github.com/your-username/transparent-notepad.git

- Navigate to project directory
cd transparent-notepad

- Install all dependencies
npm install

- Start the Electron app
npm start

--- 

## Project Folder Structure
📁 transparent-notepad/
 ├── main.js             # Electron main process (Window + Tray handling)
 ├── preload.js         # Secure IPC bridge between main and renderer
 ├── index.html         # Transparent UI layout (titlebar, buttons, tabs, pages)
 ├── renderer.js        # Renderer logic (tabs, dark mode, save functionality)
 ├── icon.png           # Tray icon
 ├── package.json       # App config & dependencies
 └── README.md          # This file

---

## Important NOTE
### The saved notes are stored here:
- Windows: C:\Users\<Username>\AppData\Roaming\<app-name>\notes.txt
- Linux/Mac: ~/.config/<app-name>/notes.txt
No cloud storage — purely local and secure.
The app works cross-platform (Windows, macOS, Linux).


---
## 🔗 Connect with Me
👤 Raj Kumar
📫 Rajkumar.rk0104@gmail.com

### ⭐ If you found this useful, consider giving this repo a Star!


