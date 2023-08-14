const express = require('express')

const { httpAddNewShopKeeper } = require('./shopkeeper.controller')

const shopKeeper = express.Router()

shopKeeper.post('/addshopkeeper', httpAddNewShopKeeper);

module.exports = {
    shopKeeper
}
