var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbmpalestra");//nome db
  var query = { nome: "alex" };  //query
  dbo.collection("progressi").find(query).toArray(function(err, result) {  //nome collection
    if (err) throw err;
    console.log(result);
    db.close();
  });
});




