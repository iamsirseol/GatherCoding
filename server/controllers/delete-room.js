const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');
const { User } = require('../models');

module.exports = {
    delete: async (req, res) => {        
        const groupList = await group.findAll({
            include: user
        });
        console.log('ㅁㄴㅇㄹ@#$', groupList.Users);
        res.end();
        // if (!groupList) {
        //     res.status(404).json('not found')
        // } else if (groupList.Users.length === 0) {
        //     groupList.destroy({
        //         truncate: true
        //     })
        //     res.status(200).json('ok');
        // }
        // res.send("Hello World");
    }
};
// module.exports = {
//     delete: async (req, res) => {
//         const userEmail = req.body.userEmail;
//         const roomTitle = req.body.title;

//         const roomData = await group.findAll({
//             where: {
//                 title: roomTitle
//             },
//             include: {
//                 model: user,
//                 where: {
//                     userEmail: userEmail
//                 }
//             }
//         })
//     }
// };
