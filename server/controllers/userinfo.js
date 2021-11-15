const user = require('../models/user');
const group = require('../models/group');

module.exports = {
    get: async (req, res) => {
        const tokenData = req.body.accessToken;
        const { email } = token.isAuthorized(tokenData);
        // const { username, email } = req.body;
        const userData = await user.findOne({
            where: { email }
        });

        if (!userData) {
            res.status(404).json('cannot find information');
        } else {
            res.status(200).json({ data: userData, message: 'ok'});
        }
        // res.send("Hello World222");
    }    
};