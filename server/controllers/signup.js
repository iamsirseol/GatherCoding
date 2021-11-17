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
    let image = req.file.filename;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let blog = req.body.blog;
    const data = await user.findOne({ where: { email } });
    // console.log(data);

    if (!data) {
      if (username && email && password) { // image & blog 필수입력에서 삭제
        const userinfo = await user.create({
          username,
          email,
          password,
          blog,
          image,
        });
        // console.log(userinfo);
        const accessToken = token.generateAccessToken(userinfo.dataValues);
        res.cookie('accessToken', accessToken, { expires: new Date(Date.now() + 900000) });
        // res.append('Set-Cookie', accessToken);
        res.status(201).json({message: 'ok'});
      } else {
        res.status(422).json({message: 'You should enter all the required information' });
      }
    } else {
      res.status(409).json({message: 'This user already exists in the database' })
    }
  },
};