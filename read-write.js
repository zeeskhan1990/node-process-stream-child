const fs = require("fs")
const util = require("util")

const md = `

Writing to the file from read-write.js

`

fs.writeFile("./tester-1.js", md.trim(), (err) => {
    if(err)
        util.log("Failed to wite ", err)
})

fs.readFile("./tester.js", "UTF-8", (err, text) => {
    console.log(text)
})
if (fs.existsSync("mydir")) {
    console.log("Directory already exists")
} else {
    fs.mkdir('mydir', (err) => {
        if (err)
            console.log("Failed to create dir", err)
        else {
            fs.readdir(__dirname, (err, files) => {
                if(err) {
                    process.exit()
                }
                util.log(files)
            })
        }
    })
}

//Simply fs.appendFile
fs.rename("./tester-1.js", "./tester-2.js", (err) => {
    if(err)
        util.log("Failed to rename")
    else {
        fs.renameSync("./tester-2.js", "./tester-1.js")
    }
})

//Remove
fs.unlink("./tester-1.js", (err) => {
    if(err)
        console.log("Failed to remove", err)
})

//For removing dir, remove all files inside it then 'rmdir'