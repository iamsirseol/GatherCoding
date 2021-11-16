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
                // console.log(accessToken);
                res.status(200).json({ "data": { "accessToken": accessToken }, "message": "ok" });
            }
        }   
    },
    get: (req, res) => {
        res.send("Hello World");
    }   
}

