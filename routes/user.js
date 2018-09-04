module.exports = function(UserDao, connection) {
  var express = require('express');
  var router = express.Router();
  console.log('User: connection', connection);
  var dao = new UserDao(connection);


  router.post('/auth', (req, res) =>{
    dao.auth(req, res).then(rows => {
      if(rows.length === 1) {
        var data = {
          'message': 'Login success',
          'name': rows[0].name,
          'employeeId': rows[0].empId,
          'email': rows[0].emailId,
          'contactNumber': rows[0].contactNumber
        };
        res.json(data);
      } else {
        res.json({message: 'Wrong credentials'});
      }
    }, (err) =>{
      res.json(err);
    });
  });

  return router;
}