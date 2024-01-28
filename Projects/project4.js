const playGame = () => {
    const btn = document.querySelector('#submit')
    let randomNum = Number()
    let userInput = Number()
    let life = Number(10)
    let attempts = Number(0)

    const generateRandomNumber = () => {
        randomNum = Math.floor(Math.random() * 10 + 1) // generate random number between 1 to 100
    }
    generateRandomNumber()
    const guessesRemaining = () => {
        attempts = 10 - life + 1
        if (userInput != randomNum) {
            life -= 1
            document.querySelector('#life').innerHTML = `Guesses Remaining: ${life}`
        } else if (userInput == randomNum) {
            document.querySelector('.result').innerHTML = `You won the game in ${attempts} attempts`
            life = 10
        }
    }
    const checkWinner = () => {
        userInput = Number(document.querySelector('input').value)
        // userNum = userInput
    
        let result = document.querySelector('.result')
       
        if (userInput === randomNum && life >= 1) {
            // life = 10
            result.innerHTML = `You Won :)`
        } else if (userInput > randomNum) {
            result.innerHTML = `Lower Number Please`
            // life = life - 1
        } else if (userInput < randomNum) {
            result.innerHTML = `Higher Number Please`
            // life = life - 1
        }
        
        if (life == 0) {
            result.innerHTML = `You completed 10 attempts and you are lose! :(`
            btn.disabled = true
        }
    }
    btn.addEventListener('click', () => {
        checkWinner()
        guessesRemaining()
        console.log("life: ", life)
        console.log("randomNum: ", randomNum)
    })
    
}

playGame()

const playAgain = document.querySelector('#playAgain')

playAgain.addEventListener('click', () => {
    location.reload() // relaod the curent Page
})

