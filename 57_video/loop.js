console.log("i am turorial of loops")
a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a + i)

// }

let obj={
    name:"sumit",
    role:"programmmer",
    commpany:"notfound"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}

// for of usi iterator like array , string

for (const c of "sumit") {
    console.log(c)
}


let i =5;
while (i<6){
    console.log(i)
    i++;
}

do {
     console.log(i)
     i++;   
} while (i<3);