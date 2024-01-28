let num = 88

const parent = () => {
    console.log("parent: ", num)
    const child = () => {
        console.log("Child: ", num)
        const grandChild = () => {
            console.log("GrandChild: ", num)
            // child()
        }
        grandChild()
    }
    child()
    
}



parent()