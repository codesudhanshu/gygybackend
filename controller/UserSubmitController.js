const express = require('express')
const UserSubmitModel = require('../model/UserSubmitModel')
const nodemailer = require('nodemailer')

const UserSubmitController = async(req,res) =>{
    try {     
        const {name,email,phoneNumber} = req.body
        const response = await UserSubmitModel.findOne({email})
        if(!response){
        const result =  await UserSubmitModel.create({
            name:name,
            email:email,
            phoneNumber:phoneNumber
        })
        const data = await result.save()
        res.status(201).json(data) 
    }  else{
        res.status(200).json({message: 'User Already Submit The Form'})
    }    
    } catch (error) {
        res.status(500).json(error)
    } 
}
module.exports = UserSubmitController