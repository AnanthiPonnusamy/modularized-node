var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dataBaseName = "assetAllocation";
var obj = {
  dataBase: null,
  getConnection : function(fn){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dataBaseName);
      console.log("Database connected!");
      fn(err, dbo, db);
      // db.close();
    });
  }
}
module.exports = obj
// obj.getConnection();

// dbo.collection("users").find({empId: 'M1030380'}).toArray(function(err, result) {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });