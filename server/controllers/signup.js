const { user : USERModel } = require('../models');

module.exports = {
    post: (req, res) => {
        const request = req.body;
        
        res.send("Hello World");
    },
    get: (req, res) => {
        res.send("Hello World");
    }    
};