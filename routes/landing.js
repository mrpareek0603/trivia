const express = require('express');
const router = express.Router();

const landingController = require('../controllers/landing');

router.get('/game', landingController.getLanding );
// router.post('/game', landingController.postLanding);

module.exports = router;