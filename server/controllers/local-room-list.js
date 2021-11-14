const user = require('../models/user');
const group = require('../models/group');

module.exports = {
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        const region = req.query.region;
        const city = req.query.city;
        if (!region || !city) {
            res.status(400).json({ data: null, message: 'you should enter all the required information' });
        } else {
            group.findAll({
                where: {
                    region: region,
                    city: city
                }
            })
                .then((result) => {
                    if (result.length === 0) {
                        res.status(200).json({ data: null, message: 'no room in this location' })
                    } else {
                        res.status(200).json({ data: result, message: 'ok' });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).json({ data: null, message: 'error' });
                })
        }


    }
};