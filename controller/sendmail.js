var nodemailer = require('nodemailer');
const mongoose = require("mongoose")
const Birthday = require("../model/birthday")
const birthdayModel = mongoose.model('Birthday')

module.exports.sendEmail = (req,res) =>{
    let id = req.params.id
    console.log(id)
    birthdayModel.findOne({'_id':id}, function(err,users){
        if(err) return res.send(err)
        console.log(users)
        let message = users.message
        let email = users.email

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'syedabdulr39@gmail.com',
              pass: 'zrmhcwndcbfruorc'
            }
          });

          var mailOptions = {
            from: 'syedabdulr39@gmail.com',
            to: email,
            subject: 'BIRTHDAY WISHES',
            text: message
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.send(error)
            } else {
              console.log('Email sent: ' + info.response);
              res.send({status:true})
            }
          });
        
     })

    
      
      
}