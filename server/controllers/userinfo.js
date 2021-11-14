const { user } = require('../models');

module.exports = {
    get: async (req, res) => {
        const tokenData = req.data.data.accessToken;
        const { username, email } = token.isAuthorized(tokenData);
        // const { username, email } = req.body;
        const userData = await user.findOne({
            where: { username, email }
        });

        if (!userData) {
            res.status(404).json('cannot find user information');
        } else {
            res.status(200).json({ data: userData, message: 'ok'});
        }
        // res.send("Hello World222");
    }    
};