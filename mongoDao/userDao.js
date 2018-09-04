// User dao
module.exports = function(pool) {
  var functions = {};

  functions.auth = function(req, res) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection, db) => {
        console.log(req)
        var empId = req.body.empId.toUpperCase();
        var password = req.body.password;
        connection.collection('users').find({empId : empId, password:password}).toArray(function(err, result) {
          if(err){
            db.close();
            reject(err);
            return;
          }
          connection.collection('employee').find({empId: empId}).toArray(function(err, result){
            db.close();
            if(err){
              reject(err);
              return;
            }
            resolve(result);
          });
        });
      });
    });
  };

  return functions;
};
