var mysql = require('mysql');
var commonConfig = require('../common_config.json');
var mysqlConfig = require('../mysql_config.json');
var connectionObj = {
  host: commonConfig.host,
  connectionLimit: mysqlConfig.connectionLimit,
  database: mysqlConfig.db,
  user: mysqlConfig.user,
  password: mysqlConfig.password
};
var connection = mysql.createPool(connectionObj);

module.exports = connection;
