const Quote = require('../models/Quote');

const router = require('express').Router();
router.get('/allquotes', async (req, res) => {
    let allQuotes = await Quote.find({});
    res.status(200).json(allQuotes);
})
router.post('/allquotes', async (req, res) => {
    let { author, quote } = req.body;
    let addedQoute = await Quote.create({ author, quote });
    res.status(200).json(addedQoute);
})
router.get('/allquotes/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let showQuote = await Quote.findById(id);
        res.status(200).json(showQuote);
    }
    catch (e) {

    }
})




module.exports = router;