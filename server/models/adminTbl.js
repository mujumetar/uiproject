const mongoose = require('mongoose');
const multer = require("multer")
const moment = require("moment")

const path = require("path")


const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
   
    status:{
        type:Boolean,
        default:true,
        required:true
    },
    createdAt:{
        type:String,
        default:moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    updatedAt:{
        type:String,
        default:moment().format('MMMM Do YYYY, h:mm:ss a')
     

    }
})

const admin = mongoose.model("admin",adminSchema)


module.exports = admin