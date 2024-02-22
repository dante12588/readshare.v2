const bcrypt = require('bcrypt');

exports.hash = (password) => {
    return bcrypt.hashSync(password, 10);
};