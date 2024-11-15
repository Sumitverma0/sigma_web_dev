function createcard(tittle, cName, views, monthOld, duration, thumbnail) {
    let viewstr
    if (views < 1000000) {
        viewstr = views / 1000 + "K"

    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M"
    }
    else {
        viewstr = views / 1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
                </div>
            </div>
            <div class="text">
                <h1>${tittle}</h1>
                <p>${cName} . ${viewstr} views . ${monthOld}months ago</p>
            </div>
        </div>`
document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+html
}

createcard("Introduction to make a card  | sigma web development #3", "CodeWithHarry", 
6500000, 7, "53:23", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8ohrGxDt9HIbP7yXPhwiGwqmhEQ")
createcard("Introduction to make a card  | sigma web development #3", "CodeWithHarry", 
6500000, 7, "53:23", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8ohrGxDt9HIbP7yXPhwiGwqmhEQ")