const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');
// const jwt = require('jsonwebtoken');

module.exports = {
    post: (req, res) => {
        const city = req.query.city;
        const accessToken = req.body.accessToken;
        const userEmail = token.isAuthorized(accessToken).email;

        group.findAll({
            include: [{
                model: user,
                where: {
                    email: userEmail
                }
            }]
        })
        .then((result) => {
            if(result.length === 0) {
                console.log(result);
                res.status(200).json({ data: null, message: 'this user has not joined any room yet'});
            } else {
                res.status(200).json({ data: result, message: 'ok' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ data: null, message: 'page not found' });
        })
    },
    get: (req, res) => {
        res.send("Hello World");
    }    
};