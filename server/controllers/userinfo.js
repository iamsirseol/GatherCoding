const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');
const { isAuthorized } = require('./token/index');

module.exports = {
    get: async (req, res) => {
        try {
            const tokenData = req.cookies.accessToken;
            const { username, email, image, blog, current_region, current_city } = token(isAuthorized(tokenData));
            const userData = { username, email, image, blog, current_region, current_city };
            res.status(200).json({data: userData, message: 'ok'});
        } catch (err) {
            res.status(404).json('not found');
        }
    }
};