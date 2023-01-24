// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: '"The best way to find yourself is to lose yourself in the service of others."',
        person: "Mahatma Gandhi",
    },
    {
        quote: '"if you want to live a happy life, tie it to goal, not to people or things."',
        person: "Albert Einstein",
    },
    {
        quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
        person: "Aristotle",
    },

    {
        quote: "\"Your time is limited, so don't waste it living someone else's life.\"",
        person: "Steve Jobs",
    },
    {
        quote: '"It doesn\'t matter how slowly you go as long as you do not stop"',
        person: "Confucius",
    },
];

let previousRandom;
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    // check if the new random number is the same as the previous one
    while (random === previousRandom) {
        random = Math.floor(Math.random() * quotes.length);
    }

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    // update previousRandom variable
    previousRandom = random;
});
