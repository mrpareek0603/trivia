const express = require('express');
const router = express.Router();

const gameData = require('../models/data');

router.get( '/user-details', (req,res,next)=>{
    res.render('user-details');
})

router.post('/user-details', (req,res,next)=>{
    gameData.userName = req.body.userName;

    console.log(gameData.userName);
    res.redirect('/cricketer-question');
});

module.exports = router;