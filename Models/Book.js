const { Book } = require('./Models');

const addBook = (title, author, description, userId, isOwnedByOwner) => {
    return Book.create({
        title: title,
        author: author,
        description: description,
        userId: userId,
        isOwnedByOwner: isOwnedByOwner
    })
};

const getAllBooks = () => {
    return Book.findAll()
};

const getBookById = (id) => {
    return Book.findOne({
        where: {
            id: id
        }
    })
};

const updateBook = (id, data) => {
    return Book.update(data, {
        where: {
            id: id
        }
    })
};

const deleteBook = (id) => {
    return Book.destroy({
        where: {
            id: id
        }
    })
};

module.exports = {
    getBookById,
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
};