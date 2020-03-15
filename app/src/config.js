// const Store = require('electron-store')
//
// const settingsStore = new Store()
//
// settingsStore.set('breakLength.minutes', 0)
// settingsStore.set('breakLength.seconds', 20)
// settingsStore.set('sessionLength.minutes', 20)
// settingsStore.set('sessionLength.seconds', 0)
//
//
// module.exports = settingsStore

const Datastore = require("nedb")

const config = new Datastore("config.db")
config.loadDatabase()

const setDefaults = () => {
    config.insert({
        name: "breakLength",
        minutes: 0,
        seconds: 20
    })
    config.insert({
        name: "sessionLength",
        minutes: 20,
        seconds: 0
    })
}

const setValues = (breakMin, breakSec, sessionMin, sessionSec) => {
    config.update({name: "breakLength"}, { $set: {minutes: breakMin, seconds: breakSec} }, {} )
    config.update({name: "sessionLength"}, { $set: {minutes: sessionMin, seconds: sessionSec} }, {} )
}

module.exports = {
    config,
    setDefaults,
    setValues
}