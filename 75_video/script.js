console.log("first line")
console.log("second line")


setTimeout(() => {
    console.log("2 sec later ")
}, 2000);

console.log("the end")
// out put because of async nature of java script 
// first line
// second line
// the end
// 2 sec later 


// call back function
const callback = (arg) => {
    console.log(arg)

}


const loadscript = (scr, callback) => {
    let sc = document.createElement("script")
    sc.scr = src;
    sc.onload = callback("sumit");
    document.head.append(sc)
}


loadscript("sum",callback)
// mainlly callback is a fuction call another fuction that's it  
// the continue callback function make a pyramid of doom  and difficult to manage to reduce such complaxity we use the promises