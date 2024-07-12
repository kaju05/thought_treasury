const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    quote: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    }
})

const Quote = mongoose.model('Quote', quotesSchema);

module.exports = Quote;
