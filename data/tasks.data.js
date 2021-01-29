const entries = require('../config/development')
const userData = require('./users.data')
const data = require('./data')

const tasksRandomObj = () => {
    const num = userData.randomNumber(0, data.users.length-1)
    let obj = {
        id: data.tasks.length * 5,
        completed: false,
        userId: data.users[num].id,
        toDo: entries.data.tasks.toDo[userData.randomNumber(0, 19)],
        createdAt: Date.now()
    }

    return obj
}

const returnUserDetails = (a) => {
    let user = {}
    for(let x of data.users){
        if(x.id === data.tasks[a].userId){
            user = x
            break;
        }
    }
    return user
}

const addTask = () => {
    data.tasks.push(
        tasksRandomObj()
    )
    return data.tasks[data.tasks.length - 1]
}

module.exports = {
    addTask,
    tasksRandomObj,
    returnUserDetails
}