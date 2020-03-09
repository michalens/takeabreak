const settingsStore = require('./config')

const saveSettings = (form) => {
    const breakLengthMin = form.breakLengthMin.value
    const breakLengthSec = form.breakLengthSec.value
    const sessionLengthMin = form.sessionLengthMin.value
    const sessionLengthSec = form.sessionLengthSec.value

    console.log('hit')

    settingsStore.set('breakLength.minutes', breakLengthMin)
    settingsStore.set('breakLength.seconds', breakLengthSec)
    settingsStore.set('sessionLength.minutes', sessionLengthMin)
    settingsStore.set('sessionLength.seconds', sessionLengthSec)
    
    console.log(settingsStore.get('breakLength'))

    setInputValues()
}

const setInputValues = () => {
    document.getElementById('breakLengthMin').value = settingsStore.get('breakLength.minutes')
    document.getElementById('breakLengthSec').value = settingsStore.get('breakLength.seconds')

    document.getElementById('sessionLengthMin').value = settingsStore.get('sessionLength.minutes')
    document.getElementById('sessionLengthSec').value = settingsStore.get('sessionLength.seconds')
}

setInputValues()