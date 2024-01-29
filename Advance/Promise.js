const promise1 = new Promise((res, rej) => {
    // async task: db calls, cryptography, network,
    setTimeout(() => {
        console.log("Async task is completed")
        res()
    }, 1000)
})

promise1.then(() => {
    console.log("Promise consumed")
})

// ---------------------------------------------------------

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task 2")
        res()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved")
})

// ------------------------------------------------------------

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res({username: "salman", email: "salman@gmail.com"})
    }, 1000);
})

promise3.then((user) => {
    console.log(user)
})

// -----------------------------------------------------

const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        let err = false
        if (!err) {
            res({username: "salman2", email: 'salman2.com'})
        } else {
            rej("ERROR: something went wrong!")
        }
    }, 1000);
})

promise4.then((user) => {
    console.log(user)
    return user.username
})
.then((newuser) => {
    console.log("New User: ", newuser)
})
.catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("The Promise4 is executed")
})

// ----------------------------------------------------

const promise5 = new Promise((res, rej) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            res({username5: 'salman5', password5: 'promise5'})
        } else {
            rej("Error Occured!5")
        }
    }, 1000);
})

const consumePromiseFive = async () => {
    
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// ------------------------------------------------------

const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("ERROR: ", error)
    }
}

// getAllUsers() 

// -------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})