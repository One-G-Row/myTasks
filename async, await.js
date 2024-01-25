let stock = {
sweets: ["ksl", "bigbom", "koo"],
tissue: ["tena", "toilex", "bella"],
biscuits: ["happyhappy", "ginger", "lemon"],
matchboxes: ["rhinokubwa", "rhinondogo", "solio"]
}

let shopIsOpen = true;

let matchboxesChoice = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("which matchbox would you like?"))
        },1000)
    })

    }

async function shop(){
    console.log("A")
    console.log("B")
    console.log("C")

    await matchboxesChoice()

    console.log("D")
    console.log("E")
}

shop()