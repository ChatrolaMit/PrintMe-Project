const http = require('http')

const app = require('./app')

const port = process.env.PORT || 5555

const server = http.createServer(app)

async function startServer(){
    server.listen(port,()=>{
        console.log(`Listning on PORT ${port}...`)
    })
}
startServer()