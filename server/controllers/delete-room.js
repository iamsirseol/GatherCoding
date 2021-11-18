const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');
const { User } = require('../models');
const db = require('../models');
// module.exports = {
//     delete: async (req, res) => {

//         const groupList = await group.findAll({
//             include: [{
//                 model: user,
//             }]
//         });
//         if (!groupList) {
//             res.status(404).json('not found');
//         } else {
//             for (let group of groupList) {
//                 if (group.Users === undefined) {
//                     res.status(404).json('not found');
//                 }
//                 if (group.Users.length === 0) {
//                     group.destroy({
//                         truncate: true
//                     });
//                     res.status(200).json('ok');
//                 }
//                 if (group.Users.length > 0) {
//                     res.status(200).json({data: group.Users.length});
//                 }
//             }
//         }
//     }
// };


module.exports = {
    delete: async (req, res) => {
        const userId = req.body.email;
        const roomTitle = req.body.title;
        const selectedGroup = await group.findOne({
            where: {
                title: roomTitle
            },
            include: {
                model: user,
                where: {
                    email: userId
                }
            }
        });
        console.log(selectedGroup);
        user.removeGroup(selectedGroup.dataValues.id)
            .then((result) => {
                console.log(result);               
                res.json('success'); 
            })
            .catch((err) => {
                console.log(err);
                res.json("failed")
            })
    }
};