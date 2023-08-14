const {createShopKeeper} = require('../../models/shopkeeper.model')

httpAddNewShopKeeper = async(req,res) =>{
    console.log("httpAddNewShopKeeper")
    const id = await createShopKeeper()
    return res.send({result:`New user Added, id= ${id}`})
}

module.exports = {
    httpAddNewShopKeeper
}