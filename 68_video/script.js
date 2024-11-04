console.log("sumit")

// to target the element change the css class



// let boxes = document.getElementsByClassName("box")
// console.log("boxes")
// boxes[2].style.backgroundColor="red"

document.getElementById("red").style.backgrondcolor="red"

document.querySelector(".box").style.backgrondcolor="green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgrondcolor="green";
})


// get element by tag name 

// matches 
//closest
//contains