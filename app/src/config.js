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
    console.log("hit")
    config.update({name: "breakLength"}, { $set: {minutes: breakMin, seconds: breakSec} }, {}, function (err, numReplaced) {
       console.log(err)
        console.log(numReplaced)
    })
    config.update({name: "sessionLength"}, { $set: {minutes: sessionMin, seconds: sessionSec} }, {} )
}

module.exports = {
    config,
    setDefaults,
    setValues
}