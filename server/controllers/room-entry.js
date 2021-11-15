const user = require('../models/user');
const group = require('../models/group');
const { findOne } = require('../models/user');
const { isAuthorized } = require('./token');

module.exports = {
    post: async (req, res) => {
        const accessToken = req.body.accessToken;
        const roomTitle = req.body.roomTitle;
        const userEmail = isAuthorized(accessToken).email;

        const newMember = await user.findOne({
            where: {
                email: userEmail
            }
        })
        // console.log(newMember.dataValues);
        const selectedRoom = await group.findOne({
            where: {
                title: roomTitle
            }
        })
        // console.log(selectedRoom.dataValues);
        // res.json("success");
        if (!newMember) {
            res.status(403).json({ data: null, message: 'no such user in the database' });
        } else {
            if (!selectedRoom) {
                res.status(403).json({ data: null, message: 'no such room in the database' });
            } else {
                newMember.addGroup(selectedRoom)
                .then((result) => {
                    console.log(result);
                    res.status(200).json({ data: result, message: 'ok' });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(403).json({ data: null, message: 'fobidden'});
                })
            }
        }
    },
    get: (req, res) => {
        res.send("Hello World");
    }
};
