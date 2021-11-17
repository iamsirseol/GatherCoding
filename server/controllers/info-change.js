const user = require('../models/user');
const group = require('../models/group');
const token = require('./token');

module.exports = {

    // 이거 만들때 고려 하는 방법이 잘못 된거 같습니다. 
    // 패스워드가 존재 할 경우에 user의 변경을 해주는게 아니라 user 의 이메일과 password 가 일치 하는 경우 수정 할 비밀번호로 비밀번호로 수정해주는게 맞다고 생각합니다.
    
    // -----------------------------------기존 이미지 파일에 delete요청도 해야돼연 aws 과금 돼여 저 돈 없어여 ㅋㅋㅋㅋㅋㅋ
    
    put: async (req, res) => {
        console.log(req.cookies, 'info-change확인용(1)');
        // 1. 일반 로그인 사용자의 경우(oauth 아닌 경우)
        
        const accessToken = req.cookies.accessToken.split(' ')[1];
        const userInfo = token.isAuthorized(accessToken);
        const email = userInfo.email;
        console.log(userInfo, 'info-change 확인용(2)');
        const newUsername = req.body.username;
        const newPassword = req.body.changePassword;
        // const newImage = req.body.image;
        const newBlog = req.body.blog;
        console.log(req.body, 'info-change확인용(3)');
        console.log(req.file, 'info-change확인용(4)');
        // const params = [password, email, username, changePassword, image, blog]
        // console.log(params)

        // const data = token.isAuthorized(accessToken);
        // // let 
        // console.log(data);
        const validUser = await user.findOne({
            where : {
                email
            }
        })
        if (!validUser) {
            res.status(400).json({ data: null, message: 'no such user in the database' });
        } else {
            // console.log(req.file.key) // 업로드시 삭제해줄 애
            // console.log(req.file)
            let newImage;
            if(!req.file){
                newImage = validUser.image;
            }else{
                newImage = req.file.location
            }
            // console.log(img)
            user.update({ username: newUsername, password: newPassword, image: newImage, blog: newBlog }, {
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