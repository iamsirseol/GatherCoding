const express = require('express');
const router = express.Router();

const gatherRoomController = require('../controllers/gather-room');
const listController = require('../controllers/list');
const roominfoController = require('../controllers/roominfo');
const signinController = require('../controllers/signin');
const signoutController = require('../controllers/signout');
const signupController = require('../controllers/signup');
const userController = require('../controllers/user');
const withdrawalController = require('../controllers/withdrawal');


router.get('/user', userController.get);
router.post('/signup', signupController.post);
router.get('/withdrawal', withdrawalController.get);
router.post('/signin', signinController.post);
router.post('/signout', signoutController.post);
router.get('/list', listController.get);
router.get('roominfo', roominfoController.get);
router.get('/gather-room', gatherRoomController.get);

module.exports = router;