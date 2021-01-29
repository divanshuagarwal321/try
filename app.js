require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')

const env = require('./config/env')
require('./services/xlsx.service')

app.use(express.json())
app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log("hello world")
    req.sparshi = "gandu"
    // res.send("hello world")
    next()
})

const sequelizeMethods = require('./services/sequelize.service')
sequelizeMethods.connect();

app.use('/users', require('./Routers/users.router'))
app.use('/tasks', require('./Routers/tasks.router'))
//app.use('/admin', require('./Routers/admin.router'))

app.use((req, res, next) => {
    res.status(404).json({
        error: 'not found',
        sparshi: req.sparshi
    })
    next()
})

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

    adminData.findOrCreate('divanshu@todo.com', 'divanshu')
    adminData.findOrCreate('divanshu@todo.com', 'divanshu')
    adminData.findOrCreate('divanshu@todo.com', 'divanshu')


}
populate()


sequelizeMethods
    .sequel()
    .authenticate()
    .then(() => {
        return sequelizeMethods.sequel().sync({
            alter: true,
            force: false
        });
        // alter: false -> create if not exists
        // alter: true -> create if not exists. If it exists, then alter it.
        // force: true -> if exists, drop it. Create again.
    })
    .then(async (_) => {
        // console.log()
        const Admin = require('./models/admin.model')
        const Sequelize = require('sequelize')
        await Admin.findOrCreate({
                where: {
                    email: "shobhit@todo.com"
                },
                defaults: {
                    password: "password"
                    // bcrypt
                }
            })
            .then((admin) => {
                const ad = admin[0].toJSON()
                console.log(ad)
            })
            .catch(console.error)

        // await Admin.findOne({
        //         where: {
        //             email: "shobhit@todo.com"
        //         }
        //     })
        //     .then(console.log)
        //     .catch(console.error)

        // await Admin.create({
        //         email: "shobhit@todo.com",
        //         password: "shobhit"

        //     })
        //     .then(console.log)
        //     .catch(console.error)

        // await Admin.update({
        //         password: "newPassword"
        //     }, {
        //         where: {
        //             id: "68734126-5ed6-4d90-8bb4-568062b81f14"
        //         }
        //     })
        //     .then(console.log)
        //     .catch(console.error)

        // await Admin.findAll({
        //     where: {
        //         email: "shobhit@todo.com",
        //         password: "shobhit"
        //     }
        // })
        //     .then((admins) => {
        //         for (let admin of admins) {
        //             console.log(admin.toJSON())
        //         }
        //     })
        //     .catch(console.error)

        // await Admin.destroy({
        //         where: {
        //             email: "shobhit@todo.com",
        //             password: "shobhit"
        //         }
        //     })
        //     .then(console.log)
        //     .catch(console.error)

        // await Admin.findAll({
        //     where: {
        //         createdAt: {
        //             [Sequelize.Op.lte]: 1611947307475
        //         }
        //     }
        // })
        //     .then((admins) => {
        //         for (let admin of admins) {
        //             console.log(admin.toJSON())
        //         }
        //     })
        //     .catch(console.error)


    })
    .then((_) => {
        app.listen(env.port, () => {
            console.log(`listening on port ${env.port}...`)
        })
    })
    .catch(console.error);