var config = require('./configuration/common_config.json');
var connection = require('./configuration/connections/' + config.connection);
console.log('server: connection ', connection);
var userDao = require('./'+ config.routePath + '/userDao');
var user = require('./routes/user')(userDao, connection);
var app = require('./app')(user);


app.listen(config.port, () => {
  console.log('Server started with port ', config.port);
});