const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');
const axios = require('axios');

module.exports = {
    post: (req, res) => {
        const accessToken = req.body.accessToken;
        const region = req.body.region;
        const city = req.body.city;

        if (!region || !city) {
            res.status(400).json({ message: 'insufficient location information' });
        } else {
            if (accessToken.length <= 40) {
                // 깃허브로 로그인한 사용자일 경우
                axios.get('https://api.github.com/user', { headers: { authorization: `token ${accessToken}` } })
                    .then((result) => {
                        console.log(result);
                        const userInfo = result.data;
                        const username = userInfo.login;
                        const email = userInfo.email;
                        if (username || email) {
                            if (username) {
                                user.findOne({
                                    where: {
                                        username: username
                                    }
                                })
                                    .then((result) => {
                                        if (result) {
                                            user.update({
                                                current_region: region,
                                                current_city: city
                                            }, {
                                                where: {
                                                    username: username
                                                }
                                            })
                                            .then((result) => {
                                                res.status(201).json({ data: null, message: 'created' })
                                            })
                                        } else {
                                            res.json({ data: null, message: 'no such user in the database' });
                                        }
                                    })
                                    .catch((err) => {
                                        res.json(err);
                                    })
                            } else {
                                user.findOne({
                                    where: {
                                        username: username
                                    }
                                })
                                    .then((result) => {
                                        if (result) {
                                            user.update({
                                                current_region: region,
                                                current_city: city
                                            }, {
                                                where: {
                                                    email: email
                                                }
                                            })
                                            .then((result) => {
                                                res.status(201).json({ data: null, message: 'created' })
                                            })
                                        } else {
                                            res.json({ data: null, message: 'no such user in the database' });
                                        }
                                    })
                                    .catch((err) => {
                                        res.json(err);
                                    })
                            }
                        } else {
                            res.json({ data: null, message: 'not authorized' });
                        }
                    })
            } else {
                // 일반 사용자일 경우
                const userData = token.isAuthorized(accessToken);
                console.log(userData);
                user.findOne({
                    where: {
                        email: userData.email
                    }
                })
                    .then((result) => {
                        if (!result) {
                            res.status(400).json({ message: 'no such user in the database' })
                        } else {
                            user.update({ current_region: region, current_city: city },
                                {
                                    where: {
                                        email: userinfo.email
                                    }
                                })
                                .then((result) => {
                                    console.log(result);
                                    res.status(201).json({ message: 'created' });
                                })
                                .catch((err) => {
                                    console.log(err);
                                    res.status(400).json({ message: 'bad request' });
                                })
                        }

                    })
            }
        }
    },
    get: async (req, res) => {
        res.send('success')
    }
};