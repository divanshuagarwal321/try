require('dotenv').config()
const app = require('express')()
const morgan = require('morgan')
const { v4: uuid } = require('uuid')
const env = require('./config/env')
require('./services/xlsx.service')
import path from 'path'

app.use(morgan('tiny'))

app.use('/users', require('./Routers/users.router'))
app.use('/tasks', require('./Routers/tasks.router'))
//app.use('/admin', require('./Routers/admin.router'))

const populate = () => {
    const userData = require('./data/users.data')
    const taskData = require('./data/tasks.data')
    const adminData = require('./data/admin.data')

    userData.add()
    userData.add()
    userData.add()
    userData.add()

    taskData.addTask()
    taskData.addTask()
    taskData.addTask()

    adminData.findOrCreate('divanshu@todo.com' , 'divanshu')
    adminData.findOrCreate('divanshu@todo.com' , 'divanshu')
    adminData.findOrCreate('divanshu@todo.com' , 'divanshu')


}
populate()

// console.log(uuid())

app.listen(env.port, () => {
    console.log(`listening on port ${env.port}...`)
})

