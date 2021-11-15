const user = require('../models/user');
module.exports = {
    post: (req, res) => {
        // const tokenData = req.data.accessToken;

        res.status(205).send("Logged out successfully")
    }
};