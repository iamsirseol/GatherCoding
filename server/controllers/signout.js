const { user } = require('../models');
module.exports = {
    post: (req, res) => {
        const tokenData = req.data.data.accessToken;

        res.status(205).send("로그아웃이 되었습니다.")
    }
};