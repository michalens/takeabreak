const EventEmitter = require('events')

const settingsStore = require('./config')

const breakLength = settingsStore.get('breakLength')
const breakMilisec = (breakLength.minutes * 60 + breakLength.seconds) * 1000 

const sessionLength = settingsStore.get('sessionLength')
const sessionMilisec = (sessionLength.minutes * 60 + sessionLength.seconds) * 1000 


const breakEmitter = new EventEmitter()

setInterval(() => {breakEmitter.emit('breakEmitter')}, breakMilisec + sessionMilisec)

module.exports = breakEmitter