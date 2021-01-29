const userData = require('../data/users.data')
const webTokens = require('../services/auth')

function adminAuth(req, res, next) {
    const index = userData.randomNumber(0, userData.adminTokensLength() - 1)
    let token = userData.adminTokensElement(index)

    let decoded = webTokens.decode(token) 
    let email = decoded.email // correction krna h abhi

    let user = userData.findUser(id)
    req.user = user

    // return User.findOne({
    //     where: {
    //         id: decoded.id
    //     }
    // })
    // .then((user) => {
    //     if (user == null) throw new Error('No user found')

    //     req.user = user

    //     next()
    // })
    // .catch(e => {
    //     res.json({error : e.message})
    //     // Status code google krna
    // })

    return typeof user.id === "number" ? next() : res.send("no user found")

}

module.exports = {
    auth
}