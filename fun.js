console.log("Hello")

// console.log(document)
// console.log(window)
// console.log(global)

console.log(process.argv)

//command line arguments
console.log(process.argv[3])

//destructure process.argv

const [, , n1, n2] = process.argv

function double(n1, n2) {
    console.log("Double of the number is", n1 * n2)
}
double(n1, n2)

//sum 

const [, , a, b] = process.argv
function sum(a, b) {
    console.log(+a + +b)
}
sum(a, b)