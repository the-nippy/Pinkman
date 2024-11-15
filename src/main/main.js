const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.webContents.session.webRequest.onHeadersReceived({ urls: ["*://*/*"] },
    (d, c) => {
      if (d.responseHeaders['X-Frame-Options']) {
        delete d.responseHeaders['X-Frame-Options'];
      } else if (d.responseHeaders['x-frame-options']) {
        delete d.responseHeaders['x-frame-options'];
      }

      c({ cancel: false, responseHeaders: d.responseHeaders });
    }
  );
  // win.loadURL('https://github.com');
  // win.loadFile('index.html')
  win.loadURL('http://127.0.0.1:5173')
  const contents = win.webContents;
  win.webContents.openDevTools(); // 打开开发者工具
  console.log(contents)
}


// app ready 后才能创建窗口
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})