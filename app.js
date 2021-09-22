//JS 1 lesson 6 kanske

class Animal {

    constructor(name, legs) { //klassens konstruktion
        this.name = name
        this.legs = legs
    }
    speech() {              //Klassens metod, funktioner som tillhör en klass kallas metod
        return `${this.name} makes a noice`
    }
    numberOfLegs() {
        return `This animal has ${this.legs} legs`
    }
}

const dog = new Animal("Dog", 4) //skapar en instans av klassen
console.log(dog.speech())
console.log(dog.legs)
console.log(dog.numberOfLegs())

const cat = new Animal("Cat", 4)
console.log(cat.speech())
console.log(cat.legs)
console.log(cat.numberOfLegs())

const spider = new Animal("Spider", 8)
console.log(spider.speech())
console.log(spider.numberOfLegs())
