const { User } = require('./Models');

// add new user to database
const addNewUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        User.create({
            username: username,
            email: email,
            password: password
        })
        .then(user => resolve(user))
        .catch(err => reject(err));
    })
}

module.exports = {
    addNewUser
}