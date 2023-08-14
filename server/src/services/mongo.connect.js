const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

const MONGO_URL = "mongodb://localhost:27017/printMe"

mongo.connection.once('open', ()=>{
    console.log("Mongo connection is done!")
})

mongo.connection.on('error',(error)=>{
    console.log(`Ooops! , Error occured ${error}`)
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser : true ,
        // useFindAndModify : false ,
        // useCreateIndex : true ,
        useUnifiedTopology : true
    })
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}