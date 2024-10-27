// string is inmutable it can not change it will make a new string but it actully not change 
console.log("this is string toturial")
let a = "sumit";
console.log(a)

// TO access the character 
console.log(a[0])
// console.log(a[5]) // gives undefined
console.log(a.length) // gives length of the string this is the property not a fuction

let r_name = "sumit"
let course_name = "webdev"
console.log("the name is "+ r_name +" and the course name is "+ course_name);
// the above task is also done by template letrals the syntax is backtic symbol `` above the tab and below the esc

console.log(`the name is ${r_name} and the course name is ${course_name}`)

// escape sequence character 
let b = "shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())

// slice the string
console.log(b.slice(1,4)) //1 is h and 3=v the slice is up to 3
console.log(b.slice(3))

console.log(b.replace("sh","o9")) // if two occurence then  the first will replace 
console.log(b.concat(a))
console.log(b.concat(a,"hloo"))