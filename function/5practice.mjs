// //subtraction

// let sub= function(num1,num2){
// let _sub = num1 - num2
// return _sub
// }
//  let __sub = sub(1,2)
//  console.log(__sub)

// //multiplication
//  let mult= function(num1, num2){
// let _mult = num1 * num2
// return _mult
//  }
//  let __mult = mult(3,2)
//  console.log(__mult)


//  let isGreaterThan18 = function(age){
//     if(age>18){
//         return true
//     }
// else{
//     return false
// }
  
//  }

//  let _isGreaterThan18 = isGreaterThan18(30)
//  console.log(_isGreaterThan18)

 //make a function name is18 pass a value ,the function must return true if the given age is 18 otherwise return false

 /* let is18 = function(age) {
    if (age === 18) {
        return true
    } else {
        return false
    }
}

let _is18 = is18
console.log(_is18(18));  */ // Output: true

//make a function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter
 let takeANumber = function (age){
    if (age<18){
        return "you can enter the room"
    }
    else {
        return "you can not enter the room"
    }
 }
 let _age= takeANumber(20)
 console.log(_age)

 //make a function named isEven , pass a value, that retrun true if the given number is even else return false

//  let isEven = function(num){
//    let remainder=(num%2===0 )
//    if (remainder==0){
//     return true
//    }
//    else{
//     return false
//    }

//  }
//  let _num = isEven(2)
//  console.log(_num)

// let isEven = function(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let _num = isEven(8);
// console.log(_num);

//make a function that takes 3 input as number and return average of given number

// let num = function(num1,num2,num3){
//     let average =(num1+num2+num3)/3
//     return average
//     }
//     let _num = num(1,2,10);
//     console.log(_num);



// make a function that takes one input as number and return "category1" for 
// number range from 1 to10,  return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30

// let num = function(num1){
//     if (num1>= 1 && num1<=10){
//         return "category1"
//     }
//     else if(num1>= 11&& num1<=20){
//         return "category2"
//     }
//     else(num1>= 21&& num1<=30)
//     {
//         return "category3"
//     } 
// }

// let result = num(30);
// console.log(result); 




/* 
make a function that takes a input as number  that perform
if age [upto 17],  return your ticket is free
if age[18 to 25 ], return  your ticket cost 100
if age[>26],  return your ticket cost 200
if age===26 return your ticket is 150 */
//  let age = function(age){
// if(age<=17){
//     return "Your ticket is free"
// }
// else if(age>=18 && age<=25 ){
//     return "Your ticket cost 100"
// } 
// else if(age>26){
//     return "Your ticket cost 200"
// } 
// else (age===26)
// {
//     return "Your ticket cost 150"
// }


//  }
// let input = age(18)
// console.log(input)






/* make a function that take a number
if number>=3 console i am greater or equal to 3
if number ===3 console i am 3
if number<3 console i a */

let num = function(num){
    if(num===3){
        return "I am three"
    } 
    else if(num>=3){
        return "i am greater or equal to 3"
    }
    
    else(num<3)
    {
        return "iam other"
    } 
    
    }

     
    let input = num(3)
    console.log(input)



//make a function that takes input as number and return outupt You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movies

let age = function(num){
if (num>=18 ){
    return ("You are authorized to watch movie ")
}
else {
    return("you are not authorized to watch movie")
 }
}
let output= age(12)
console.log(output)








