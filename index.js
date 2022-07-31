let player = {
  name: "Manan",
  chips: 145,
};
let cards = [];
let sum;
sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;
console.log(messageEl);
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
function start_game() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! you have got BlackJack!";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum : " + sum;
  cardEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++)
    cardEl.textContent = cardEl.textContent + cards[i] + " ";
}
function new_card() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
