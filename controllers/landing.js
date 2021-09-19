const gameData = require('../models/data');

exports.getLanding = (req,res,next)=>{

    res.render('landing');
}