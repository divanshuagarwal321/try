const Sequelize = require("sequelize");
const sequelize = require('../services/sequelize.service.js').sequel()

const schema = {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Sequelize.BIGINT,
        defaultValue: new Date().getTime()
    }

};

const Users = sequelize.define("Users", schema);
module.exports = Users;