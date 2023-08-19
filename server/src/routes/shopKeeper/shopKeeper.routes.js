const express = require('express')

const { httpShopKeeperLogin,httpGetShopKeeper,httpAddNewShopKeeper } = require('./shopkeeper.controller')

const shopKeeper = express.Router()

shopKeeper.get('/' , httpGetShopKeeper)
shopKeeper.post('/register', httpAddNewShopKeeper);
shopKeeper.post('/login', httpShopKeeperLogin);

module.exports = {
    shopKeeper
}
