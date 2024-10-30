let arr = [1,2,3,4,5,6]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
// array is unmutable

arr[0]= 56
console.log(arr[0])
// when we print the typeof array in java it will show an object 
console.log(typeof arr)

// array will convert into string 
console.log(arr.toString())
// join method
console.log(arr.join(" and "))
// arr.pop will pop last element    push will add element at last 
//shift will remove the first element ushift will add element at first index that's it
// delete will delete the spacify element  but the memory will allocated length will same 


// concatenate // a1 a2 // then a3 = concate(a1,a2) will concatinate the element 
// short will change original array 

//splice 
// let number = [1,2,3,4]
// number.splice(1,3) it will remove the element of index 1 to 3  if we write splice(1,3,43,2523) in this 43 and 2523 will add 


// slice
// same number if slice(2) it will give the all element after the 2






// loops 
let a =[1,93,5,6,34]


// clasical for loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//         console.log(element)
// }


a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})


// for in   object
//for of    for array 
// map  to add element in new array in short line of code 
// filter use a fuction to make seprate the array element 
// reduce  is a fuction in which it apply first two element then result with next element 

// array dot from is if we write arr.from("sumit") it will make all char to element of the array 