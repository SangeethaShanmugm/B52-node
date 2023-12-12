const fs = require("fs")

const quote = 'Make everyday a little less ordinarily'

fs.writeFile("awesome.jpeg", quote, () => {
    console.log("Writing completed")
})

//read file

fs.readFile("./awesome.html", "utf-8", (err, data) => {
    if (err) console.log("Error❌", err)
    console.log(data)
})