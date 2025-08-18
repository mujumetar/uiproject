const mongoose = require("mongoose")
const multer = require("multer")

mongoose.connect("mongodb://localhost:27017/pract")

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("connected!!")
})

module.exports= db