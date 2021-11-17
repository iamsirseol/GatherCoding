const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

// 새로운 방을 db에 넣을 때 이미 db에 있는 방과 중복 확인 부탁드립니다.
// 그러지 않으면 서버 켤 때마다 똑같은 레코드가 다시 추가되는 것 같습니다.
module.exports = {
    post: async (req, res) => {
        console.log(req.headers.authorization)
        const accessTokenData = token.isAuthorized(req.headers.authorization.split(' ')[1]);
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
    }
};
