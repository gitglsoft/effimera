// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Qui puoi esporre funzioni sicure per la tua app
  titolo: "Effimera"
});