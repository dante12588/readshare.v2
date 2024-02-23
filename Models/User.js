const { User } = require('./Models');
const { hash } = require('../lib/hash');
const bcrypt = require('bcrypt');

// add new user to database
const addNewUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        User.create({
            username: username,
            email: email,
            password: hash(password)
        })
        .then(user => resolve(user))
        .catch(err => reject(err));
    })
}

// get user by username
const getUserByUsername = (username) => {
    return User.findOne({
        where: {
            username: username
        }
    })
}

const getUserByMail = (email) => {
    return User.findOne({
        where: {
            email: email
        }
    })
}

const getUserById = (id) => {
    return User.findOne({
        where: {
            id: id
        }
    })
}

const updateUserPasswordById = (userid, password) => {
    return User.update({
        password: hash(password)
    }, {
        where: {
            id: userid
        }
    })
};

const comparePassword = (password, hash) => {
    const result = bcrypt.compareSync(password, hash);
    return result;
};

module.exports = {
    addNewUser,
    getUserByUsername,
    getUserByMail,
    comparePassword,
    getUserById,
    updateUserPasswordById
}