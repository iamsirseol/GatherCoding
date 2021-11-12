const { user } = require('../models');

module.exports = {
    get: async (req, res) => {
        const userData = await user.findOne({
            where: { username: req.body.username, email: req.body.email } //github 로그인시 삭제도 추가 'key'값이 어떻게 들어올지?
        });

        if (!userData) {
            res.status().send('사용자를 찾을 수 없습니다.');
        } else {
            userData.destroy({
                truncate: true
            })
            res.status(200).send('안전하게 탈퇴되었습니다.')
        }
        // res.send("Hello World");
    }    
};