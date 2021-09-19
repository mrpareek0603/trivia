const express = require('express');
const router = express.Router();

const userController = require('../controllers/userDetails');

const gameData = require('../models/data');

router.get( '/user-details', userController.getUser)

router.post('/user-details', userController.postuser);

module.exports = router;