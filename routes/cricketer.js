const express = require('express');
const router = express.Router();

const cricketerController = require('../controllers/cricketer');

router.get('/cricketer-question', cricketerController.getCricketer);

router.post('/cricketer-question', cricketerController.postAnswer);
module.exports = router;