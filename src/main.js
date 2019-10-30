const { app, BrowserWindow, } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1440,
    height: 1024,
    icon: __dirname + "./icon.png",
    autoHideMenuBar: true,
    backgroundColor: "#243447",
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.once("ready-to-show", () => {
    win.show();
    win.maximize();
  });
  //win.webContents.openDevTools();
  // e carregar o index.html do aplicativo.
  win.loadFile("./src/index.html");
}

app.on("ready", createWindow);
