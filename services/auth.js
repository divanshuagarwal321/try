const jwt = require('jsonwebtoken')
const entries = require('../config/development')

// decode - token pass hoga parameter me . object return hoga - ek flag hoga jo true yaa false bataega .. if true = ek key dega user id ... if false = error message 
// encode - user id pass krega parameter

const decode = (token) => {
    return jwt.verify(token, entries.secrets.jwt)
}

const encode = (id) => {
    return jwt.sign({
        id: id,
        iat: new Date().getTime()
    }, entries.secrets.jwt)
}

const adminEncode = (email) => {
    return jwt.sign({
        email: email,
        iat: new Date().getTime()
    }, entries.secrets.jwt)
}

module.exports = {
    decode,
    encode,
    adminEncode
}