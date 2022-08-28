let = document.getElementById("num");
let = document.getElementById("quote");
let = document.getElementById("dice");

const url = "https://api.adviceslip.com/advice";


let getQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        num.textContent = data.id;
        quote.textContent = data.advice;
    })
}

window.addEventListener("load", getQuote)

dice.addEventListener("click" , getQuote)