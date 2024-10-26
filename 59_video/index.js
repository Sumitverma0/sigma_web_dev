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

const a = parseFloat(prompt("enter first no."))
const b = parseFloat(prompt("enter second no."))
const opr = prompt("enter the opreation +,-,*,/,**")
const rand = Math.random()
// we can check the output of the question
console.log(rand)
// this will take much time of wrong answer therefore we change the actually question the question will 10% wrong but we will show the 10% right reamaing wrong THAT'S ALL..
if (rand > 0.1) {
    if (opr === "+") {
        result = a - b
    }
    else if ( opr === "*"){
        result = a+b
    }
    else if ( opr === "-"){
        result = a/b
    }
    else if ( opr === "/"){
        result = a**b
    }
    else{
        console.log("yai kya hoo gaya?")
    }

}
else{
    if (opr === "+") {
        result = a + b
    }
    else if ( opr === "*"){
        result = a*b
    }
    else if ( opr === "-"){
        result = a-b
    }
    else if ( opr === "/"){
        result = a/b
    }
    else{
        result=a**b
    }
}

console.log(result)

// i think this will work 
// think kya hota hai bhai  it actually work --> amazing i will develop a calcultor which is actully give the wrong answers 