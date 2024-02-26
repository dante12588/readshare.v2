const { Message } = require('./Models');
const { Op } = require('sequelize');


const newMessage = (senderId, receiverId, content) => {
    return Message.create({
        senderId: senderId,
        receiverId: receiverId,
        content: content
    })
}

const getMessages = (senderId, receiverId) => {
    return Message.findAll({
        where: {
            [Op.or]: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        }
    })
}

module.exports = {
    newMessage,
    getMessages
}