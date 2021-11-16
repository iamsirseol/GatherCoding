const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');

module.exports = {
    put: (req, res) => {
        const accessToken = req.body.accessToken;
        const username = req.body.username;
        const password = req.body.password;
        const image = req.body.password;
        const blog = req.body.blog;

        const data = token.isAuthorized(accessToken);
        console.log(data);
        if (!password) {
            res.status(400).json({ data: null, message: 'you should enter password' });
        } else {
            user.update({ username: username, password: password, image: image, blog: blog }, {
                where: {
                    email: data.email
                }
            }).then((result) => {
                console.log(result);
                res.status(201).json({ message: 'successfully created' })
            }).catch((err) => {
                console.log(err);
                res.status(400).json({ message: 'bad request' });
            })
        }
    }
};