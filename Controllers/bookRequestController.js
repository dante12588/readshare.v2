const router = require('express').Router();
const BookRequest = require('../Models/BookRequest');


router.post('/book-requests/add', (req, res) => {
    const { requesterId, requestedUserId, requesterBookId, requestedBookId } = req.body;
    BookRequest.addBookRequest(requesterId, requestedUserId, requesterBookId, requestedBookId)
        .then(bookRequest => {
            res.status(201).json(bookRequest);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/book-requests/all', (req, res) => {
    BookRequest.getAllBookRequests()
        .then(bookRequests => {
            res.status(200).json(bookRequests);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.put('/book-requests/update', (req, res) => {
    const { id, status } = req.body;
    BookRequest.updateBookRequest(id, status)
        .then(bookRequest => {
            res.status(200).json(bookRequest);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});    

module.exports = router;