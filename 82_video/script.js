async function sleep() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// esko iime kahtai hai imedietly envoke function
(async function main() {
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
    let [x,y,...rest] =[1,5,5,7,8,56] // destructuring
    console.log(x,y,rest)
    

    let obj ={
        a: 1,
        b:2,
        c: 6
    }
    let {a,b}=obj
    console.log(a,b)
})

//hoisting local varible global variable 