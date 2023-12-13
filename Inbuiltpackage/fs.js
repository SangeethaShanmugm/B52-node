const fs = require("fs")

const quote = 'Make everyday a little less ordinarily'

// fs.writeFile("awesome.jpeg", quote, () => {
//     console.log("Writing completed")
// })


//Task - 1
const quote2 = "Live more, worry Less😀😀"
//Create the below files with quote2 as the content
//  /backup  folder
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html


// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
//         console.log(`Writing completed for text-${i}.html`)
//     })
// }

//Task-2
// node fs.js 30 => 30 files need to be created |  note-1.txt, note-2.txt..note-30.txt


// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)
// const quote3 = "Happy Day"
// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/note-${i}.txt`, quote3, () => {
//         console.log(`Writing completed for note-${i}.txt`)
//     })
// }

//file name as date-time.txt

// const currentDate = new Date()
// const formatedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`
// const formatedTime = currentDate.getHours()

// console.log(formatedDate)

// const fileName = `${formatedDate}_${formatedTime}.txt`
// console.log(fileName)

// const timestamp = currentDate.toISOString()
// const content = `TimeStampe: ${timestamp} `
// console.log(content)

// fs.writeFile(`./${fileName}`, content, (err) => {
//     if (err) console.log(err)
//     console.log(`File: ${fileName} created Successfully`)
// })



//read file

// fs.readFile("./awesome.html", "utf-8", (err, data) => {
//     if (err) console.log("Error❌", err)
//     console.log(data)
// })


//append File

const quote4 = '\nImagine the Impossible'

// fs.appendFile("./sample.txt", quote4, (err) => {
//     console.log("completed writing")
// })


//unlink

// fs.unlink("./toremove.txt", (err) => {
//     console.log("Deleted Successfully")
// })

//readdir

// fs.readdir("./backup", (err, files) => {
//     console.log("All file names", files)
// })

//delete all files in backup folder

// fs.readdir("./backup", (err, data) => {
//     data.forEach(fileName => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log("Deleted Successfully", fileName)
//         })
//     })
// })

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink => asynchrounous

// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync => synchrounous

// writeFile => CallStack => WebApi(whoever finishes writing first) => CallBack Q => Event Loop => CallStack




const [, , noOfFiles] = process.argv
console.log(noOfFiles)
const quote3 = "Happy Day"
for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote3)
    console.log(`Writing completed for note-${i}.txt`)
}
