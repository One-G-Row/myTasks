let order = true

function bake(){
    const bakes = new Promise((resolve, reject)=>{
        if(order === true){
            resolve("start baking")
        }else{
            reject("do not bake")
        }
    })
}
bake()

.then(()=>{
    console.log("pay for the cake")
})

.then(()=>{
    console.log("get the cake")
})

.then(()=>{
    console.log("eat the cake")
})

.catch((err)=>{
console.log(err)
})

.finally(()=>{
    console.log("leave the shop")
})
    
