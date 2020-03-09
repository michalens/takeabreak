const Store = require('electron-store')

const settingsStore = new Store()

settingsStore.set('breakLength.minutes', 0)
settingsStore.set('breakLength.seconds', 20)
settingsStore.set('sessionLength.minutes', 20)
settingsStore.set('sessionLength.seconds', 0)


module.exports = settingsStore