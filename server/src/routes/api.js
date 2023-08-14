const express = require("express")
const {shopKeeper} = require('./shopKeeper/shopKeeper.routes')
const api = express.Router()

api.use('/shopKeeper',shopKeeper)
 
module.exports = api;