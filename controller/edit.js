const mongoose = require("mongoose")
const Birthday = require("../model/birthday")
const birthdayModel = mongoose.model('Birthday')

module.exports.edit= (req,res) => {
     let reqData = req.body
     if(reqData._id != undefined ){
        birthdayModel.findById(reqData._id, function(err,user){
            if (err) return res.send({status: false, error: err})
        
            let dataProps = Object.keys(reqData)
            dataProps.forEach((prop) => {
            user[prop] = reqData[prop]
            } )
            user.save(function (err,updateUser){
                if (err) return res.send({status: false, error: err})
                res.send({status:true})
            })
        })
     }
    else{
        return res.send({status: false, error: "Invalid request"})
    }

}

module.exports.getEvent=(req,res)=>{
    
 id = req.params.id
 birthdayModel.findOne({'_id':id}, function(err,users){
    if(err) return res.send(err)
    res.send(users)
    console.log(users);
    

 })
 

}