const mongoose = require("mongoose")
const Birthday = require("../model/birthday")
const birthdayModel = mongoose.model('Birthday')

module.exports.getAllUser = (req,res) =>{
   birthdayModel.find({}, function(err,user){
     if(err) return res.send(err)
     res.send(user)

})
}