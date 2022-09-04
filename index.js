firstCard = 10
secondCard = 11
totalCard = firstCard + secondCard
console.log(totalCard)
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

if (totalCard <= 20){
    console.log("do you want to draw a new card?")
   

}
else if (totalCard === 21){
    console.log("wohoo! You've got blackjack!")
    hasBlackJack = true
} 

// 2. Flip its value to false in the appropriate code block 

else{
    console.log("You're out of the game!")
    isAlive = false
}






let  span = 21
 if (span < 21){
    console.log("You can not enter the club!")
 } else{
    console.log("you are welcome!")
 }

 console.log(hasBlackJack)

 // 3. Log it out to check that you're doing it right
 console.log(isAlive)




 // Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"


if(age < 100){
    console.log("not elegible")
}else if(age === 100){
    console.log("Here is your birthday card from the king!")
}
else{
    console.log("Not elegible, you have already gotten one")
}