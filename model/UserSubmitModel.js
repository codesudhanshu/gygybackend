const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    submitdate:{
        type: Date,
        default: Date.now()
    }
})

const UserSubmitModel = mongoose.model('UserSubmitModel',userschema)
module.exports = UserSubmitModel