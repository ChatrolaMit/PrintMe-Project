const bcrypt = require("bcrypt")
const saltRound = 10

const {getShopKeeper,createShopKeeper,getShopKeeperWithPassword} = require('../../models/shopkeeper.model')

const httpAddNewShopKeeper = async(req,res) =>{
    let data = req.body
    
    
    bcrypt.hash(data.password , saltRound, async(err,hash)=>{
        if(err){
            return res.send({result:"Salting is not working, register after sometime"});
        }
        
        data.password = hash
        const result = await createShopKeeper(data)
        // console.log(data) 
        return res.send(result)
    })
}

const httpGetShopKeeper = async(req,res)=>{
    try{

        const result = await getShopKeeper(req.query.id)
        if(result){
            return res.send(result)
        }
        else{
            return res.send({result:"user not found"})
        }
    }catch(err){
        // console.error("Error while fetching shopkeeper:", err);
    return res.status(500).send({ error: "Internal server error" });
    }
}

const httpShopKeeperLogin = async(req,res) =>{

    const data = req.body 
    console.log(data.emailId)
    const user = await getShopKeeperWithPassword(data.emailId)
    if(user){
        // console.log(user) 
        bcrypt.compare(data.password ,user.password, (err,result)=>{
            if(err){
                // console.error(err)
                return res.send({error:err})
            }
            if(result){
                return res.status(200).send({result: "user is valid"})
            }else{
                return res.status(401).send({result:"user is unAuthorised"})
            }
            
        })
    }else{
        return res.send({result:"user not exist"})
    }       
}

module.exports = {
    httpGetShopKeeper,
    httpAddNewShopKeeper,
    httpShopKeeperLogin
}