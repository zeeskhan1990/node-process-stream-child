//ships with nodejs
const path = require("path")

//Not available globally
const hello = "Hello"

//console is defined in the global object
global.console.log(global.hello)

console.log(hello)

//__dirname & __filename are defined in global
console.log(__dirname)
console.log(__filename)

console.log(`The filename is ${path.basename(__filename)}`)