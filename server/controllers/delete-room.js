const user = require('../models/user');
const group = require('../models/group');


module.exports = {
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        res.send("Hello World");
    }, 
    delete: (req, res) => {
        res.send("Hello World");
    }
};