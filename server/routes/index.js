const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');


router.post('/', homeController.post);


module.exports = router;