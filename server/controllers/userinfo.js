const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');
const { isAuthorized } = require('./token/index');
const axios = require('axios');

module.exports = {
    get: async (req, res) => {
        try {
            const tokenData = req.cookies.accessToken;
            if (tokenData.split(' ')[0] !== 'jwt' || tokenData.split(' ')[0] !== 'bearer') {
                // console.log(tokenData);
                await axios.get('https://api.github.com/user', { headers: { authorization: `token ${tokenData}` } })
                    .then((result) => {
                        const userinfo = result.data
                        const username = userinfo.login;
                        const blog = userinfo.html_url;
                        const email = userinfo.email;
                        const image = userinfo.avatar_url;
                        res.status(200).json({ data: { username, blog, email, image }, message: 'ok' });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(400).json('Bad request');
                    })
            } else {
                const { username, email, image, blog, current_region, current_city } = token(isAuthorized(tokenData));
                // const userData = { username, email, image, blog, current_region, current_city };
                const userInfo = await user.findOne({
                    where: {
                        email
                    }
                });
                res.status(200).json({ data: userInfo, message: 'ok' });
            }
        } catch (err) {
            res.status(404).json('not found');
        }
    }
}
// }
// // ==========================================================================        
// const axios = require('axios');

// module.exports = {
//     get: async (req, res) => {
//         // const tokenData = req.cookies.accessToken;
//         // const { email } = token.isAuthorized(tokenData);
//         // // const { username, email } = req.body;
//         // const userData = await user.findOne({
//         //     where: { email }
//         // });

//         // if (!userData) {
//         //     res.status(404).json('cannot find information');
//         // } else {
//         //     res.cookie("accessToken", accessToken);
//         //     res.status(200).json({message: 'ok'});
//         // }


//         // try {
// <<<<<<< HEAD
//         const tokenData = req.body.accessToken;
//         console.log(tokenData);
//         function conditionEmail(signUpId) {
//             let regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
//             if (!regExp.test(signUpId)) {
//                 return false;
//             }
//             return true;
//         }

//         if (!conditionEmail(tokenData)) {
// =======
//             const tokenData = req.headers.authorization.split(' ')[1];
//             // console.log(tokenData);
// >>>>>>> fd75c870bc47bfc5f83e6a8776618560c168a92d
//             return await axios.get('https://api.github.com/user', { headers: { authorization: `token ${tokenData}` } })
//                 .then((result) => {
//                     const userinfo = result.data
//                     const username = userinfo.login;
//                     const blog = userinfo.html_url;
//                     const email = userinfo.email;
//                     const image = userinfo.avatar_url;
//                     res.status(200).json({ username, blog, email, image });
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     res.status(400).json('Bad request');
//                 })
//         } else {
//             const email = tokenData;
//             // const { username, email } = req.body;
//             // console.log(email);
//             const userData = await user.findOne({
//                 where: { email }
//             })
// <<<<<<< HEAD
//             // console.log(userData);
//             if (!userData) {
//                 res.status(404).json('cannot find information');
//             } else {
//                 res.status(200).json({ message: 'ok', data: userData });
//             }
//         }


//         // console.log(userData)
//         // res.cookie();
//         // password처리 일부로 안한것 해주시면 감사
// =======
//             .catch((err) => {
//                 console.log(err);
//                 res.status(400).json('Bad request');
//         //========================================
//         try {
//             const tokenData = req.cookies.accessToken;
//             const { email } = token.isAuthorized(tokenData);
//             // const { username, email } = req.body;
//             const userData = await user.findOne({
//                 where: { email }
//             })
//             console.log(userData)
//             // res.cookie();
//             // password처리 일부로 안한것 해주시면 감사
//             res.status(200).send({message: 'ok', data: userData});
//             } catch(error) {
//                 res.status(404).json('cannot find information');
//             }
// 