## Promises

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations more easily and cleanly, avoiding the use of nested callbacks (known as callback hell) and making code more readable.

A Promise has three states:

1. **Pending:** The initial state, the promise is neither fulfilled nor rejected. It's in progress.

2. **Fulfilled:** The asynchronous operation completed successfully, and the promise has a resulting value.

3. **Rejected:** The asynchronous operation encountered an error, and the promise has a reason for the failure.

Promises are created using the `Promise` constructor, which takes a single argument: a function called the "executor." The executor function takes two parameters, `resolve` and `reject`, which are functions provided by the Promise implementation. The executor function contains the asynchronous operation.

Here's a basic example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

// Handling the promise
myPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded!
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed!
  });
```

In the above example:

- If the asynchronous operation is successful, `resolve` is called with the result.
- If there is an error, `reject` is called with an error message.

You can use the `.then()` method to handle the resolved value and the `.catch()` method to handle any errors. Additionally, the `.finally()` method can be used to perform actions regardless of whether the promise was fulfilled or rejected.

Promises are essential for managing asynchronous code in a more readable and maintainable way. They provide a cleaner alternative to callback functions and make it easier to reason about the flow of asynchronous operations.


## fetch()

A `fetch()` promise only rejects when a network error is encountered (which is usually when there's a permission issue or similar). A `fetch` promise does not reject an HTTP errors (404, etc.). Instead, a then() handler must check the `Response.ok` and/or Response.status properties.

The `fetch()` function in JavaScript is used to make asynchronous HTTP requests. It is a modern replacement for the older `XMLHttpRequest` object and provides a more flexible and powerful way to interact with web servers.

Here's a basic example of using `fetch()` to make a simple GET request:

```javascript
// Making a simple GET request using fetch()
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    console.log('Data from the server:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

In this example:

1. The `fetch()` function takes a URL as its argument and returns a Promise that resolves to the `Response` object representing the completion or failure of the request.

2. The first `.then()` block checks if the response status is within the range of 200 to 299, indicating a successful request. If the status is outside this range, it throws an error.

3. If the response is successful, the second `.then()` block parses the response body using the `json()` method, which also returns a Promise.

4. The final `.then()` block handles the actual data retrieved from the server.

5. The `.catch()` block is used to catch and handle any errors that might occur during the request.

The `fetch()` function supports various options to customize the request, including specifying the HTTP method, headers, and request body for POST requests.

```javascript
// Making a POST request with custom headers and a JSON body
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Data from the server:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

Note: The `fetch()` function is asynchronous, and it returns a Promise. As such, it works well with other asynchronous patterns like `async/await` for cleaner and more readable code.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data from the server:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

In summary, `fetch()` is a powerful and versatile function for making HTTP requests in JavaScript, commonly used in modern web development for data retrieval and interaction with APIs.


## JavaScript Classes

JavaScript classes were introduced in ECMAScript 6 (ES6) to provide a more structured and syntactic way to define constructor functions and create objects, following the principles of object-oriented programming (OOP). Despite the term "class," JavaScript's implementation of classes is still based on its prototype-based inheritance model.

Here's a basic overview of JavaScript classes:

### 1. **Class Declaration:**
   - You can declare a class using the `class` keyword.

     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }

       sayHello() {
         console.log(`Hello, my name is ${this.name}.`);
       }
     }
     ```

### 2. **Constructor Method:**
   - The `constructor` method is a special method called when an instance of the class is created. It is used to initialize object properties.

### 3. **Class Methods:**
   - You can define methods within the class, which become part of the prototype of the objects created from the class.

### 4. **Class Instances:**
   - You create instances of a class using the `new` keyword.

     ```javascript
     let person = new Person("John", 30);
     ```

### 5. **Inheritance:**
   - Classes support inheritance, allowing one class to extend another.

     ```javascript
     class Student extends Person {
       constructor(name, age, grade) {
         super(name, age); // Call the constructor of the parent class
         this.grade = grade;
       }

       study() {
         console.log(`${this.name} is studying.`);
       }
     }
     ```

   - The `extends` keyword is used to create a subclass (`Student`) that inherits from a parent class (`Person`). The `super` keyword is used to call the constructor of the parent class.

### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Outputs: Woof!
```

JavaScript classes provide a more concise and readable syntax for defining constructor functions and working with prototypes. However, it's important to note that under the hood, JavaScript's class system is still based on prototypes and constructor functions.


## OOP

Object-oriented programming (OOP) is a programming paradigm that is based on the concept of "objects," which can contain data in the form of fields (often known as properties or attributes) and code, in the form of procedures (often known as methods). JavaScript, despite being a prototype-based language, supports OOP principles through the use of prototypes and constructor functions. Here are the key aspects of OOP in JavaScript:

1. **Objects:**
   - Everything in JavaScript is an object, and objects can be created using literal notation or constructor functions.
   - Literal notation:

     ```javascript
     let person = {
       name: "John",
       age: 30,
       sayHello: function() {
         console.log("Hello, my name is " + this.name);
       }
     };
     ```

   - Constructor function:

     ```javascript
     function Person(name, age) {
       this.name = name;
       this.age = age;
       this.sayHello = function() {
         console.log("Hello, my name is " + this.name);
       };
     }

     let person = new Person("John", 30);
     ```

2. **Constructor Functions:**
   - Constructor functions are used to create objects with a common structure.
   - They are invoked using the `new` keyword.

3. **Prototypes:**
   - JavaScript is prototype-based, meaning that objects can inherit properties and methods from other objects.
   - Each object has an associated prototype, and if a property or method is not found on the object itself, JavaScript looks for it in the prototype chain.

4. **Prototypal Inheritance:**
   - Objects can inherit properties and methods from other objects through their prototypes.
   - The `Object.create()` method can be used to create a new object with a specified prototype.

     ```javascript
     let personPrototype = {
       sayHello: function() {
         console.log("Hello, my name is " + this.name);
       }
     };

     let person = Object.create(personPrototype);
     person.name = "John";
     person.age = 30;
     ```

5. **Encapsulation:**
   - Encapsulation is the bundling of data and the methods that operate on that data within a single unit, i.e., an object.
   - Private and public members can be simulated using closures and naming conventions.

     ```javascript
     function Car(make, model) {
       // Private variable
       let mileage = 0;

       // Public properties
       this.make = make;
       this.model = model;

       // Public method
       this.drive = function(distance) {
         mileage += distance;
         console.log("Drove " + distance + " miles. Total mileage: " + mileage);
       };
     }
     ```

6. **Polymorphism:**
   - Polymorphism allows objects to be treated as instances of their parent class, enabling code to work with objects of multiple types.

     ```javascript
     function Animal() {
       this.makeSound = function() {
         console.log("Some generic sound");
       };
     }

     function Dog() {
       this.makeSound = function() {
         console.log("Bark!");
       };
     }

     function Cat() {
       this.makeSound = function() {
         console.log("Meow!");
       };
     }

     let myDog = new Dog();
     let myCat = new Cat();

     let animals = [new Animal(), myDog, myCat];

     for (let animal of animals) {
       animal.makeSound();
     }
     ```

These are the fundamental principles of object-oriented programming in JavaScript. While JavaScript's implementation of OOP is different from class-based languages like Java or C++, it still provides a flexible and powerful way to create and work with objects.


## Object
- collection of properties and methods
- toLowerCase

In JavaScript, an object is a complex data type that allows you to store and organize data. Objects are instances of a class, and they can have properties and methods. Properties are essentially key-value pairs, where the keys are strings (or symbols) and the values can be any valid JavaScript data type, including other objects or functions.

Here's a simple example of creating an object in JavaScript using literal notation:

```javascript
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```

In this example, `person` is an object with properties such as `name`, `age`, and `isStudent`. It also has a method (`sayHello`) which is a function associated with the object. You can access the properties and methods of an object using dot notation:

```javascript
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30
person.sayHello();         // Output: Hello, my name is John
```

You can also create objects using constructor functions, which allow you to create multiple instances of objects with the same structure:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
```

In this example, `myCar` is an instance of the `Car` object created using the `new` keyword.

JavaScript is a prototype-based language, and objects in JavaScript can inherit properties and methods from other objects through their prototype chain. This allows for a flexible and dynamic approach to object creation and manipulation in the language.


## Why use OOP

Object-oriented programming (OOP) is a programming paradigm that provides a way of structuring and organizing code by representing real-world entities as objects, each having properties and behaviors. Here are some reasons why OOP is widely used:

1. **Encapsulation:**
   - OOP allows for encapsulation, which is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (an object). This helps in organizing and controlling access to the internal state of an object, providing a clear interface for interaction.

2. **Abstraction:**
   - Abstraction allows developers to focus on the essential aspects of an object while hiding unnecessary details. It simplifies complex systems by modeling classes based on the essential characteristics they share, and users interact with objects at a higher level without needing to understand the internal complexities.

3. **Inheritance:**
   - Inheritance enables the creation of a new class (a derived or child class) that inherits properties and methods from an existing class (a base or parent class). This promotes code reuse and helps in creating a hierarchy of classes, allowing common functionality to be shared among related classes while still providing room for customization.

4. **Polymorphism:**
   - Polymorphism allows objects of different types to be treated as objects of a common type. This simplifies code by enabling the use of a common interface for objects with diverse implementations. Polymorphism is often achieved through method overriding and interfaces, making code more flexible and extensible.

5. **Modularity:**
   - OOP promotes modularity by breaking down a large system into smaller, more manageable, and independent units (objects). Each object can be developed, tested, and maintained independently, leading to a more modular and scalable codebase.

6. **Code Reusability:**
   - OOP facilitates code reusability through the use of classes and inheritance. Once a class is defined, it can be used to create multiple instances (objects), and subclasses can reuse the functionality of their parent classes. This reduces redundancy and makes maintenance easier.

7. **Maintainability:**
   - OOP promotes a clear and organized structure, making code more readable and maintainable. Changes to one part of the codebase are less likely to impact other parts, reducing the risk of unintended side effects. This is crucial for large and complex software projects.

8. **Real-world Modeling:**
   - OOP allows developers to model real-world entities and their relationships more closely, making it easier to understand, design, and implement systems that mirror the structure and behavior of the problem domain.

While OOP has many advantages, it's important to note that the choice of programming paradigm depends on the specific requirements of a project, and different paradigms may be more suitable for different scenarios.


## Parts of OOP
- Object litereal
- Consutructor function
- Classses
- Instances (new, this)


## 4 pillars of OOP
ffffff
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

In JavaScript, the concepts of abstraction, encapsulation, inheritance, and polymorphism are all supported, although the language uses a prototype-based model for object-oriented programming. Let's explore how these principles are implemented in JavaScript:

1. **Abstraction:**
   - **Explanation:** Abstraction involves simplifying complex systems by modeling classes based on their essential characteristics and hiding unnecessary details.
   - **In JavaScript:** Abstraction is achieved by creating classes or objects that represent real-world entities with their essential properties and methods. Developers can interact with these objects without needing to understand the internal complexities.
   - **Example:**

     ```javascript
     // Abstraction through a Car class
     function Car(make, model) {
       this.make = make;
       this.model = model;
       this.start = function() {
         console.log("Engine started.");
       };
     }

     let myCar = new Car("Toyota", "Camry");
     myCar.start();
     ```

2. **Encapsulation:**
   - **Explanation:** Encapsulation involves bundling data (attributes) and methods (functions) that operate on the data into a single unit (an object), controlling access to the internal state.
   - **In JavaScript:** Encapsulation is achieved through the use of constructor functions and closure to create private variables and methods.
   - **Example:**

     ```javascript
     // Encapsulation through a Person class
     function Person(name, age) {
       // Private variable
       let _age = age;

       // Public properties
       this.name = name;

       // Public method accessing private variable
       this.getAge = function() {
         return _age;
       };
     }

     let person = new Person("John", 30);
     console.log(person.name);   // Accessing public property
     console.log(person.getAge()); // Accessing private variable through a method
     ```

3. **Inheritance:**
   - **Explanation:** Inheritance allows a new class (child class) to inherit properties and methods from an existing class (parent class), promoting code reuse and creating a hierarchy of classes.
   - **In JavaScript:** Inheritance is implemented through prototype-based inheritance. Objects have prototypes, and they inherit properties and methods from their prototypes.
   - **Example:**

     ```javascript
     // Inheritance through prototype
     function Animal(name) {
       this.name = name;
     }

     Animal.prototype.makeSound = function() {
       console.log("Some generic sound");
     };

     function Dog(name) {
       Animal.call(this, name); // Call the parent constructor
     }

     Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal

     Dog.prototype.bark = function() {
       console.log("Woof!");
     };

     let myDog = new Dog("Buddy");
     myDog.makeSound(); // Inherited method
     myDog.bark();      // Dog-specific method
     ```

4. **Polymorphism:**
   - **Explanation:** Polymorphism allows objects of different types to be treated as objects of a common type. It allows for flexibility and extensibility in the code.
   - **In JavaScript:** Polymorphism is achieved through the ability of objects to share a common interface. Different objects can implement the same method name but with different behaviors.
   - **Example:**

     ```javascript
     // Polymorphism through a common interface
     function makeSound(animal) {
       animal.makeSound();
     }

     let cat = {
       makeSound: function() {
         console.log("Meow!");
       }
     };

     let dog = {
       makeSound: function() {
         console.log("Woof!");
       }
     };

     makeSound(cat);
     makeSound(dog);
     ```

In JavaScript, these principles are implemented in a slightly different way compared to class-based languages, but the core concepts remain consistent. Understanding how these principles work in JavaScript is essential for effective object-oriented programming in the language.