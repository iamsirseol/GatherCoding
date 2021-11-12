const { user } = require('../models');

// require('dotenv').config();
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = {
    post: async (req, res) => {
        console.log(req.body);
        const authorizationCode = req.body.authorizationCode;
        return await axios.post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${authorizationCode}`)
        .then((result) => {
            // const accessToken = result.data;
            // console.log(authorizationCode);
            console.log(result.data);
            const token = result.data.split('&')[0].split('=')[1];
            if (token === 'bad_verification_code') {
                res.status(400).json('Bad Request');
            } else {
                res.status(200).send({accessToken: token});
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