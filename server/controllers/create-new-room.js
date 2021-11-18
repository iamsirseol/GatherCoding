// const user = require('../models/user');
// const group = require('../models/group');
// const token = require('./token/index');

// module.exports = {
//     get : async (req, res) => {
//         const accessTokenData = token.isAuthorized(req.headers.authorization.split(' ')[1]);
//         console.log('액새스토큰',accessTokenData)
//         if(!accessTokenData){res.status(401).json({message:'unauthorized'})}
//         console.log('도착')
//         const { id, title, description, population, meetingPlace, UserId, region, city } = req.body;//leaderId 시퀄라이즈에 없다.
//         console.log('you got here?')
//         const newRoom = await group.findOrCreate({
//             where : {id : req.body.id},
//             defaults : {
//                 title,
//                 description,
//                 population,
//                 meetingPlace,
//                 UserId,
//                 region,
//                 city
//             }.then(([room,created])=>{
                
//                 if(created){
                    
//                     const {title,description,population,meetingPlace,UserId,region,city} = room
//                     const data = {title,description,population,meetingPlace,UserId,region,city}
//                     res.status(201).json({ data , message : "new room's created" })
//                 }else{
//                     res.status(404).json({message : " Not found "})
//                 }
//             })
//         })

//     }
// }