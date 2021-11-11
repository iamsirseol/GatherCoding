const { user } = require("../models");

module.exports = async (req, res) => {
    const existUser = await user.findOne({
        where: { email: req.body.email, password: req.body.password }
    });

    if (!existUser) {
        res.status(404).send('invalid user');
    } else {
        res.status(200).send('ok');
    }
}