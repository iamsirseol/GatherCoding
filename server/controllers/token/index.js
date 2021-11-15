require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (data) => {
        return jwt.sign(data, process.env.ACCESS_SECRET, {expiresIn: '24h'});
    },

    isAuthorized: (token) => {
        if (!token) {
            return 'unauthorized'
        } else {
            return jwt.verify(token, process.env.ACCESS_SECRET);
        }
        // 픽미업 형님들은 여기서 try catch // 사용함 공부해 볼 것
    }
}