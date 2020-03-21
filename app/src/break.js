const EventEmitter = require('events')
const breakEmitter = new EventEmitter()
const { app } = require('electron')

const {config} = require('./config')

let timeout

function setSessionLength() {
    if (timeout) {
        clearTimeout(timeout)
    }
    config.find({name: "sessionLength"}, (err, data) => {
        let sessionLength = (parseInt(data[0].minutes) * 60 + parseInt(data[0].seconds)) * 1000

        timeout = setTimeout(() => {breakEmitter.emit('breakEmitter')}, sessionLength)
    })
}

module.exports = {
    breakEmitter,
    setSessionLength
}