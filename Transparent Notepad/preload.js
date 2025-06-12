// Secure API exposure

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  minimize: () => ipcRenderer.send('minimize-window'),
  close: () => ipcRenderer.send('close-window'),
  saveFile: (content) => ipcRenderer.invoke('save-file', content),
  loadFile: () => ipcRenderer.invoke('load-file')
});
