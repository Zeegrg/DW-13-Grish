/* 
[1,2,3,4] = [1,2]ok


*/





let ar1 = [1,2,3,4]

let ar2 = ar1.filter((value,i)=>{
 if (value %2 ===0){
    return true
 } else{
    return false
 }

})
console.log(ar2)