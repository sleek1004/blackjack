let firstCard = 10
let secondCard = 4
 

let total = firstCard + secondCard 

console.log(total)

let hasBlackJack = false

let isAlive = true
let message = ""


let messageEL = document.getElementById("message-el")
let totalEL = document.getElementById("total-el")
let cardsEL = document.getElementById("cards-el")



function startGame(){
    renderGame()
}

function renderGame(){

    cardsEL.textContent = "cards: " + firstCard + " " + secondCard

    totalEL.textContent = "Total: " + total

    if (total <= 20){
        message = "do you want to draw a new card?" 
    }
    else if (total === 21){
        message = "wohoo! You've got blackjack!"
        hasBlackJack = true
    } 
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEL.textContent = message
}

function newCard(){
   
    let card = 7 
    total += card

    renderGame()
}



  




