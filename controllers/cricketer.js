const gameData = require('../models/data');

exports.getCricketer = (req,res,next)=>{
    res.render('cricketer-question');
}

exports.postAnswer = (req,res,next)=>{

    gameData.cricketer = req.body.cricketer;
    console.log(gameData.cricketer);

    res.redirect('/indian-national-flag');
};
