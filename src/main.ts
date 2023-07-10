import { app, BrowserWindow, dialog } from "electron";

const createWindow = async () => {
  const { default: open } = await import("open");

  const win = new BrowserWindow({
    width: 700,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
    },
  });

  win.webContents.openDevTools();
  open("https://duckduckgo.com");
};

app
  .whenReady()
  .then(() => createWindow())
  .catch((e) => {
    dialog.showErrorBox("Error", e.message + "\n" + e.stack);
    app.quit();
  });
