let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name:"hrishik",
    chips:123
}

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard(){
    let getRandomCardnumber = Math.floor(Math.random() * 13 ) + 1
    if (getRandomCardnumber > 10){
        return 10
    }
    else if (getRandomCardnumber === 1 ){
        return 11
    }else {
        return getRandomCardnumber
    }
}

function startGame(){
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "cards: "
    for(let i = 0; i < cards.length; i += 1){
        
        cardsEl.textContent += cards[i] + " "
    }
    
    if(sum < 21){
        message="do you want to draw a new card?"
    }else if (sum === 21){
        message="you got black jack"
        hasBlackjack = true
    }else{
        message="u r out of game"
        isAlive = true
    }
    messageEl.innerText = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
        console.log(cards)
    }
    
}





