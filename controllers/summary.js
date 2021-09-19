const gameData = require('../models/data');
const User = require('../models/TriviaApp');
exports.getSummary =  (req,res,next)=>{
    
    console.log('summar route ', gameData.userName, gameData.cricketer,gameData.colours);
    
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    let date = new Date();
    
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hours = hours < 10 ? "0" + hours : hours ;

    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); 
    let am_pm = date.getHours() > 12 ? " pm " : " am ";

    let new_date = date.getDate()+ "th " + months[date.getMonth()] + " " + hours + ":" + minutes + am_pm;
    
    const data = new User({
        date: new_date,
        userName : gameData.userName,
        cricketer : gameData.cricketer,
        indianFlag : gameData.colours,
    })

    data.save().then(result=>{
        console.log("data saved in db");
    })
    // res.render('summary', {userName: userName1 ,cricketer: cricketer1, colours: colours1});
    res.render('summary', {gameData});
}

