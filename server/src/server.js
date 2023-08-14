const http = require('http')

const app = require('./app')
const { mongoConnect } = require('./services/mongo.connect')

const port = process.env.PORT || 5555

const server = http.createServer(app)

async function startServer(){
    await mongoConnect()
    server.listen(port,()=>{
        console.log(`Listning on PORT ${port}...`)
    })
}
startServer()