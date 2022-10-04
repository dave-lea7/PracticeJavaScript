const quotes =
[
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "To taste success, you shall be earlier and more diligent.",
        author: "Harvard University",
    },
    {
        quote: "What doesn`t kill me makes me stronger.",
        author: "Friedirich Wilhelm Mietzsche",
    },
    {
        quote: "Don`t dream, Be it",
        author: "Tim curry",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "No great man ever complains of want of opportunity",
        author: "Anonymous",
    },
    {
        quote: "It ain`t over till it`s over.",
        author: "BaseBall",
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value",
        author: "Albert Einstein",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;