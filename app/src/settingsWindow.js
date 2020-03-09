const { BrowserWindow } = require('electron')
const path = require('path')


const settingsWindow = () => {

    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });
  
    mainWindow.loadFile(path.join(__dirname, 'settingsWindow.html'));
  
    //mainWindow.webContents.openDevTools();
  
    
  };

module.exports = settingsWindow