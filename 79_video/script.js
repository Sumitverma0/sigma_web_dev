let a = prompt("enter a number: ")
let b = prompt("enter second number: ")
// check exception
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}


let sum = parseInt(a)+parseInt(b);
// console.log("the sum is ",sum)


// we not defined the x so we want to handle it with using try catch 
try {

    console.log("the sum is ",sum*x)
    
} catch (error) {
    
    console.log("arai yai to error aa gaya ")
}
// finally work to close the files 
finally{
    console.log("files are closed and dv connection is being closed ")
}

// let the whole code is in a fuction and the fuction will retrun value then if error come then catch will return and if not come then try will return and remaining will not run there for we use the finally to run special code like free the resource that we will aquire or allocated the finally will must be run any any case that's it... 
