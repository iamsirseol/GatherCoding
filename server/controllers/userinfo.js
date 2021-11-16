const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    get: async (req, res) => {
        // const tokenData = req.cookies.accessToken;
        // const { email } = token.isAuthorized(tokenData);
        // // const { username, email } = req.body;
        // const userData = await user.findOne({
        //     where: { email }
        // });

        // if (!userData) {
        //     res.status(404).json('cannot find information');
        // } else {
        //     res.cookie("accessToken", accessToken);
        //     res.status(200).json({message: 'ok'});
        // }
        try {
            const tokenData = req.cookies.accessToken;
            const { email } = token.isAuthorized(tokenData);
            // const { username, email } = req.body;
            const userData = await user.findOne({
                where: { email }
            })
            console.log(userData)
            // res.cookie();
            // password처리 일부로 안한것 해주시면 감사
            res.status(200).json({message: 'ok', data: userData});
            } catch(error) {
                res.status(404).json('cannot find information');
            }
    }
};