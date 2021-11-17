const user = require('../models/user');
const group = require('../models/group');

// const token = require('./token/index');

// module.exports = {
//     post: (req, res) => {
    // !
//     //     console.log(req.body)
//     //     console.log(req.headers.authorization)
//     //     res.status(201).send({message : 'hi'})
//     // }
//         try{ 
//             // !고치지 않기
//             const tokenData = req.headers.authorization
//             console.log('토큰',tokenData)
//             console.log('요청바디',req.body)
//             // !
//             // console.log('쿠키쿠키',req.headers.authorization)
//             const region = req.body.region;
//             const city = req.body.city;
//             const userinfo = token.isAuthorized(tokenData);
//             console.log('유저인포',userinfo)
//             if (!region || !city || !userinfo) {
//                 res.status(404).json({ message: 'some user information is omitted' });
//             } else {
//                 const data = user.findOne({
//                     where : {email : userinfo.email},
//                 }).then((response=>{
//                     if(!response){
//                         res.status(404).json({ message: 'no such user in the database' })
//                     }
//                     else {
//                         user.update({ current_region: region, current_city: city },
//                             {
//                                 where: {
//                                     email: userinfo.email
//                                 }
//                             })
//                             .then((response) => {
//                                 console.log('여기까지왔다?',response)
//                                 res.status(201).send({data:'good',message : 'good'})
//                                 console.log('으악',user)
//                             })
//                     }
//                 }))
//             } 
//         } catch(error) {
//             res.status(404).json('cannot find information');
//         }
    

//     },  
    
// }
//         // // Change everyone without a last name to "Doe"
//         // await User.update({ lastName: "Doe" }, {
//         //     where: {
//         //         lastName: null
//         //     }
//         // });
        
//         // if (!region || !city || !userinfo) {
//         //     res.status(400).json({ message: 'some user information is omitted' });
//         // } else {
//         //     const data = user.findOne({
//         //         where: {
//         //             email: userinfo.email
//         //         }
                
//         //     })
//                 // .then((response) => {
//                 //     if (!response) {
                        
//                 //         res.status(400).json({ message: 'no such user in the database' })
//                     // } else {
//                         // user.update({ current_region: region, current_city: city },
//                         //     {
//                         //         where: {
//                         //             email: userinfo.email
//                         //         }
//                         //     })
//                         //     .then((response) => {
//                         //         console.log('여기까지왔다?',response)
//                         //         return res.status(201).json({ message: 'created' });
//                         //     })
//     //                         .catch((err) => {
                                
//     //                             console.log('캐치에러',err);
//     //                             res.status(400).json({ message: '나쁜요청t' });
//     //                         })
//     //                 }

//     //             })
//     //             console.log('DATATATATAATㅣㅇ남러ㅏㅣㄴㅇ러ㅣㅏㅁ;ㄴ',data)
//     //     }

//     // },
//     // get: async (req, res) => {
//     //     res.send('success')
        // !
const token = require('./token');

module.exports = {
    post: (req, res) => {
        const accessToken = req.headers.authorization.split(' ')[1]
        const region = req.body.region;
        const city = req.body.city;
        console.log('마ㅣㅇ러미ㅏㅇㄴ러ㅏㅣㅁㄴㅇ',region, city,accessToken)
        if (false) {
            // !region && !city
            res.status(400).json({ message: 'insufficient location information' });
        } 
        else {
            if (accessToken.length <= 40) {
                // 깃허브로 로그인한 사용자일 경우
                axios.get('https://api.github.com/user', { headers: { authorization: `token ${accessToken}` } })
                    .then((result) => {
                        console.log(result);
                        const userInfo = result.data;
                        const username = userInfo.login;
                        const email = userInfo.email;
                        if (username || email) {
                            if (username) {
                                user.findOne({
                                    where: {
                                        username: username
                                    }
                                })
                                    .then((result) => {
                                        if (result) {
                                            user.update({
                                                current_region: region,
                                                current_city: city
                                            }, {
                                                where: {
                                                    username: username
                                                }
                                            })
                                            .then((result) => {
                                                res.status(201).json({ data: null, message: 'created' })
                                            })
                                        } else {
                                            res.json({ data: null, message: 'no such user in the database' });
                                        }
                                    })
                                    .catch((err) => {
                                        res.json(err);
                                    })
                            } else {
                                user.findOne({
                                    where: {
                                        username: username
                                    }
                                })
                                    .then((result) => {
                                        if (result) {
                                            user.update({
                                                current_region: region,
                                                current_city: city
                                            }, {
                                                where: {
                                                    email: email
                                                }
                                            })
                                            .then((result) => {
                                                res.status(201).json({ data: null, message: 'created' })
                                            })
                                        } else {
                                            res.json({ data: null, message: 'no such user in the database' });
                                        }
                                    })
                                    .catch((err) => {
                                        res.json(err);
                                    })
                            }
                        } else {
                            res.json({ data: null, message: 'not authorized' });
                        }
                    })
            } else {
                // 일반 사용자일 경우
                const userData = token.isAuthorized(accessToken);
                console.log('유저인포',userData);
                user.findOne({
                    where: {
                        email: userData.email
                    }
                })
                    .then((result) => {
                        if (!result) {
                            res.status(400).json({ message: 'no such user in the database' })
                        } else {
                            user.update({ current_region: region, current_city: city },
                                {
                                    where: {
                                        email: userData.email
                                    }
                                })
                                .then((result) => {
                                    console.log('여기오면 성공', result);
                                    res.status(201).json({ message: 'created' });
                                })
                                .catch((err) => {
                                    console.log(err);
                                    res.status(400).json({ message: 'bad request' });
                                })
                        }

                })
        }

    },
    get: async (req, res) => {
        res.send('success')
    }
};
