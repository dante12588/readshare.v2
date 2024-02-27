const { BookExchange } = require('./Models');

const addBookExchange = (bookRequestId) =>{
    return BookExchange.create({
        bookRequestId: bookRequestId,
    })
}

const getAllBookExchanges = () => {
    return BookExchange.findAll();
}

const getBookExchangesById = (id) => {
    return BookExchange.findAll({
        where: {
            id: id
        }
    });
}

const updateBookExchangeCompleted = (id, isCompleted) => {
    return BookExchange.update({
        isCompleted: isCompleted
    }, {
        where: {
            id: id
        }
    });

}

const updateBookExchange = (id, data) => {
    return BookExchange.update(data, {
        where: {
            id: id
        }
    });

}

module.exports = {
    addBookExchange,
    getAllBookExchanges,
    getBookExchangesById,
    updateBookExchangeCompleted,
    updateBookExchange
}