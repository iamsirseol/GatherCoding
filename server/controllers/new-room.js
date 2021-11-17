const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

// 새로운 방을 db에 넣을 때 이미 db에 있는 방과 중복 확인 부탁드립니다.
// 그러지 않으면 서버 켤 때마다 똑같은 레코드가 다시 추가되는 것 같습니다.
module.exports = {
    // get : async (req, res) => {
    //     const accessTokenData = token.isAuthorized(req.headers.authorization.split(' ')[1]);
    //     console.log('액새스토큰',accessTokenData)
    //     if(!accessTokenData){res.status(401).json({message:'unauthorized'})}
    //     console.log('도착')
    //     const { id, title, description, population, meetingPlace, UserId, region, city } = req.body;//leaderId 시퀄라이즈에 없다.
    //     const newRoom = await group.findOrCreate({
    //         where : {id : req.body.id},
    //         defaults : {
    //             title,
    //             description,
    //             population,
    //             meetingPlace,
    //             UserId,
    //             region,
    //             city
    //         }.then(([room,created])=>{

    //             if(created){
    //                 const {title,description,population,meetingPlace,UserId,region,city} = room
    //                 const data = {title,description,population,meetingPlace,UserId,region,city}
    //                 res.status(201).json({ data , message : "new room's created" })
    //             }else{
    //                 res.status(404).json({message : " Not found "})
    //             }
    //         })
    //     })

    // },
    post: async (req, res) => {
        console.log(req.headers.authorization.split(' ')[1])

        console.log(req.body)


        const accessTokenData = token.isAuthorized(req.headers.authorization.split(' ')[1]);
        const { title, description, population, meetingPlace, leaderId, UserId, region, city } = req.body;
        // if (!title || !population || !meeting_place || !leader_id) {
        if (!title || !population || !meetingPlace || !UserId) {
            res.status(422).json({data: null, message: 'insufficient parameters supplied'});
        } else {
            const newRoom = await group.create({
                title, 
                description,
                population, 
                meetingPlace,
                leaderId: accessTokenData.id, 
                UserId: accessTokenData.id,
                region, 
                city,
            });
            console.log(newRoom.dataValues)
            
            res.status(201).json({
                data: {
                    id:newRoom.dataValues.id, 
                    title:newRoom.dataValues.title,
                    description:newRoom.dataValues.description, 
                    population:newRoom.dataValues.population,
                    UserId:newRoom.dataValues.UserId, 
                    region:newRoom.dataValues.region,
                    city:newRoom.dataValues.city,
                    meetingPlace:newRoom.dataValues.meetingPlace 
                }, message: 'ok'});
        }
    }
};
