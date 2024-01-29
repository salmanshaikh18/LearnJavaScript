class Person {
    // Constructor method
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Other methods can be defined outside the constructor
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
  // Creating an instance of the Person class
const person1 = new Person("John", 30);
  
  // Calling the sayHello method
// person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
  // -------------------------------------------------------------------------
class Mine {
    // constructor method
    constructor(name, age) {
        console.log("I am a constructor")
       this.name = name
       this.age = age
    }
}

// Creating an instance of the Mine class
const mine = new Mine('salman', 21)

console.log(mine.name)
console.log(mine.age)