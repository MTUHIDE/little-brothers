const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

const CONFIG = require("../config/config");

const basename = path.basename(__filename);
const db = {};


// Build our sequalize connection to the driver scheduler database
db.Sequelize = Sequelize;


db.driverScheduler = new Sequelize(
    CONFIG.db_name,
    CONFIG.db_user,
    CONFIG.db_password,
    {
        host: CONFIG.db_host,
        dialect: 'mssql',
        port: CONFIG.db_port,
        logging: CONFIG.db_logging,
        pool: {
            max: 25,
            min: 0,
            acquire: 20000,
            idle: 10000,
            eviction: 10000,
        },
        dialectOptions: {
            encrypt: true,
            requestTimeout: 30000,
            packetSize: 32768,
            options: {
                validateBulkLoadParameters: true,
            }
        }
    }
);

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(db.driverScheduler, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;
