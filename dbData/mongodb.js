// mongod -dbpath D:\Practice\mongoDb_data\data
// mongo
// show dbs
// use assetAllocaion
db.employee.insertMany([{"empId": "M1030394", "name": "Ananthi", "emailId": "ananthi@gmail.com","contactNumber": "987654321"},{"empId": "M1030380", "name": "Sabbu", "emailId": "sabbu@gmail.com","contactNumber": "987654321"},{"empId": "M1030395", "name": "Ananthi", "emailId": "anu@gmail.com","contactNumber": "987654321"}])
db.asset.insertMany([{"assetId":"LT15179", "asset": "Laptop"},{"assetId":"LT15180", "asset": "Laptop"}])
db.allocation.insertMany([{"empId":"M1030394", "assetId": "LT15179"},{"empId":"M1030380", "assetId": "LT15180"}])
db.users.insertMany([{"userId": 1, "emailId": "ananthi@gmail.com", "password": "ananthi", "empId":"M1030394"},{"userId": 2, "emailId": "sabbu@gmail.com", "password": "sabbu", "empId":"M1030380"},{"userId": 3, "emailId": "anu@gmail.com", "password": "anu", "empId":"M1030395"}])

