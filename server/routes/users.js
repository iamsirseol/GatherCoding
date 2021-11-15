const express = require('express');
var app = express();
const router = express.Router();
const multer = require('multer'); // 서버에 폼 데이터 형식을 업로드하려고 다운받으겁니다.
const upload = multer({dest: './upload'})
const form_data = multer();
app.use('/image', express.static('./upload'))

app.use(form_data.array());
app.use(express.static('public'))

const signupController = require('../controllers/signup');
const userinfoController = require('../controllers/userinfo');
const signinController = require('../controllers/signin');
const oauthController = require('../controllers/oauth');
const signoutController = require('../controllers/signout');
const withdrawalController = require('../controllers/withdrawal');

router.post('/signup', upload.single('image'), signupController.post);
router.get('/userinfo', userinfoController.get);
router.post('/signin', signinController.post);
router.post('/oauth', oauthController.post);
router.post('/signout', signoutController.post);
router.delete('/withdrawal', withdrawalController.delete);

module.exports = router;