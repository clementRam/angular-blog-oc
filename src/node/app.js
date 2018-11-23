const express = require('express')
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";



app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
  res.send(JSON.stringify({
    "name": "name"
  }))
})

app.get('/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
  res.send(MongoClient.connect(url, function (err, db) {
    // if (err) throw err;
    // const dbo = db.db("mydb");
    // const obj = {
    //   name: 'pierre'
    // };
    // dbo.collection("users").insertOne(obj, (err, res) => {
    //   if (err) throw err;
    //   console.log("insert user !");
    //   db.close();
    // })

    dbo.collection("users").findOne({
      name: "pierre"
    }, (err, res) => {
      if (err) throw err;
      console.log(res)
      db.close();
    })
    db.close();
  }))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})