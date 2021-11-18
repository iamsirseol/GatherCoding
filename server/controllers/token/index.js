require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (data) => {
        const { username, email } = data;
        const sortedData = { username, email }
        return jwt.sign(sortedData, process.env.ACCESS_SECRET, {expiresIn: '24h'});
    },

    isAuthorized: (token) => {
        if (!token) {
            return 'unauthorized'
        } else {
            return jwt.verify(token, process.env.ACCESS_SECRET);
        }
    }
}