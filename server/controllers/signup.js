const { user } = require('../models');

module.exports = {
    post: async (req, res) => {
        const request = req.body;
        console.log(request);
        const { username, email, password, image, blog, user_address } = request;
        // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
        const data = await user.findOne({ username, email, password, image, blog, user_address });
        if (!data) {
          const userinfo = await user.create({ username, email, password, image, blog, user_address });
          if (userinfo.username !== null && userinfo.email !== null && userinfo.password !== null && userinfo.image !== null && userinfo.blog !== null && userinfo.user_address !== null) {
              res.status(201).json({ data: accesstoken, message: 'ok' });
          }
          if (userinfo.username === null) {
            res.status(422).json({ data: null, message: 'You should enter username'});
          }
          if (userinfo.email === null) {
            res.status(422).json({ data: null, message: 'You should enter email'});
          }
          if (userinfo.password === null) {
            res.status(422).json({ data: null, message: 'You should enter password'});
          }
          if (userinfo.image === null) {
            res.status(422).json({ data: null, message: 'You should enter image'});
          }
          if (userinfo.blog === null) {
            res.status(422).json({ data: null, message: 'You should enter blog'});
          }
          if (userinfo.user_address === null) {
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