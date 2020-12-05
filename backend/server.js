const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors=require('cors')
const {MongoClient} = require('mongodb');

const url="mongodb+srv://database:database@cluster0.fom6x.mongodb.net/database?retryWrites=true&w=majority";

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signin', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query={
                "email":req.body.email,
                "password":req.body.password
              }
    dbo.collection("users").findOne(query, function(err, result) {
      if (err) throw err;
      if(result)
        res.json(result);
      db.close();
    });
  });
})


app.post('/register', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {
      id: Math.floor(Math.random() * 100) + 1  ,
      name: req.body.name,
      email: req.body.email,
      password:req.body.password
    };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").findOne({"name":req.body.name}, function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
})

app.listen(3000) 