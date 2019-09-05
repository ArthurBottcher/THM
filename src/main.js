const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#23242e",
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.webContents.openDevTools();
  win.setMenuBarVisibility(false);
  // e carregar o index.html do aplicativo.
  win.loadFile("./src/index.html");
}

app.on("ready", createWindow);
