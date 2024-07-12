
const mongoose = require('mongoose');
const Quote = require('./models/Quote');
const quote = [
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D.Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
        author: "Hellen Keller"
    }
];

function seedDB() {
    Quote.insertMany(quote);
    console.log('data seeded');
}
module.exports = seedDB;