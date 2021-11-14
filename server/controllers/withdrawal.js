const user  = require('../models/user');
const token = require('./token/index');

module.exports = {
    delete: async (req, res) => {
        // const tokenData = req.data.data.accessToken;
        // const { username, email } = token.isAuthorized(tokenData);
        const { username, email } = req.body;
        const userData = await user.findOne({
            where: { username, email }
        });
        if (!userData) {
            res.status().json('사용자를 찾을 수 없습니다.');
        } else {
            userData.destroy({
                truncate: true
            })
            res.status(200).json('안전하게 탈퇴되었습니다.')
        }
        // res.send("Hello World");
    }    
};