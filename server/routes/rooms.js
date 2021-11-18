const express = require('express');
const router = express.Router();

const localRoomListController = require('../controllers/local-room-list');
const myRoomListController = require('../controllers/my-room-list');
const newRoomController = require('../controllers/new-room');
const roomEntryController = require('../controllers/room-entry');
const roomExitController = require('../controllers/room-exit');
const changeRoomInfoController = require('../controllers/change-room-info')

router.get('/local-room-list',localRoomListController.get);
router.get('/my-room-list', myRoomListController.get);
router.get('/new-room', newRoomController.get)
router.get('/new-room/:id',newRoomController.get)
router.post('/new-room', newRoomController.post);
router.post('/room-entry', roomEntryController.post);
router.patch('/room-exit', roomExitController.patch);
// router.post('/change-room-info', changeRoomInfoController.post);

module.exports = router;