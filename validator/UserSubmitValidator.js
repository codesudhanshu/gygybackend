const {body} = require('express-validator')

const emailregex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
const phoneNumber = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'

const UserSubmitValidator =[
    body('name').notEmpty().withMessage('Name Can Not be Empty'),
    body('email').notEmpty().isEmail().matches(emailregex).withMessage('Email can not be Empty'),
    body('phoneNumber').notEmpty().matches(phoneNumber).withMessage('Phone Number Can not be Empty')
]
module.exports = UserSubmitValidator