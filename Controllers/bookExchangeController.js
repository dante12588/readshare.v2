const router = require('express').Router();
const BookExchange = require('../Models/BookExchange');

router.post('/book-exchanges/start', (req, res) => {
    const bookRequestId = req.body.bookRequestId;

    BookExchange.addBookExchange(bookRequestId)
        .then(() => {
            res.status(201).json({message: 'Book exchange has been started'});
        })
        .catch(err => {
            res.json({error: err});
        })
});

router.get('/book-exchanges/:exchangeid', (req, res) => {
    const exchangeid = req.params.exchangeid;
    BookExchange.getBookExchangesById(exchangeid)
        .then(bookExchange => {
            res.json(bookExchange);
        })
        .catch(err => {
            res.json({error: err});
        })
});

router.put('/book-exchanges/:exchangeid/complete', (req, res) => {
    const exchangeid = req.params.exchangeid;
    BookExchange.updateBookExchangeCompleted(exchangeid, true)
        .then(() => {
            res.status(200).json({message: 'Book exchange has been completed'});
        })
        .catch(err => {
            res.json({error: err});
        })
});

router.put('/book-exchanges/:exchangeid/update', (req, res) => {
    const exchangeid = req.params.exchangeid;
    const data = req.body;
    BookExchange.updateBookExchange(exchangeid, data)
        .then(() => {
            res.status(200).json({message: 'Book exchange has been updated'});
        })
        .catch(err => {
            res.json({error: err});
        })
});

module.exports = router;