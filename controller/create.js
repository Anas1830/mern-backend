const mongoose = require("mongoose")
const Birthday = require("../model/birthday")

module.exports.create = (req,res) => {
    console.log(req.body)
    let eventData = new Birthday(req.body)
   console.log(eventData)
    eventData.save((err, data) => {
        if(err) return res.send({status:false, error: err})
        res.send({status:true})
    })
}