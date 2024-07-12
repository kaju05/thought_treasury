let express = require('express');
let app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./api/quoteRoutes');
const cors = require('cors');
app.use(cors({ origin: ['http://localhost:3000'] }))
mongoose.connect('mongodb://127.0.0.1:27017/QuotesDb')
    .then(() => {
        console.log('db connected successfully');
    })
    .catch(() => {
        console.log('sorry some error occurred');
    });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(quoteRoutes);


// seedDB()


app.listen(8080, () => {
    console.log('server connected at port 8080');
})