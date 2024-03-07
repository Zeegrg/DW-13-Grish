//["my", "name", "is"] = ["MYN", "NAMEN", "ISN"]

let ar1 = ["my", "name", "is"] 
let ar2 = ar1.map((v,i)=>{
return `${v.toUpperCase()}N`
})
console.log(ar2)