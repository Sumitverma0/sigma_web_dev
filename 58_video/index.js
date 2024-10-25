// function
function nice(name) {
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " your t-shirt is nice!")
    console.log("hey " + name + " you are complete this course then you will become a web developer!")

}

nice("xyz")
// anoter function 
function sum(a, b) {
    // console.log(a + b) this can also done but if we want to return the value then 
    return a+b
}
result= sum(3,5)
console.log("the sum of the number is: ", result)

// here we also put the default value in the function like function sum(a,b,c=3)
// also if we call a function like sum(a) only the result is NaN not a number because you not give b


// arrow function 
const func1 = (x)=>{
    console.log("this is a arrow function",x)
}
func1(23);
func1(453);
func1(33);
