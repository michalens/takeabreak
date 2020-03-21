const { BrowserWindow } = require('electron')
const path = require('path')
const {setSessionLength} = require('./break')
const {config} = require('./config')



const breakWindow = () => {

    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });
  
    mainWindow.loadFile(path.join(__dirname, 'breakWindow.html'));
  
    //mainWindow.webContents.openDevTools();


    config.find({name: "breakLength"}, (err, data) => {
        let breakLength = (parseInt(data[0].minutes) * 60 + parseInt(data[0].seconds)) * 1000

        setTimeout(() => {
            mainWindow.close()
            setSessionLength()
        }, breakLength)
    })
};

module.exports = breakWindow