const userData = require('../data/users.data')
const data = require('../data/data')
const webTokens = require('../services/auth')

// @@api: http://localhost:3000/users
const users = (req, res) => {
    res.status(200).json({
        message: "in user"
    })
}

// @@api: http://localhost:3000/users/list
const list = (req, res) => {
    console.log(req.sparshi)
    const _b = req.body
    console.log(_b)

    console.log(req.header('Authorization').replace('Bearer ', ""))
    res.status(200).json({
        user: data.users,
        tokens: data.tokens
    })

    // List all users. Token from AUTHORIZATION, admin auth.
    // FindAll
}

// @@api: http://localhost:3000/users/signUp
const signUp = (req, res) => {
    const addedUser = userData.add();
    res.status(200).json(
        addedUser
    )

    // Add an user. data from POST body
    // create
    // token attach, -> response
}

// @@api: http://localhost:3000/users/logIn
const logIn = (req, res) => {
    let user = req.user
    let token = webTokens.encode(user.id)
    user.token = token
    res.status(200).json(
        user
    )

    // user token -> Bearer token in authorization
}

// @@api: http://localhost:3000/users/describe
const describe = (req, res) => {
    let user = req.user
    const obj = userData.describedData(user)

    res.status(200).json(
        obj
    )

    // FindOne user from Token
    // take it's Id
    // Find All tasks from that Id
    // {
    //     id: "",
    //     email: "",
    //     password: "",
    //     createdAt: "",
    //     tasks: []
    // }
}

// @@api: http://localhost:3000/users/delete
const destroy = (req, res) => {
    userData.check() // sahi krna h

    let user = req.user
    let token = req.token

    res.status(200).json(
        user
    )

    userData.deleteUser(user, token)

    // destroy using token
    // req.user.id
    // destroy query
}

// @@api: http://localhost:3000/users/update
const update = (req, res) => {
    userData.check() // sahi krna h

    let user = req.user
    const obj = userData.updateUser(user)

    res.status(200).json(obj)

    // PATCH request
}

module.exports = {
    users,
    list,
    signUp,
    logIn,
    describe,
    destroy,
    update
}