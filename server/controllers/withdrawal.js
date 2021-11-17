const user  = require('../models/user');
const token = require('./token/index');

module.exports = {
    delete: async (req, res) => {
        const tokenData = req.headers.authorization.split(' ')[1];

        const { email } = token.isAuthorized(tokenData);
        // const { username, email } = req.body;
        const userData = await user.findOne({
            where: { email }
        });
        if (!userData) {
            res.status(500).json('error');
        } else {
            userData.destroy({
                truncate: true
            });
            res.status(200).json('Withdrawal safely');
        }
    }
};