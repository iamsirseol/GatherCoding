const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');

module.exports = {
    post: async (req, res) => {
        const accessToken = req.body.accessToken;
        const region = req.body.region;
        const city = req.body.city;
        const userinfo = token.isAuthorized(accessToken);

        // // Change everyone without a last name to "Doe"
        // await User.update({ lastName: "Doe" }, {
        //     where: {
        //         lastName: null
        //     }
        // });
        if (!region || !city || !userinfo) {
            res.status(400).json({ data: null, message: 'some user information is omitted' });
        } else {
            const data = user.findOne({
                where: {
                    email: userinfo.email
                }
            })
                .then((result) => {
                    if (!result) {
                        res.status(400).json({ data: null, message: 'no such user in the database' })
                    } else {
                        user.update({ current_region: region, current_city: city },
                            {
                                where: {
                                    email: userinfo.email
                                }
                            })
                            .then((result) => {
                                console.log(result);
                                res.status(201).json({ data: null, message: 'created' });
                            })
                            .catch((err) => {
                                console.log(err);
                                res.status(400).json({ data: null, message: 'bad request' });
                            })
                    }

                })
        }

    },
    get: async (req, res) => {
        res.send('success')
    }
};