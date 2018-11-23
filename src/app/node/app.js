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

app.get('/users', (req, result) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        const obj = [{
            _id: '5bf7c9c2db09173b40e72efd',
            name: 'bernard'
        }];
        // dbo.collection("users").insertOne(obj, (err, res) => {
        //     if (err) throw err;
        //     console.log("insert user !");
        //     // db.close();
        // })

        dbo.collection("users").findOne({
            name: "bernard"
        }, (err, res) => {
            if (err) throw err;
            // result.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
            // result.jsonp([res]);
            console.log(res);
            // db.close();
        })
        let users = [];
        dbo.collection("users").find().forEach((user) => {
            users.push(user)
        }, (err, res) => {
            if (err) throw err;
            console.log(res)
            result.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
            result.jsonp(users);
            // db.close();
        })

        db.close();
    })
})

app.listen(5000, function () {
    console.log('Example app listening on port 3000!')
})