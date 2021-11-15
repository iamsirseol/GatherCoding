
const  user  = require('../models/user');
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
      // const request = req.body;
      // console.log(request);
      // const { username, email, password, image, blog, current_location } = request;
      // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
      // const data = await user.findOne({ where: { email} });
      // console.log(data);
      console.log(req.body['sign-up-id'])
      if (req.body) {
          // console.log({ username, email, password, image, blog, user_address } );
          await user.create({ username:req.body['sign-up-nickname'], email:req.body['sign-up-id'], password:req.body['sign-up-pw'], blog: req.body['sign-up-url']});
          // console.log(userinfo);
          // const accessToken = token.generateAccessToken(userinfo.dataValues);  
          res.status(201).json({message: 'ok' });
        
      } else {
        res.status(409).json({ data: null, message: 'This user already exists in the database'})
      }
  },
    get: (req, res) => {
        res.send("Hello World");
    }    
};