const cp = require("child_process")

//Use open instead of start in mac/linux
cp.exec("start http://www.linkedin.com")

cp.exec("start cmd .")

cp.exec("dir", (data) => {
    console.log(data)
})

//Execute a child node process
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data)
})