const router = require('express').Router();
const Book = require('../Models/Book');

router.post('/books/add', (req, res) => {
    const title = req.body.title,
        author = req.body.author,
        description = req.body.description,
        userId = req.session.userId ? req.session.userId : 2,
        isOwnedByOwner = 1;

    Book.addBook(title, author, description, userId, isOwnedByOwner)
        .then(() => {
            console.log('Book ' + title + ' has been added');
            res.status(201).json({message: 'Book has been added'});
        })
        .catch(err => {
            res.status(400).json({error: err});
        })
});

router.get('/books/all', (req, res) => {
    Book.getAllBooks()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.status(400).json({error: err});
        })
});

router.get('/books/:id', (req, res) => {
    Book.getBookById(req.params.id)
        .then(book => {
            res.status(200).json(book);
        })
        .catch(err => {
            res.status(400).json({error: err});
        })
});

router.put('/books/:id', (req, res) => {
    Book.updateBook(req.params.id, req.body)
        .then(() => {
            res.status(204).json({message: 'Book has been updated'});
        })
        .catch(err => {
            res.status(400).json({error: err});
        })
});

router.delete('/books/:id', (req, res) => {
    Book.deleteBook(req.params.id)
        .then(() => {
            res.status(204).json({message: 'Book has been deleted'});
        })
        .catch(err => {
            res.status(400).json({error: err});
        })
});

module.exports = router;