const { signToken } = require('../services/auth')
const shopkeeper = require('./shopkeeper.mongo')

const createShopKeeper = async (user) => {
  try {
      if (await isUserExist(user.email)) {
          return { result: `${user.email} is already exist!` };
      }

      let result;
      try {
          result = await shopkeeper.updateOne(
              { email: user.email },
              user,
              { upsert: true }
          );
      } catch (error) {
          console.error('Update error:', error);
      }

      if (result) {
          try {
              const shop = await getShopKeeper(result.upsertedId);
              const token = await signToken(shop);
              if (token) {
                  return {
                      result: true,
                      token: token,
                  };
              }
          } catch (err) {
              return {
                  result: false,
              };
          }
      }
  } catch (err) {
      return { result: "Wrong format of data" };
  }
};


const isUserExist = async (email) => {
  const res =  await shopkeeper.findOne({email:email})
  console.log(res)
  if(res){
    return true
  }
  else{
    return false
  }
}

const getShopKeeper = async(id) =>{
  // console.log(id)
    try{
      const res = await shopkeeper.findOne({ _id: id });
      const obj = res.toObject();
      delete obj.password
      return obj 
    }catch(err){
      console.log(err)
      return null
    }
} 

const getShopKeeperWithPassword=async (emailId)=>{
  try{
    const res = await shopkeeper.findOne({emailId:emailId})
    return res 
  }catch(err){
    return null
  }
}
module.exports = {
    getShopKeeper,
    createShopKeeper,
    getShopKeeperWithPassword
}