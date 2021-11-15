const multer = require("multer");
const path = require("path");
const  user  = require('../models/user');
const group = require('../models/group');
const token = require('./token/index');

module.exports = {
    post: async (req, res) => {
      console.log(req.file)
      let image = '/image/' + req.file.filename;
      let username = req.body.username;
      let password = req.body.password;
      let email = req.body.email;
      let blog = req.body.blog;
      let params = [image, username, password, email, blog]
      console.log(params)

      await user.create({ username, email, password, image, blog});
    }
};