const user = require('../models/user');
module.exports = {
    post: (req, res) => {
        res.clearCookie('accessToken')
        res.status(205).send("Logged out successfully")
    }
};