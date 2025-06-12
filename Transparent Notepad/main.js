const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

let win;
let tray;

const iconPath = path.join(__dirname, 'icon.png'); //  Proper icon path

//  Create main window (with icon for taskbar & window)
function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false, // Frameless window (custom controls)
    alwaysOnTop: true, // Like picture-in-picture
    resizable: true,
    hasShadow: false,
    icon: iconPath, //  App icon shown in Taskbar/Dock
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Secure preload script
    }
  });

  win.loadFile('index.html');
}

//  Create tray icon & menu
function createTray() {
  tray = new Tray(iconPath); // Use icon.png for tray icon
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: () => win.show() }, // Tray option to show window
    { label: 'Exit', click: () => app.quit() }  // Exit option
  ]);
  tray.setToolTip('Transparent Notepad');
  tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
  createWindow();
  createTray();
});

//  IPC Handlers from Renderer process (preload.js)
ipcMain.on('minimize-window', () => win.minimize()); // Minimize window
ipcMain.on('close-window', () => win.hide());       // Hide window (not close)

//  Handle save request (writes to file in user's AppData or equivalent)
ipcMain.handle('save-file', async (event, content) => {
  const filePath = path.join(app.getPath('userData'), 'notes.txt');
  fs.writeFileSync(filePath, content);
  return 'Saved';
});

//  Handle load request (reads file content)
ipcMain.handle('load-file', async () => {
  const filePath = path.join(app.getPath('userData'), 'notes.txt');
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
  return ''; // Return empty string if no file found
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
