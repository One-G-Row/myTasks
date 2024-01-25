let order = true

function bake(){
   return new Promise((resolve, reject)=>{
        if(order == true){
            resolve("start baking")
        }else{
            reject("do not bake")
        }
    })
}
bake()

async function main(){
    try{
        await bake()
    
        setTimeout(()=>{
            console.log("pay for the cake")
        }, 1000)
   
        setTimeout(()=>{
            console.log("get the cake")
        }, 2000)
    
        setTimeout(()=>{
            console.log("eat the cake")
        }, 1000)
    }
        catch(err){
            console.log(err)
            }
            
            finally{
                console.log("leave the shop")
            }
}

main()

    
