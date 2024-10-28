/*
create a faulty calculator  using java script 
this faulty calculator does following:
1. it takes two no. as input from the user 
2. it perfromes wrong operation as follows:
10% of times:- it performes wrong operation 10% of the times   
+ --> -
* --> +
- --> / 
/ --> **

*/
let random = Math.random()
let a=prompt("enter first no.")
let b=prompt("enter second no.")
let c=prompt("enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random>0.1){
    //perfrom correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) // eval is use to evaluate it but eval is not use in production site but it is exist so we know about it 
}
else{
    //perfrom incorrect calculation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}