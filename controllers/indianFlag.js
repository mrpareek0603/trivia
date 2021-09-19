const gameData = require('../models/data');

exports.getFlag = (req,res,next)=>{
    res.render('indian-national-flag');
}

exports.postAnswer = async(req,res,next)=>{
    gameData.colours = req.body.colour;
    
    console.log('indian flag route ' + gameData.colours);
    res.redirect('/summary');
    // const colours = req.body;
}