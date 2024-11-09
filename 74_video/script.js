let button =document.getElementById("btn")


button.addEventListener("click",()=>{
    // alert("hlo you click that button you know that ")
    document.querySelector(".box").innerHTML="<b> hey you click that button</b> now enjoy it "
})


button.addEventListener("contextmenu",()=>{
    alert("hlo you right click that button you know that ")
})


document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
})

// event bubbling
// if container kai ander childcontainer or uskai bhi andar child ho or addeventlistener laga dai on click by all element like container, childcontainer,and child too kya hoga hmm too child par click kar rahi hai to vo alert sab par dikahaiga means one by one alert dikhaiga this is bubbling

// e.stopPropagation
//To stop or we want only alert of child is shown only then we use e.stopPropagation it will stop the bubbling

// set Timeout and setInterval
// setInterval ak function hota hai or vo ak function koo laita hai voo har kuch time interval par dikhaiga ya hoga es koo cancle karnai kai liyai clear timeout ka use kartai hai 

// set tiem out bass ak bar run hota hai or es koo cancle kar nai kai liyai clear interval use kartai hai 