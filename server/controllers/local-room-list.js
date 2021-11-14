const user = require('../models/user');
const group = require('../models/group');

module.exports = {
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        const region = req.query.region;
        const city = req.query.city;
        
        group.findAll({
            where: {
                region: region,
                city: city
            }
        })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ data: null, message: 'error' });
        })
       
    }
};