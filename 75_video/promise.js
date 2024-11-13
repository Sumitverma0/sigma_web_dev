// here we learn how to make a code snippet
console.log('this is a promise');

let prom1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('yes i am done');
        resolve("sumit")        
    }, 3000);
})

prom1.then ((a) => {
  console.log(a)
})

//promise ya to reject hoga ya to resolve hoga
// their are 6 static method in promise all , allSettled ,race , any , resolve , reject 