const router = require('express').Router();
const Message = require('../Models/Message');

router.post('/messages/send', (req, res) => {
    const { senderId, receiverId, content } = req.body;
    Message.newMessage(senderId, receiverId, content)
        .then(message => {
            res.status(201).json(message);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/messages/:senderId/:receiverId', (req, res) => {
    Message.getMessages(req.params.senderId, req.params.receiverId)
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;