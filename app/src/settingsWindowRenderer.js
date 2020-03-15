const {config, setValues} = require('./config')

const saveSettings = (form) => {
    const breakLengthMin = form.breakLengthMin.value
    const breakLengthSec = form.breakLengthSec.value
    const sessionLengthMin = form.sessionLengthMin.value
    const sessionLengthSec = form.sessionLengthSec.value

    setValues(breakLengthMin, breakLengthSec, sessionLengthMin, sessionLengthSec)

    setInputValues()
}

const setInputValues = () => {
    config.find({name: "breakLength"}, (err,data) => {
        console.log(data)

        document.getElementById('breakLengthMin').value = data[0].minutes
        document.getElementById('breakLengthSec').value = data[0].seconds
    })

    config.find({name: "sessionLength"}, (err,data) => {

        document.getElementById('sessionLengthMin').value = data[0].minutes
        document.getElementById('sessionLengthSec').value = data[0].seconds
    })
}

setInputValues()