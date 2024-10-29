/*create a business name generator by combining list of adjectives and shop name and another words 

use function and string 


adjectives:
crazy 
amazing 
fire  

shop name:
engine
foods
garments 

 another words:
 bros 
 limmited
 hub
*/
let rand = Math.random()
let first,second,third
if(rand<0.34){
    first="crazy"
}
else if(rand>0.34 && rand<0.64){
    first ="amazing"
}
else{
    first="fire"
}

//second
let rand2=Math.random()
if(rand2<0.34){
    second="engine "
}
else if(rand2>0.34 && rand2<0.64){
    second ="food"
}
else{
    second="garments"
}
//third
let rand3= Math.random()
if(rand3<0.34){
    third="bros"
}
else if(rand3>0.34 && rand3<0.64){
    third ="limited"
}
else{
    third="hub"
}

console.log(first,second,third)