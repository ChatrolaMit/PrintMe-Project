const jwt = require("jsonwebtoken")
const signKey = "Alive047"

const generateToken = () =>{
    
    var token = jwt.sign({foo:'bar'}, signKey , {algorithm:'RS256'}, (err,token)=>{
        console.log(token)
    })
    return token
}

// module.exports = {
//     generateToken
// }


