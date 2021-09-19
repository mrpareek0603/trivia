const gameData = require('../models/data');

exports.getUser = (req,res,next)=>{
    res.render('user-details');
}

exports.postuser = (req,res,next)=>{
    gameData.userName = req.body.userName;

    console.log(gameData.userName);
    res.redirect('/cricketer-question');
}