const user = require('../models/user');
const group = require('../models/group');

// require('dotenv').config();
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = {
    post: async (req, res) => {
        console.log(req.body);
        const authorizationCode = req.body.authorizationCode;
        // console.log(authorizationCode);
        await axios.post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${authorizationCode}`)
            .then((result) => {
                // const accessToken = result.data;
                // console.log(authorizationCode);
                console.log(result.data);
                const token = result.data.split('&')[0].split('=')[1];
                if (token === 'bad_verification_code') {
                    res.status(400).json('Bad Request');
                } else {
                    axios.get('https://api.github.com/user', { headers: { authorization: `token ${token}` } })
                        .then((result) => {
                            console.log(result);
                            const username = result.data.login;
                            const email = result.data.email;
                            const password = null;
                            const image = result.data.avatar_url;
                            const blog = result.data.html_url;
                            if (email || username) {
                                if(!email) {
                                    user.findOne({ where: { username } })
                                    .then((result) => {
                                        if (!result) {
                                            user.create({ username, email, password, image, blog })
                                                .then(() => {
                                                    console.log('success');
                                                })
                                            res.status(201).json({ accessToken: token });
                                        } else {
                                            res.status(409).json({ data: null, message: 'This user already exists in the database' });
                                        }
                                    });
                                } else {
                                    user.findOne({ where: { email } })
                                    .then((result) => {
                                        if (!result) {
                                            user.create({ username, email, password, image, blog })
                                                .then((userinfo) => {
                                                    console.log(userinfo);
                                                })
                                            res.status(201).json({ accessToken: token });
                                        } else {
                                            res.status(409).json({ data: null, message: 'This user already exists in the database' });
                                        }
                                    });
                                }
                                
                            } else {
                                res.status(400).json({ data:null, message: 'you should enter email or username'});
                            }
                        })
                }
            })
            .catch(() => {
                res.status(400).json('Bad Request');
            })
    },
    get: (req, res) => {
        res.send("Hello World");
    }
};

// const user = require('../models/user');
// const group = require('../models/group');

// // require('dotenv').config();
// const clientID = process.env.GITHUB_CLIENT_ID;
// const clientSecret = process.env.GITHUB_CLIENT_SECRET;
// const axios = require('axios');

// module.exports = {
//     post: async (req, res) => {
//         console.log(req.body);
//         const authorizationCode = req.body.authorizationCode;
//         return await axios.post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${authorizationCode}`)
//             .then((result) => {
//                 // const accessToken = result.data;
//                 // console.log(authorizationCode);
//                 console.log(result.data);
//                 const token = result.data.split('&')[0].split('=')[1];
//                 if (token === 'bad_verification_code') {
//                     res.status(400).json('Bad Request');
//                 } else {
//                     axios.get('https://api.github.com/user', { headers: { authorization: `token ${token}` } })
//                         .then((result) => {
//                             console.log(result);
//                             const username = result.login;
//                             const email = result.email;
//                             const password = null;
//                             const image = result.avatar_url;
//                             const blog = result.html_url;
//                             user.findOne({ where: { email }})
//                             .then((result) => {
//                                 if(!result) {
//                                     user.create({ username, email, password, image, blog })
//                                     .then((userinfo) => {
//                                         console.log(userinfo);
//                                     })
//                                     res.status(201).json({ accessToken: token });
//                                 } else {
//                                     res.status(409).json({ data:null, message:'This user already exists in the database'});
//                                 }
//                             });
//                         })
//                 }
//             })
//             .catch(() => {
//                 res.status(400).json('Bad Request');
//             })
//     },
//     get: (req, res) => {
//         res.send("Hello World");
//     }
// };