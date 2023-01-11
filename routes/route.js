const express = require('express');
const router = express.Router();
const create = require('../controller/create')
const edit = require('../controller/edit')
const del = require('../controller/delete')
const sendmail = require('../controller/sendmail')
const list = require('../controller/list')
router.post('/create-schedule',create.create)
router.post('/edit-schedule',edit.edit)
router.get('/get-event/:id',edit.getEvent)
router.delete('/delete-event/:id',del.delete)
router.post('/send/:id',sendmail.sendEmail)
router.get('/list',list.getAllUser)




module.exports=router