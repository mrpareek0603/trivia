const express = require('express');
const router = express.Router();

const userDetailsController = require('../controllers/userDetails');

const gameData = require('../models/data');

router.get( '/user-details', userDetailsController.getUser)

router.post('/user-details', userDetailsController.postuser);

module.exports = router;