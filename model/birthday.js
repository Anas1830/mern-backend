const mongoose = require('mongoose')
 
// create an schema
var birthdaySchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     unique:true
    // },
            name: String,
            email: String,
            month: String,
            date: String,
            message: String
        });
 
var Birthday = mongoose.model('Birthday',birthdaySchema);
 
module.exports = Birthday