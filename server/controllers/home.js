// // const { BelongsTo } = require('sequelize/types');
// // const { DESCRIBE } = require('sequelize/types/lib/query-types');
// const { user, group } = require('../models');


// module.exports = {
//     post: (req, res) => {

//         res.send("Hello World");
//     },
//     get: async (req, res) => {

//         const jane = await user.create({
//             username: 'Jane',
//             email: 'assdf@gmail.com',
//             password: '1234',
//             image: 'dgasgs',
//             blog: 'sgdsgsa',
//             current_location: 'Seoul'
//         });
//         const mogako = await group.create({
//             title: 'mogako seoul',
//             describe: 'gather in seoul',
//             population: 8,
//             gather_location: 'Seoul Cafe',
//             leader: 1,
//             location_address: 'Seoul'
//         })
//         await jane.addGroup(mogako)
//         .then((result) => {
//             console.log('success');
//         })
//         const jane_group = group.findAll({
//             include: [{
//                 model: user,
//                 where: {
//                     username: 'Jane'
//                 }
//             }]
//         })
//         .then((result) => {
//             console.log(result);
//             res.send(result);
//         });
//         // res.send("Hello World");
//     }    
// };

const user = require('../models/user');
const group = require('../models/group');

module.exports = {
    post: async (req, res) => {
        // const amidala = await User.create({ username: 'p4dm3', points: 1000 });
        // const queen = await Profile.create({ name: 'Queen' });
        // await amidala.addProfile(queen, { through: { selfGranted: false } });

        const region = req.body.region;
        const city = req.body.city;

        const data = await group.findAll({
            where: {
                region: region,
                city: city
            }
        })
        console.log(data);
        if (data) {
            if (data.length === 0) {
                // console.log(data.keys);
                res.status(200).json({ data: data, message: 'no room in this location' });
            } else {
                res.status(200).json({ data: data, message: 'ok' });
            }
        } else {
            res.status(404).json({ data: null, message: 'page not found' });
        }
    },
    get: async (req, res) => {
        res.send('success')
    }
};