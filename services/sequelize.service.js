const Sequelize = require("sequelize").Sequelize;
const env = require("../config/env").db

let sequelize;

module.exports = {
    connect: () => {
        let seq = new Sequelize(env.name, env.cred.username, env.cred.password, {
            dialect: env.dialect,
            logging: env.logging,
            host: env.host,
            port: env.port,
            define: {
                timestamps: false,
                //     charset: env.define.charset,
                //     collate: env.define.collate,
                //     hooks: {
                //         beforeBulkCreate(rec, opts) {
                //             let creationTime = new Date().getTime();
                //             for (let i in rec) {
                //                 rec[i].createdAt = creationTime;
                //                 rec[i].updatedAt = creationTime;
                //             }
                //         },
                //         beforeCreate(rec, opts) {
                //             console.table(rec.dataValues);
                //             rec.dataValues.createdAt = new Date().getTime();
                //             rec.dataValues.updatedAt = rec.dataValues.createdAt;
                //         },
                //         beforeUpdate: function (rec, options) {
                //             console.log(rec);
                //             rec.dataValues.updatedAt = new Date().getTime();
                //         },
                //         beforeBulkUpdate: function (rec, options) {
                //             console.log(rec);
                //             rec.attributes.updatedAt = new Date().getTime();
                //             rec.fields.push("updatedAt");
                //         },
                //     },
                //     freezeTableName: true,
                // },
                // pool: {
                //     acquire: env.pool.acquire,
                //     idle: env.pool.idle,
                //     max: env.pool.max,
                //     min: env.pool.min,
            },
        });
        sequelize = seq;
        return sequelize;
    },

    connection: () => connect(),
    sequel: () => sequelize
}