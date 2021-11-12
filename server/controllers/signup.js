const { user } = require('../models');
const token = require('./token/index');

module.exports = {
    post: async (req, res) => {
        const request = req.body;
        // console.log(request);
        const { username, email, password, image, blog, current_location } = request;
        // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
        const data = await user.findOne({ where: { email, password } });
        // console.log(data);
        if (!data) {
          if (!username && !email && !password && !image && !blog && !current_location) {
            // console.log({ username, email, password, image, blog, user_address } );
            const userinfo = await user.create({ username, email, password, image, blog, current_location });
            // console.log(userinfo);
            const accessToken = token.generateAccessToken(userinfo.dataValues);  
            res.status(201).json({ data: { accessToken: accessToken }, message: 'ok' });
          }
          if (!username) {
            res.status(422).json({ data: null, message: 'You should enter username'});
          }
          if (!email) {
            res.status(422).json({ data: null, message: 'You should enter email'});
          }
          if (!password) {
            res.status(422).json({ data: null, message: 'You should enter password'});
          }
          if (!image) {
            res.status(422).json({ data: null, message: 'You should enter image'});
          }
          if (!blog) {
            res.status(422).json({ data: null, message: 'You should enter blog'});
          }
          if (!current_location) {
            res.status(422).json({ data: null, message: 'You should enter user_address'});
          }  
        } else {
          res.status(409).json({ data: null, message: 'This user already exists in the database'})
        }
    },
    get: (req, res) => {
        res.send("Hello World");
    }    
};