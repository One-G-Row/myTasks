let stock = {
sweets: ["ksl", "bigbom", "koo"],
tissue: ["tena", "toilex", "bella"],
biscuits: ["happyhappy", "ginger", "lemon"],
matchboxes: ["rhinokubwa", "rhinondogo", "solio"]
}

let isShopOpen = true;

let order = (time, work)=>{
return new Promise( (resolve, reject)=>{
    if(isShopOpen){
        setTimeout(()=>{
            resolve(work() )
        },time)
        
    }

    else{
        reject(console.log("our shop is closed"))
    }
})
}
order(2000, ()=>console.log("customer arrives at the shop"))

.then(()=>{
    return order(1000, ()=>console.log("place an order"))
})

.then(()=>{
    return order(1000, ()=>{
        console.log("order a box of" + `${stock.biscuits[0]}`)
    })
})

.then(()=>{
    return order(1000, ()=>{
        console.log("10 pack of" + `${stock.tissue[2]}`)
    })
})

.then(()=>{
    return order(1000, ()=>{
        console.log("1 packungen of" + `${stock.sweets[2]}`)
    })
})

.then(()=>{
    return order(1000, ()=>{
        console.log("and 2 packs of" + `${stock.matchboxes[0]}`)
    })
})

.then(()=>{
    return order(1000, ()=>{
        console.log("calculate the price of the items")
    })
})

.then(()=>{
    return order(1000, ()=>console.log("tell the customer the price and make sure payment transaction goes through"))
})

.then(()=>{
    return order(1000, ()=>console.log("handover goods and receipt to the customer"))
})

.catch(()=>{
    console.log("customer left")
})

.finally(()=>{
    console.log("day ended, the shop is closed")
})