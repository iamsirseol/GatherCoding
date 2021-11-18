const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    put: async (req, res) => {
        const accessToken = req.cookies.accessToken;
        const userData = token.isAuthorized(accessToken);

        const changedTitle = req.body.title;
        const changedMeetingTime = req.body.meeting_time;
        const changedDescription = req.body.description;
        const changedPopulation = req.body.population;

        const roomInfo = await group.findOne({
            include: {
                model: user,
                where: {
                    id: userData.id
                }
            }
        });

        if (!roomInfo) {
            res.status(400).json({message: 'not found'});
        } else {
            if (!changedTitle || !changedMeetingTime || !changedDescription || !changedPopulation) {
                res.status(400).json({ message: 'insufficient parameters supplied' });
            } else {
                const updatedRoom = group.update({
                    title: changedTitle,
                    meeting_time: changedMeetingTime,
                    description: changedDescription,
                    population: changedPopulation
                }, {
                    where: {
                        id: roomInfo.id
                    }
                });
                res.status(201).json({ data: updatedRoom, message: 'successfully updated' });
            }
        }
    }
}