const items = [
    {name:'book' ,  price: 200},
    {name:'water',  price: 30},
    {name:'toothbrush', price: 20},
    {name:'chair', price: 1000},
    {name:'bag', price: 300},
    {name:'phone', price: 4000}
    
]

const filteredNames = items.map((item)=>{
    return item.name
})

console.log(filteredNames)