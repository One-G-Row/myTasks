//class
class Animal {
    constructor(name, legs, product){
        this.name = name
        this.legs = legs
        this.product = product
    }
produces(){ //method one
    console.log(`A ${this.name} produces ${this.product}`)
    return this /*returning the instance of the object therefore another method can be used on the object, 
                    leading to method chainng*/
}
leg(){ //method two
    console.log(`A ${this.name} has ${this.legs} legs`)
    return this
}
}

let AnimalOne = new Animal("cow", "4", "milk")
let AnimalTwo = new Animal("hen", "2", "eggs")

AnimalOne.produces().leg()
AnimalTwo.produces().leg()

//prototype
let Animal = function (name, legs, product){
    this.name = name
    this.legs = legs
    this.product = product
}

let AnimalOne = new Animal("cow", "4", "milk")
let AnimalTwo = new Animal("hen", "2", "eggs")

Animal.prototype.getProduce = function (){
    return `A ${this.name} produces ${this.product}`
}

console.log(AnimalOne.getProduce())
console.log(AnimalTwo.getProduce())