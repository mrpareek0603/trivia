require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/TriviaApp');
const app = express();

mongoose.connect("mongodb+srv://admin123:admin123@cluster0.qwfwj.mongodb.net/TriviaApp?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser:true },()=>{
    console.log("Database connected");
});

// app.post('/landing', (req,res)=>{
//     User.insert(req.body,(err,result)=>{
//         if(error){
//             return res.status(500).send(err);
//         }
//         console.log("Data Sent");
//         res.json(result);
//     });
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const landingRoute = require('./routes/landing');
const userDetails = require('./routes/userDetails');
const cricket = require('./routes/cricketer');
const indianFlag = require('./routes/indianFlag');
const summary = require('./routes/summary');
const history = require('./routes/history');

// landing page
app.use(landingRoute);

// userdetails
app.use(userDetails);

// cricketer question
app.use(cricket);

// indian-national-flag question
app.use(indianFlag);

//summary
app.use(summary);

//history 
app.use(history);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`);
});