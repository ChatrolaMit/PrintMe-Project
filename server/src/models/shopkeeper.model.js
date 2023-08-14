const shopkeeper = require('./shopkeeper.mongo')

const user = {
    aadharNumber : "1212",
    firstName:'Mit',
    secondName:'Hello',
    lastName:'Chatrola',
    location:'Ahmedabad',
    contactNumber:'7048377394',
    emailId:'chatrolamitbhai1@gmail.com',
    password:'123123'
} 

const createShopKeeper = async () =>{
  // let id=5
  let result = await shopkeeper.updateOne({},user,{upsert:true})
  console.log("its DOne",result)
  // return await result.modifiedCount;
}

module.exports = {
    createShopKeeper
}