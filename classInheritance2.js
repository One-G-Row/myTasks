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
 class Farmer extends Animal {
   constructor(name, legs, product, work){
    super(name, legs, product)

    this.work = work
   }
   addAnimal(newAnimal){
    return animals.push(newAnimal)
   }
 }
let animalOne = new Animal("cow", 4 , "milk")
let animalTwo = new Animal("hen", 2 , "eggs")
let farmer = new Farmer("farmer", 2 , "food", "feeds")

let animals = [animalOne, animalTwo]

farmer.addAnimal(new Animal("goat", 4, "milk"))
console.log(animals)
