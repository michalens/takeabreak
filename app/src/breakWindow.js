const { BrowserWindow } = require('electron')
const path = require('path')

// const settingsStore = require('./config')
// const breakLength = settingsStore.get('breakLength')
// const breakMilisec = (breakLength.minutes * 60 + breakLength.seconds) * 1000


const breakWindow = () => {

    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });
  
    mainWindow.loadFile(path.join(__dirname, 'breakWindow.html'));
  
    //mainWindow.webContents.openDevTools();
  
    
  
    setTimeout(() => mainWindow.close(), 5000)
  };

module.exports = breakWindow