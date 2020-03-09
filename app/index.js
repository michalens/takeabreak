const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const breakEmitter = require('./src/break')
const breakWindow = require('./src/breakWindow')
const settingsWindow = require('./src/settingsWindow')


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


let tray = null
app.on('ready', () => {
    breakEmitter.on('breakEmitter', () => {
      breakWindow()
  })

  tray = new Tray(path.join(__dirname, 'src/coffe24.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Settings', click: () => settingsWindow() },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Quit', role: 'quit' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})



app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
