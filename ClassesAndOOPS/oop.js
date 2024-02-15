const user = {
    userName: "Salman",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log(`Got user details from database.`)
        // console.log(`UserName: ${this.userName}`)
        // console.log(this)
    }
}

// 1st way to acces properties of objects
// console.log(user['userName'])

// 2nd way to acces properties of objcect
// console.log(user.userName)

// console.log(user.getUserDetails())
// console.log(this)


// -----------------------------------------

// const date = new Date()

// console.log(date.toLocaleTimeString())

function User(userName, age, email) {
    this.userName = userName
    this.age = age
    this.email = email
    this.greeting = function() {
        console.log(`Welcome ${age}`)
    }
    return this
}

const userOne = new User("Salman", 21, 'salman@gmail.com')
const userTwo =  new User("two", 22, "two.com")

console.log(userOne.constructor)