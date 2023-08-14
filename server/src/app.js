const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { mongoConnect } = require('./services/mongo.connect')
const api = require('./routes/api')

const app = express()

app.use(cors({
    origin:'http://localhost:5555'
}))

// app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(express.json())

app.use('/api',api)

app.get('/',(req,res)=>{
    
    res.send("Server is Now Running....")
})

module.exports = app ;