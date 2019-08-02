const fs = require('fs')

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8")
let fileText = ""
//process.stdin is also a readable stream
//IT reads data chunk by chunk
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data
});

readStream.once("data", data => {
  console.log(data)
})

readStream.on("end", () => {
  console.log("Finished reading file")
  console.log(`I read ${fileText.length - 1} characters of text`);
})