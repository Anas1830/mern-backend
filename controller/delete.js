const mongoose = require("mongoose")
const Birthday = require("../model/birthday")
const birthdayModel = mongoose.model('Birthday')

module.exports.delete=(req,res) => {
    id=req.params.id
    birthdayModel.deleteOne({'_id':id},function(err,users){
        if(err) return res.send(err)
        res.send({status:true})
    }
    )
}
