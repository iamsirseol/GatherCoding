const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    get: async (req, res) => {
        // const tokenData = req.body.data.accessToken;
        // console.log(token.isAuthorized(req))
        // console.log(req.cookies.jwt)
        // let validToken = 
        // if(req.cookies.jwt){
            
        // }
        console.log(req.cookies)
        console.log(req.cookies.accessToken)
        // console.log(req.data)
        // const { email } = token.isAuthorized(tokenData);
        // const { username, email } = req.body;
        // const userData = await user.findOne({
        //     where: { email }
        // });

        // if (!userData) {
        //     res.status(404).json('cannot find information');
        // } else {
        //     res.status(200).json({ data: userData, message: 'ok'});
        // }
        res.send("Hello World222");
    }
};