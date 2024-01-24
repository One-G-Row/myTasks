let isHotelOpen = true

function hotel(){
    return new Promise((resolve, reject)=>{
        if(isHotelOpen == true){
            resolve("enter hotel")
        }else{
            reject("leave hotel")
        }
    })
}
hotel()

.then(()=>{
    console.log("make an order")
})

.then(()=>{
    console.log("pay")
})

.then(()=>{
    console.log("receive order")
})

.catch(()=>{
    console.log("leave")
})

.finally(()=>{
    console.log("leave the hotel")
})
