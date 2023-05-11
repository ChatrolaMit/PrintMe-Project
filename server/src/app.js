const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors({
    origin:'http://localhost:4444'
}))

app.use(morgan('combined'))
app.use(express.json())

app.get('*/',(req,res)=>{
    res.send("Server is Running...")
})

module.exports = app ;