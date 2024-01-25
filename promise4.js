let buyBook = true

function book(){
    return new Promise((resolve, reject)=>{
        if(buyBook == true){
            resolve("buy the book")
        }else{
            reject("dont buy the book")
        }
    })
}
book()

.then(()=>{
    setTimeout(()=>{
    console.log("place an order")
}, 1000)
})

.then(()=>{
    setTimeout(()=>{
    console.log("pay book price")
}, 2000)
})

.then(()=>{
    setTimeout(()=>{
        console.log("get the book")
    }, 1000) 
})

.catch((err)=>{
    console.log(err)
})

.finally(()=>{
    console.log("end of session")
})