const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetails = new Schema({
    date:{
        type: String
    },
    userName:{
        type:String
    },
    cricketer:{
        type:String
    },
    indianFlag:{
        type:Object
    }
});

const User = mongoose.model('User', userDetails);
module.exports = User;