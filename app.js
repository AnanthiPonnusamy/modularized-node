module.exports = function(user, emp, asset, allocation) {
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var index = require('./routes/index')();

  app.use(bodyParser.json());

  app.use('/', index);
  app.use('/user', user);


  return app;
};
