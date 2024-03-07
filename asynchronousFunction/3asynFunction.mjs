console.log("1")
setTimeout(()=>{
    console.log("hello")
},0)
console.log("2")


//anything that push its task to the background(node) are called asynchronous function.
//during code execution, the background code will execute when all synchronous code gets executed.
// call stack runs the code inside it, once the codes get executed the code is popped off.
// event loop is a mediator which continuously  monitor call stack and memory queue if  all stack is empty it takes the function from memory queue to call stack 