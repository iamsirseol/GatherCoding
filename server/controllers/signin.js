const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    post: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).json('you should enter all the required information');
        } else {
            const data = await user.findOne({ where: { email, password }});
            if (!data) {
                res.status(404).json('not authorized');
            } else {
                console.log(data);
                const accessToken = token.generateAccessToken(data.dataValues); 
                const username = data.dataValues.username;
                // console.log(accessToken);
<<<<<<< HEAD
                res.cookie('accessToken', accessToken)
                res.status(200).json({ "data": { "accessToken": accessToken, "username": username}, "message": "ok" });
=======
                res.cookie("accessToken", accessToken) // {data: {accessToken: accessToken}} 에서 쿠키로 전달로 수정
                res.status(200).json({"username": username, "message": "ok" });
>>>>>>> e432522a08bbc826538efbcba17ee4b6b22d5813
            }
        }   
    }
}

