process.stdout.write("Hello\n")
process.stdout.write("World\n\n")

const questions = [
    "Name?",
    "Age?",
    "Gender?"
]

const ask = (questionNo=0) => {
    process.stdout.write(`\n\n ${questions[questionNo]}`)
    process.stdout.write(` > `)
}

ask()

/* on function used to listen to events. Event name we are listening for is 'data' which is emitted when end user type & press enter
This is also an example of async function. Also one has to force exit the process because
the listener would keep on listening for the event by defualt, unless process is exited explicitly */
process.stdin.on('data', (data) => {
    //Raw buffered data is provided
    console.log("You typed in ", data)

    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    process.exit()
})