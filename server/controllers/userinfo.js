const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');
const { isAuthorized } = require('./token/index');

module.exports = {
    get: async (req, res) => {
        try {
            const tokenData = req.cookies.accessToken;
            const { username, email, image, blog, current_region, current_city } = token(isAuthorized(tokenData));
            const userData = { username, email, image, blog, current_region, current_city };
            res.status(200).json({data: userData, message: 'ok'});
        } catch (err) {
            res.status(404).json('not found');
        }
    }
}
// ==========================================================================        
const axios = require('axios');
module.exports = {
    post: async (req, res) => {
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


        // try {
            const tokenData = req.body.accessToken;
            // console.log(tokenData);
            return await axios.get('https://api.github.com/user', { headers: { authorization: `token ${tokenData}` } })
            .then((result) => {
                const userinfo = result.data
                const username = userinfo.login;
                const blog = userinfo.html_url;
                const email = userinfo.email;
                const image = userinfo.avatar_url;
                res.status(200).json({ username, blog, email, image });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json('Bad request');
            })
            // const { email } = token.isAuthorized(tokenData);
            // // const { username, email } = req.body;
            // // console.log(email);
            // const userData = await user.findOne({
            //     where: { email }
            // })
            // // console.log(userData)
            // // res.cookie();
            // // password처리 일부로 안한것 해주시면 감사
            // res.status(200).json({message: 'ok', data: userData});
            // } catch(error) {
            //     res.status(404).json('cannot find information');
            // }
    }
};