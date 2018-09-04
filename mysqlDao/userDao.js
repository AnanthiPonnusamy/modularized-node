// User dao
module.exports = function(pool) {
  var functions = {};

  functions.auth = function(req, res){
    console.log(req.body);
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        var queryForAuth = 'select * from users where empId = ? and password = ?';
        var queryForValues = 'select * from employee where empId = ?';
        connection.query(queryForAuth,[req.body.empId, req.body.password], (err, rows)=> {
          if(err){
            connection.release();
            reject(err);
            return;
          }
          connection.query(queryForValues, [req.body.empId], (err, rows) =>{
            connection.release();
            if(err){
              reject(err);
              return;
            }
            resolve(rows);
          });
        });
      });
    });
  }

  return functions;
}