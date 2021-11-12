const { user } = require("../models");

module.exports = {
    // get: 
    // const existUser = await user.findOne({
    //     where: { email: req.body.email, password: req.body.password }
    // });

    // if (!existUser) {
    //     res.status(404).send('invalid user');
    // } else {
    //     res.status(200).send('ok');
    // }
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        res.send("Hello World");
    }   
}

