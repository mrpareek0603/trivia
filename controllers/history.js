const gameData = require('../models/data');
const User = require('../models/TriviaApp');


 
exports.getHistory = (req,res,next)=>{
    
    // GameData.fetchAll((gameData) => {
        // res.render('history', {userName:gameData.userName, cricketer: gameData.cricketer, colours:gameData.colours});

        const userName = gameData.userName;
        User.find()
        .then((user)=> { 
            console.log(`data found in db`)
            res.render('history', {userData:user});
        });

}