const express = require('express')
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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
        let users = [];
        dbo.collection("users").find().forEach((user) => {
            users.push(user)
        }, (err, res) => {
            if (err) throw err;
            console.log(res)
            result.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
            result.jsonp(users);
        })
        db.close();
    })
})

app.get('/user/:id', (req, result) => {
    console.log(req.params.id);
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        dbo.collection("users").findOne({
            _id: new ObjectId(req.params.id)
        }, (err, res) => {
            if (err) throw err;
            console.log(res);
            result.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
            result.jsonp(res);
        })
        db.close();
    })
})

app.post('/adduser', (req, result) => {
    console.log(req.body)
    const newUser = {
        _id: new ObjectId(),
        name: req.body.name
    }
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        dbo.collection("users").insertOne(newUser, (err, res) => {
            console.log("insert user!");
            result.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
            result.jsonp('ok');
        })
        console.log(req.body.name)
        db.close();
    })
})

app.listen(5000, function () {
    console.log('Example app listening on port 3000!')
})