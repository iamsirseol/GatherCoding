// const express = require('express');
// const router = express.Router();

// router.get('/', function (req, res, next){
//     // res.render('index', { title: 'Express' });
//     res.send('Hello World!');
// })

// module.exports = router;


const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');
const gatherRoomController = require('../controllers/gather-room');
const listController = require('../controllers/list');
const roominfoController = require('../controllers/roominfo');
const signinController = require('../controllers/signin');
const signoutController = require('../controllers/signout');
const signupController = require('../controllers/signup');
const userController = require('../controllers/user');
const withdrawalController = require('../controllers/withdrawal');
const oauthController = require('../controllers/oauth');

router.get('/', homeController.get);
router.get('/user', userController.get);
router.post('/signup', signupController.post);
router.get('/withdrawal', withdrawalController.get);
router.post('/signin', signinController.post);
router.post('/signout', signoutController.post);
router.get('/list', listController.get);
router.get('roominfo', roominfoController.get);
router.get('/gather-room', gatherRoomController.get);
router.post('/oauth', oauthController.post);

module.exports = router;