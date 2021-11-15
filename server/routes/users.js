const express = require('express');
const router = express.Router();


const signupController = require('../controllers/signup');
const userinfoController = require('../controllers/userinfo');
const signinController = require('../controllers/signin');
const oauthController = require('../controllers/oauth');
const signoutController = require('../controllers/signout');
const withdrawalController = require('../controllers/withdrawal');
const locationRegistrationController = require('../controllers/location-registration');

router.post('/signup', signupController.post);
router.get('/userinfo', userinfoController.get);
router.post('/signin', signinController.post);
router.post('/oauth', oauthController.post);
router.post('/signout', signoutController.post);
router.delete('/withdrawal', withdrawalController.delete);
router.post('/location-registration', locationRegistrationController.post);

module.exports = router;