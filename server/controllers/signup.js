
const user = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
  // post: async (req, res) => {
  //     const request = req.body;
  //     // console.log(request);
  //     const { username, email, password, image, blog, current_location } = request;
  //     // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
  //     const data = await user.findOne({ where: { email} });
  //     // console.log(data);
  //     if (!data) {
  //       if (username && email && password && image && blog && current_location) {
  //         // console.log({ username, email, password, image, blog, user_address } );
  //         const userinfo = await user.create({ username, email, password, image, blog, current_location });
  //         // console.log(userinfo);
  //         const accessToken = token.generateAccessToken(userinfo.dataValues);  
  //         res.status(201).json({ data: { accessToken: accessToken }, message: 'ok' });
  //       } else {
  //         res.status(422).json({ data: null, message: 'You should enter all the required information'});
  //       }
  //     } else {
  //       res.status(409).json({ data: null, message: 'This user already exists in the database'})
  //     }
  // },

  
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
    const data = await user.findOne({ where: { email } });
    // console.log(data);

    if (!data) {
      const username = req.body['username'];
      const email = req.body['email'];
      const password = req.body['password'];
      const image = req.body['image'];
      const blog = req.body['blog'];
      if (username && email && password && image && blog) {
        const userinfo = await user.create({
          username,
          email,
          password,
          blog,
          image,
        });
        // console.log(userinfo);
        const accessToken = token.generateAccessToken(userinfo.dataValues);
        res.status(201).json({ data: { accessToken: accessToken }, message: 'ok' });
      } else {
        res.status(422).json({ data: null, message: 'You should enter all the required information' });
      }
    } else {
      res.status(409).json({ data: null, message: 'This user already exists in the database' })
    }
  },
  get: (req, res) => {
    res.send("Hello World");
  }
};