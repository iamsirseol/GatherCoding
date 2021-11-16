const express = require('express');
var app = express();
const router = express.Router();
const multer = require('multer'); // 서버에 폼 데이터 형식을 업로드하려고 다운받으겁니다.
const { upload } = require('../upload');

const signupController = require('../controllers/signup');
const userinfoController = require('../controllers/userinfo');
const signinController = require('../controllers/signin');
const oauthController = require('../controllers/oauth');
const signoutController = require('../controllers/signout');
const withdrawalController = require('../controllers/withdrawal');
const locationRegistrationController = require('../controllers/location-registration');
const infoChangeController = require('../controllers/info-change');

router.post('/signup', upload.single('image'), signupController.post);
router.get('/userinfo', userinfoController.get);
router.post('/signin', signinController.post);
router.post('/oauth', oauthController.post);
router.post('/signout', signoutController.post);
router.delete('/withdrawal', withdrawalController.delete);
router.post('/location-registration', locationRegistrationController.post);
router.put('/info-change', infoChangeController.put);

module.exports = router;