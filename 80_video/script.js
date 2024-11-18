// let obj={
//     a:1,
//     b:"sumit"
// };
// console.log(obj)

// let animal ={
//         eats: true
// };

// let rabbit = {
//     jumps:true
// };
// rabbit.__proto__ = animal //set rabbit.[[prototype ]] = animal  (rabbit.eats -->>true)


// know start with class 
class Animal{
    constructor(name){ 
        this.name= name
        console.log("object is created ")
    }
    eats(){
        console.log("khana kha raha hu bhai...")
    }
    jumps(){
        console.log("kudh raha hu bhai...")
    }
}
let a = new Animal("hloo");
console.log(a)

// know we have to create a lion which use the property of the animal

class lion extends Animal{
    constructor(name){ 
        super(name)
        this.name= name
        console.log("object is created and it is lion we use super key word in this lion class ")


    } 
    // method over ridding 
    eats(){
        console.log("khana kha raha hu bhai lion huu samjaa ...")
    }
}

let l= new lion("shera")
console.log(l)


