const express = require('express');
const router = express.Router();

const gameData = require('../models/data');
const flagController = require('../controllers/indianFlag');

router.get('/indian-national-flag', flagController.getFlag);

router.post('/indian-national-flag', flagController.postAnswer);

module.exports = router;