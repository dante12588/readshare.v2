const { BookRequest } = require('./Models');

const addBookRequest = (requesterId, requestedUserId, requesterBookId, requestedBookId) => {
    return BookRequest.create({
        requesterId: requesterId,
        requesterBookId: requesterBookId,
        requestedBookId: requestedBookId,
        requestedUserId: requestedUserId
    })
};

const getAllBookRequests = () => {
    return BookRequest.findAll();
};

const updateBookRequest = (id, status) => {
    return BookRequest.update({
        status: status
    }, {
        where: {
            id: id
        }
    });
};

module.exports = {
    addBookRequest,
    getAllBookRequests,
    updateBookRequest
}