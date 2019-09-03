const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1300,
    height: 760,
    darkTheme: true,
    titleBarStyle: "default",
    webPreferences: {
      nodeIntegration: true
    }
  });

  // e carregar o index.html do aplicativo.
  win.loadFile("index.html");
}

app.on("ready", createWindow);
