const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');

module.exports = {

    // 이거 만들때 고려 하는 방법이 잘못 된거 같습니다. 
    // 패스워드가 존재 할 경우에 user의 변경을 해주는게 아니라 user 의 이메일과 password 가 일치 하는 경우 수정 할 비밀번호로 비밀번호로 수정해주는게 맞다고 생각합니다.
    
    // -----------------------------------기존 이미지 파일에 delete요청도 해야돼연 aws 과금 돼여 저 돈 없어여 ㅋㅋㅋㅋㅋㅋ
    
    put: async (req, res) => {
        // const accessToken = req.body.accessToken;
        
        // 확인용
        const accessToken = req.headers.authorization.split(' ')[1];
        // const username = req.body.username;
        const email = req.body.email;
        
        // 변경용
        const username = req.body.username;
        const changePassword = req.body.changePassword
        const image = req.body.password;
        const blog = req.body.blog;
        const params = [password, email, username, changePassword, image, blog]
        console.log(params)

        // const data = token.isAuthorized(accessToken);
        // // let 
        // console.log(data);
        const validUser = await user.findOne({
            where : {
                email,
                password
            }
        })
        if (!validUser) {
            res.status(400).json({ data: null, message: 'you should enter password' });
        } else {
            // console.log(req.file.key) // 업로드시 삭제해줄 애
            // console.log(req.file)
            let img;
            if(!req.file.location){
                img = null
            }else{
                img = req.file.location
            }
            console.log(img)
            await user.update({ username: username, password: changePassword, image: img, blog: blog }, {
                where: {
                    email: email
                }
            }).then((result) => {
                console.log(result);
                res.status(201).json({ message: 'successfully created' })
            }).catch((err) => {
                console.log(err);
                res.status(400).json({ message: 'bad request' });
            })
        }
    }
};