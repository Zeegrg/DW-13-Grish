// let name = "my name is Grish"

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trimStart()) // "GrIsh    "
// console.log(name.trimEnd()) // "     GrIsh"
// console.log(name.trim())  // "GrIsh"
// console.log(name.startsWith("m"))
// console.log(name.endsWith("g"))
// console.log(name.replace("Grish", "Gurung")) //my name is Gurung
// console.log(name.replace("G", "Z")) // my name is Zrish //replace method will replace the first match
// console.log(name.replaceAll("G", "z")) //replaceAll methods replace all the match in paragraph


let myTrim = (name) => {
return (name.trim())
}
let _myTrim= myTrim("   Grish       ")
console.log(_myTrim)
