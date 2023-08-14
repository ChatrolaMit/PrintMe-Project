const mongoose = require("mongoose")

const shopKeeper = new mongoose.Schema({
    aadharNumber:{
        type:String,
        require:true,
        unique:true
    },
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
    location:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('shopkeeper', shopKeeper)