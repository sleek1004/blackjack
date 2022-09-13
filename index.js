

let Cards = [] 
let total = 0
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEL = document.getElementById("message-el")
let totalEL = document.getElementById("total-el")
let cardsEL = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13)+ 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
    }


function startGame(){
    isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
Cards =[firstCard, secondCard]
total = firstCard + secondCard
    


    renderGame()
}

function renderGame(){




    cardsEL.textContent = "Cards: " 

    for(let i =0; i < Cards.length; i++) {
        cardsEL.textContent +=  Cards[i] + " "
    }

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
   
  

    let card =  getRandomCard()
    total += card
   Cards.push(card)

   console.log(Cards)
    renderGame()
}












