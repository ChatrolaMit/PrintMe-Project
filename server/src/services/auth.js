const jwt = require("jsonwebtoken")
const createError = require('http-errors')
const signKey = "Alive047"

// const getToken = (id) => {
//     return new Promise((resolve, reject) => {
//         jwt.sign(id, signKey, { algorithm: 'RS256', expiresIn: '2h' }, (err, token) => {
//             if (err) {
//                 resolve({
//                     result: false,
//                     message: 'Something went wrong'
//                 });
//             } else {
//                 reject({
//                     result: true,
//                     token: token
//                 });
//             }
//         });
//     });
// };

module.exports = {

    signToken:(data)=>{
        return new Promise((resolve,reject) =>{
            const payload = data
            const options = {
                expiresIn: '10h',
                issuer: 'alive047@gmail.com',
                audience: "Shop keeper",
            }
            jwt.sign(payload,signKey , options,(err,token)=>{
                if(err){
                    console.log(err)
                    reject(createError.InternalServerError())
                    return null
                }
                resolve(token)
            })

        })

    },

verifyToken:(token) =>{
        if(token){
            jwt.verify(token,signKey,(err,valid)=>{
                if(err){
                    return {
                        result:false,
                        data:"token is invalid"
                    }
                }
                if(valid){
                    return {
                        result:true,
                        data:"token is valid"
                    }
                }
            })
        }else{
            return{
                result:false,
                data:"token is not exist"
            }
        }
    }

}  


