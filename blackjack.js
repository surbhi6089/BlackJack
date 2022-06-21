let playerInfo ={
    pname : "Surbhi",
    points : 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = document.getElementById("player-info")

player.textContent = playerInfo.pname + ": Rs." + playerInfo.points

function getRandomCard(){
    let newno = Math.floor(Math.random() * 13) + 1
    if(newno === 1){
        return 11
    }
    else if(newno === 11 ||newno === 12 ||newno === 13){
        return 10
    }
    else{
        return newno
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()  
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard  
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "Sum: " + sum
    if( sum <=20){
        message = "Do you want to draw a new card?"
        
    }
    else if( sum === 21){
        message = "Congrats! You've won the game"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
        let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
    }
    else{
        message = "You can not draw a new card!"
    }
    messageEl.textContent = message
}
