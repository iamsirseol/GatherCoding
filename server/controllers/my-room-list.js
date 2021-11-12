const { user } = require('../models');


module.exports = {
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        res.send("Hello World");
    }    
};