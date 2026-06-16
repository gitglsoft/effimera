const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Se non hai un file preload.js, rimuovi la riga sotto
      // preload: path.join(__dirname, 'preload.js') 
    }
  });

  win.loadFile(path.join(__dirname, 'effimera.html')).catch(err => {
    console.error("Errore nel caricamento del file:", err);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});