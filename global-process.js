//Process object contains info about current process as well as methods to work on it
console.log(process.pid)
console.log(process.versions.node)

//To collect information from the terminal where the prog is running.
//It contains info about everything that we have typed to run the process, here we are using "node" & "global-process" so it shows path to those
//If you add more args like "node global-process test one", it would return the above plus 'test' and 'one' in the array result

console.log(process.argv)

const [,, firstName, lastName] = process.argv

console.log(`First Name is ${firstName} and last name is ${lastName}`)

//Usage of flags in arguments, node global-process --user Zee --greeting "How are you?"
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag]
}
const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${user} ${greeting}`)
