const multer = require("multer");
const path = require("path");
const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
  post: async (req, res) => {
    //-------------------------------------------------
    // 클라이언트 내용
    //-------------------------------------------------
    // formData.append('email', signUpId)
    // formData.append('password', signUpPw)
    // formData.append('username', signUpNickname)
    // formData.append('blog', signUpUrl)
    // formData.append('image', signUpImage);
    //----------------------------------------------------


    // console.log(req.body);
    // console.log(req.body['email'])
    let image = '';
    if (!req.file) {
      image = '';
    } else {
      image = '/image/' + req.file.filename;
    }
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let blog = req.body.blog;
    const data = await user.findOne({ where: { email } });
    // console.log(data);

    if (!data) {
      if (username && email && password) { // image & blog 필수입력에서 삭제
        let img;
        // console.log(req.file.key) // 업로드시 삭제해줄 애
        // console.log(req.file)
        if(!req.file.location){
          img = null
        }else{
          img = req.file.location
        }
        const userinfo = await user.create({
          username,
          email,
          password,
          blog,
          image: img,
        });
        // const Img = req.file;
        // console.log('s3 이미지 경로 :',Img.location);
        // console.log(userinfo);
        const accessToken = token.generateAccessToken(userinfo.dataValues);
        res.cookie("accessToken", accessToken);
        res.status(201).json({message: 'ok'});
      } else {
        res.status(422).json({message: 'You should enter all the required information' });
      }
    } else {
      res.status(409).json({message: 'This user already exists in the database' })
    }
  },
};