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
            // console.log(userData)
            // res.cookie();
            // password처리 일부로 안한것 해주시면 감사
            res.status(200).send({message: 'ok', data: userData});
            } catch(error) {
                res.status(404).json('cannot find information');
            }
    }
};
// const user = require('../models/user');
// const group = require('../models/group');
// const token = require('./token/index');
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
//         function conditionEmail(signUpId) {
//             let regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
//             if (!regExp.test(signUpId)) {
//                 return false;
//             }
//             return true;
//         }
//         // try {

//         const tokenData = req.cookies.accessToken;
//         // 일반 유저일 경우(oauth 아닌 경우)
//         // if (conditionEmail(tokenData)) {
//         // console.log(tokenData)
//         const { email } = token.isAuthorized(tokenData);
//         // console.log(email)

//         // const { username, email } = req.body;
//         const userData = await user.findOne({
//             where: { email }
//         })
//         // console.log(userData)
//         // res.cookie();
//         // password처리 일부로 안한것 해주시면 감사
//         res.status(200).send({ message: 'ok', data: userData });
//         // } else {
//         //     const userData = await axios.get('https://api.github.com/user', { headers: { authorization: `token ${tokenData}` } });
//         //     console.log(userData);
//         //         // .then((result) => {
//         //         //     console.log(result, 'userinfo확인용');
//         //         //     res.end();
//         //         // })
//         //         // .then((err) => {
//         //         //     console.log(err);
//         //         // })
//         //     res.end();
//         // }

//         // } catch (error) {
//         //     res.status(404).json('cannot find information');
//         // }
//     }
// };
