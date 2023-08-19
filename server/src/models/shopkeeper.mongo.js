const mongoose = require("mongoose")

const shopKeeper = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    secondName:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    },
    shopName:{
        type:String,
        required:true
    },
    shopRegistrationNumber:{
        type:String,
        required:true
    },
    aadharNumber:{
        type:String,
        require:true         
    },
    location:{
        type:String,
        required:true
    },
    cordinates:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('shopkeeper', shopKeeper)