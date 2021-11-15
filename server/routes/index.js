// const express = require('express');
// const router = express.Router();

// const homeController = require('../controllers/home');
// const signupController = require('../controllers/signup');
// const userinfoController = require('../controllers/userinfo');
// const signinController = require('../controllers/signin');
// const oauthController = require('../controllers/oauth');
// const signoutController = require('../controllers/signout');
// const withdrawalController = require('../controllers/withdrawal');
// const localRoomListController = require('../controllers/local-room-list');
// const myRoomListController = require('../controllers/my-room-list');
// const newRoomController = require('../controllers/new-room');
// const roomEntryController = require('../controllers/room-entry');

// router.get('/', homeController.get);
// router.post('/signup', signupController.post);
// router.get('/userinfo', userinfoController.get);
// router.post('/signin', signinController.post);
// router.post('/oauth', oauthController.post);
// router.post('/signout', signoutController.post);
// router.get('/withdrawal', withdrawalController.get);
// router.get('/local-room-list',localRoomListController.get);
// router.get('/my-room-list', myRoomListController.get);
// router.get('/new-room', newRoomController.get);
// router.get('/room-entry', roomEntryController.get);

// module.exports = router;

const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');


router.post('/', homeController.post);


module.exports = router;