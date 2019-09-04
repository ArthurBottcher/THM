const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1300,
    height: 760,

    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenuBarVisibility(false);

  // e carregar o index.html do aplicativo.
  win.loadFile("./src/index.html");
}

app.on("ready", createWindow);
