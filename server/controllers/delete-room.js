const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');
const { User } = require('../models');

module.exports = {
    // post: (req, res) => {
    //     res.send("Hello World");
    // },
    // get: (req, res) => {
    //     res.send("Hello World");
    // }, 
    delete: async (req, res) => {
        const groupList = await group.findAll({
            include: User
        });
        if (!groupList) {
            res.status(404).json('not found')
        } else if (groupList.User.length === 0) {
            groupList.destroy({
                truncate: true
            })
            res.status(200).json('ok');
        }
        // res.send("Hello World");
    }
};