const events = require("events")

const emitter = new events.EventEmitter()
//Same emitter object, you do 'emit' & 'on' on the same emitter object
//So you on calling a function that would return the emitter, and you bind listeners to it
emitter.on("customEvent", (message, user) => {
    console.log(`Event Caught is ${message} by user ${user}`)
})

emitter.emit("customEvent", "Hello world", "Computer")
emitter.emit("customEvent", "Yes Man", "Test")

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if (input === 'exit') {
        emitter.emit("customEvent", "Goodbye", "process")
        process.exit()
    }
    emitter.emit("customEvent", input, "terminal")    
})