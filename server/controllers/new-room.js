const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    post: async (req, res) => {
        const accessTokenData = token.isAuthorized(req.body.accessToken);
        const { title, description, population, meeting_place, leader_id, UserId, region, city }
            = req.body;
        if (!accessTokenData) {
            res.status(404).json('invalid');
        } else {
            if (!title || !population || !meeting_place || !leader_id) {
                res.status(422).json({data: null, message: 'insufficient parameters supplied'});
            } else {
               const newRoom = await group.create({
                    title, 
                    description, 
                    population, 
                    meeting_place, 
                    leader_id: accessTokenData.id, 
                    UserId: accessTokenData.id,
                    region: req.body.region, 
                    city: req.body.city
                });
                res.status(201).json({data: newRoom, message: 'ok'});
            }
        }
    },   
};
