function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`)
}

const chai = new createUser("chai", 100)
const tea = new createUser("tea", 250)

// tea.printMe()


// ------------------

let name = "Salman    "

// console.log(name.trim().length)

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.salman = function() {
    console.log(`salman is present in all objects`)
}

heroPower.salman()
myHeros.salman()


const User = {
    name: "chai",

}

const Teacher = {
    newVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupoort = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "salman     "

String.prototype.truelength = function() {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`The length is: ${this.trim().length}`)
}

anotherUserName.truelength()