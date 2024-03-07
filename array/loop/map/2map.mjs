let ar1 = [1,2,3,4]

//use map if
//input and output are array   [1,2,3,4] = [2,4,6,8]
//input and output length are same   

let ar2 = ar1.map((value, i) => {
    return value *2

})
console.log(ar2)