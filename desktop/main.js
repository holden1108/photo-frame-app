const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    width: 1200,
    height: 860,
    backgroundColor: '#f4f2ee',
    title: '写真フレーム作成',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.webContents.on('will-navigate', e => e.preventDefault());
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
