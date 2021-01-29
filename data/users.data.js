const entries = require('../config/development')
const data = require('./data')
const bcrypt = require('bcrypt')
const webTokens = require('../services/auth')

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usersLength = () => {
    return data.users.length
}

const hashing = (password) => {
    return bcrypt.hashSync(password, 0)
}

const check = () => {
    if (usersLength() === 0) {
        res.status(200).json({
            message: "users array is empty"
        })
        return;
    }

}

const randomObj = () => {
    const hash = hashing(entries.data.users.password[randomNumber(0, 19)])
    let obj = {
        id: (usersLength() * 3),
        age: randomNumber(18, 35),
        name: entries.data.users.names[randomNumber(0, 19)],
        password: hash,
        emailId: entries.data.users.emailId[randomNumber(0, 19)]
    }

    let token = webTokens.encode(obj.id)
    data.tokens.push(token)
    obj.token = token

    return obj;
}

const add = () => {
    let newObj = randomObj()
    let user = {
        ...newObj
    }
    delete user.token
    data.users.push(user)

    return user
}

const findUser = (id) => {
    for (let x of data.users) {
        if (x.id === id) {
            return x
        }
    }
    return {}
}

const deleteUser = (user, token) => {
    let index = data.users.indexOf(user)
    let tokenIndex = data.tokens.indexOf(token)

    data.users.splice(index, 1)
    data.tokens.splice(tokenIndex, 1)

}

const updateUser = (user) => {
    const updatedData = randomObj()
    delete updatedData.token

    const index = data.users.indexOf(user)
    let y = {
        ...updatedData,
        id: data.users[index].id
    }
    data.users[index] = y
    let obj = {
        index,
        "updated Data": y
    }
    return obj
}

const describedData = (user) => {
    let id = user.id
    
    let taskArray = []
    for(let x of data.tasks){
        if(x.userId === id){
            taskArray.push(x)
        }
    }

    let obj = {
        "user" : user,
        "tasks" : taskArray
    }
    return obj
}

const tokenLength = () => {
    return data.tokens.length
}

const adminTokensLength = () => {
    return data.adminTokens.length
}

const tasksLength = () => {
    return data.tasks.length
}

const tokensElement = (index) => {
    return data.tokens[index]
}

const adminTokensElement = (index) => {
    return data.adminTokens[index]
}

module.exports = {
    add,
    randomObj,
    randomNumber,
    findUser,
    tokenLength,
    usersLength,
    tasksLength,
    tokensElement,
    check,
    adminTokensLength,
    adminTokensElement,
    deleteUser,
    updateUser,
    describedData
}