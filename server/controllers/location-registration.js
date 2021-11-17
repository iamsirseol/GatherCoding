const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    post: (req, res) => {
    //     console.log(req.body)
    //     console.log(req.headers.authorization)
    //     res.status(201).send({message : 'hi'})
    // }
        try{ 
            // !고치지 않기
            const tokenData = req.headers.authorization
            console.log('토큰',tokenData)
            console.log('요청바디',req.body)
            // !
            // console.log('쿠키쿠키',req.headers.authorization)
            const region = req.body.region;
            const city = req.body.city;
            const userinfo = token.isAuthorized(tokenData);
            console.log('유저인포',userinfo)
            if (!region || !city || !userinfo) {
                res.status(404).json({ message: 'some user information is omitted' });
            } else {
                const data = user.findOne({
                    where : {email : userinfo.email},
                }).then((response=>{
                    if(!response){
                        res.status(404).json({ message: 'no such user in the database' })
                    }
                    else {
                        user.update({ current_region: region, current_city: city },
                            {
                                where: {
                                    email: userinfo.email
                                }
                            })
                            .then((response) => {
                                console.log('여기까지왔다?',response)
                                res.status(201).send({data:'good',message : 'good'})
                                console.log('으악',user)
                            })
                    }
                }))
            } 
        } catch(error) {
            res.status(404).json('cannot find information');
        }
    

    },  
    
}
        // // Change everyone without a last name to "Doe"
        // await User.update({ lastName: "Doe" }, {
        //     where: {
        //         lastName: null
        //     }
        // });
        
        // if (!region || !city || !userinfo) {
        //     res.status(400).json({ message: 'some user information is omitted' });
        // } else {
        //     const data = user.findOne({
        //         where: {
        //             email: userinfo.email
        //         }
                
        //     })
                // .then((response) => {
                //     if (!response) {
                        
                //         res.status(400).json({ message: 'no such user in the database' })
                    // } else {
                        // user.update({ current_region: region, current_city: city },
                        //     {
                        //         where: {
                        //             email: userinfo.email
                        //         }
                        //     })
                        //     .then((response) => {
                        //         console.log('여기까지왔다?',response)
                        //         return res.status(201).json({ message: 'created' });
                        //     })
    //                         .catch((err) => {
                                
    //                             console.log('캐치에러',err);
    //                             res.status(400).json({ message: '나쁜요청t' });
    //                         })
    //                 }

    //             })
    //             console.log('DATATATATAATㅣㅇ남러ㅏㅣㄴㅇ러ㅣㅏㅁ;ㄴ',data)
    //     }

    // },
    // get: async (req, res) => {
    //     res.send('success')
        
