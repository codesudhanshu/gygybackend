const express = require('express')
const router = express.Router()
const UserSubmitController = require('../controller/UserSubmitController')
const UserSubmitValidator = require('../validator/UserSubmitValidator')
router.post("/submit",UserSubmitValidator,UserSubmitController)
module.exports=router;