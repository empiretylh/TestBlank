const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});


console.log(__dirname)


const db = {};

db.Sequelize =Sequelize;
db.sequelize = sequelize;

db.Task = require('./task.model')(sequelize,Sequelize)
db.Step = require('./step.model')(sequelize,Sequelize,db.Task);
db.User = require('./user.model')(sequelize,Sequelize);
db.UserTask =  require('./usertask.model')(sequelize,Sequelize,db.Task,db.User)

module.exports = db;

