const os = require("os")

//memory info
console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024)
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024)

// 1kb => 1024 bytes => 1mb => 1024kb => 1gb => 1024mb
console.log("User Info", os.userInfo())
//get os info
console.log("Platform", os.platform())
console.log("Type", os.type())
console.log("Os release", os.release())

//cpu info

console.log("Arch", os.arch())
console.log("cores", os.cpus().length)
console.log(`cores , ${os.cpus().length} Core`)
console.log("Cpu Speed", os.cpus()[0].speed)

console.log("Network", os.networkInterfaces())