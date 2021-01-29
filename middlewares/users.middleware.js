const userData = require('../data/users.data')
const webTokens = require('../services/auth')

function user(req, res, next) {
    const index = userData.randomNumber(0, userData.tokenLength() - 1)
    let token = userData.tokensElement(index)
    req.token = token

    let decoded = webTokens.decode(token) 
    let id = decoded.id

    let user = userData.findUser(id)
    req.user = user

    return typeof user.id === "number" ? next() : res.send("no user found")

}

module.exports = {
    user
}