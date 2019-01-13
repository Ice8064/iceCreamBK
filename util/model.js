const config = require('../config/config');
const Sequelize = require('sequelize');

const ice = new Sequelize({
    database:config.ice_db.database,
    host:config.ice_db.host,
    username:config.ice_db.user,
    password:config.ice_db.password,
    port:config.ice_db.port,
    dialect:config.ice_db.dialect,
    operatorsAliases:false,
    pool: {
        max: 50,
        min: 0,
        idle: 10000
    },
});

module.exports = {
    ice
};
