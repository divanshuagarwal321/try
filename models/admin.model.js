const Sequelize = require("sequelize");
const sequelize = require('../services/sequelize.service.js').sequel()

const schema = {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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

const Admin = sequelize.define("Admin", schema);
module.exports = Admin;