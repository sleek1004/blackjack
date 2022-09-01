firstCard = 10
secondCard = 13
totalCard = firstCard + secondCard
console.log(totalCard)

if (totalCard < 21){
    console.log("do you want to draw a new card?")

}
else if (totalCard === 21){
    console.log("wohoo! You've got blackjack!")
}

else if (totalCard > 21){
    console.log("You're out of the game!")
}