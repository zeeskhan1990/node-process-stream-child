const fs = require('fs')

const writeStream = fs.createWriteStream("./stream.txt", "UTF-8")
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8")

writeStream.write("Hello\n")
writeStream.write("World\n")

//Copy file to file
/* readStream.on('data', (data) => {
    writeStream.write(data)
}) */

//Same as above but with pipe
readStream.pipe(writeStream)

//This would throw error because writestream is already closed
process.stdin.on("data", (data) => {
    writeStream.write(data)
})
