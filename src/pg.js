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
return



function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("login").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("login").innerHTML = "dati salvati nel database";
  }
  }
  function mypwd() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
