const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    get: async (req, res) => {
        const tokenData = req.cookie.accessToken;
        const { email } = token.isAuthorized(tokenData);
        // const { username, email } = req.body;
        const userData = await user.findOne({
            where: { email }
        });

        if (!userData) {
            res.status(404).json('cannot find information');
        } else {
            res.cookie("accessToken", accessToken);
            res.status(200).json({message: 'ok'});
        }
    }
};