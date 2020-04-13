const { ipcRenderer } = require('electron')

const {config, setValues} = require('./config')

const { setSessionLength } = require('./break')

function saveSettings (form) {
    console.log("hite")
    const breakLengthMin = form.breakLengthMin.value
    const breakLengthSec = form.breakLengthSec.value
    const sessionLengthMin = form.sessionLengthMin.value
    const sessionLengthSec = form.sessionLengthSec.value

    ipcRenderer.send('send-config-values', breakLengthMin, breakLengthSec, sessionLengthMin, sessionLengthSec)
    //setValues()

    setSessionLength()
    setInputValues()
}

const setInputValues = () => {
    config.find({name: "breakLength"}, (err,data) => {

        document.getElementById('breakLengthMin').value = data[0].minutes
        document.getElementById('breakLengthSec').value = data[0].seconds
    })

    config.find({name: "sessionLength"}, (err,data) => {

        document.getElementById('sessionLengthMin').value = data[0].minutes
        document.getElementById('sessionLengthSec').value = data[0].seconds
    })
}

setInputValues()