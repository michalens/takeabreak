const { app, Menu, Tray } = require('electron')
const path = require('path')
const {breakEmitter, setSessionLength} = require('./src/break')
const breakWindow = require('./src/breakWindow')
const settingsWindow = require('./src/settingsWindow')

const {config, setDefaults} = require('./src/config')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


let tray = null
app.on('ready', () => {
  config.loadDatabase()
  //setDefaults()
    breakEmitter.on('breakEmitter', () => {
      breakWindow()
  })

  tray = new Tray(path.join(__dirname, 'src/coffe24.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Settings', click: () => settingsWindow() },
    { label: 'Quit', role: 'quit' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  setSessionLength()
})

app.on('window-all-closed', () => {
});
