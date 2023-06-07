let isAlive = false;
let hasBlackJack = false;

let cards = [];
let sum ;
let message="";
let cardStr;

let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
    let card = Math.floor(Math.random()*13)+1;
    if(card == 1)
    card=11;

    else if(card==11||card==12||card==13)
    card=10;

    return card;
}

function startGame(){
    if(!isAlive || hasBlackJack){
        hasBlackJack = false;
        sum=0;
        cards =[];
        let first = getRandomCard();
        let second = getRandomCard();
        cards.push(first);
        cards.push(second);

        sum=cards[0]+cards[1];

        cardStr = first+", "+second;

        isAlive=true;
        renderGame();
    }
}

function renderGame(){
    if(sum==21){
        message="Victory"
        hasBlackJack=true;
    }
    

    else if(sum<21){
        message="Still in the game, Do u want to draw another card?";
    }

    else{
        isAlive=false;
        message="Lost";
    }
    
    console.log(message);
    cardEl.textContent = "Cards: "+ cardStr;
    sumEl.textContent = "Sum: "+ sum; 
    document.getElementById("message-el").textContent = message;
}

function NewCard(){
    if(isAlive && !hasBlackJack){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum+= newCard;
        cardStr+= ", "+ newCard;
        renderGame();
    }
}