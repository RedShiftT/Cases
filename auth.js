const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const path = require('path');
// const http = require('http');
// const url = require('url');
// const qs = require('querystring');
// const fs = require('fs');
// const html = require('./html');
const connect = require('connect');
// const connectMongoDB = require('connect-mongodb');

const app = express();
app.use(cors());

app.use(connect.cookieParser());

app.configure('development', () => {
    app.set('db-uri', 'mongodb://localhost/nodepad-development');
});

var db = mongoose.connect(app.set('db-uri'));

function mongoStoreConnectionArgs() {
    return { 
        dbname: sessions,
        host: "localhost",
        port: 27017,
        username: "admin",
        password: "admin" };
    }

app.use(express.session({
    store: mongoStore(mongoStoreConnectionArgs())
}));

var jsonParser = bodyParser.json();
app.use(jsonParser);

var users = [
    {username: 'admin', pass: 'admin'},
    {username: 'user', pass: '12345'}
];

// var store = require('./session_handler.js').createStore();

app.post('/login', (req, res) =>{
    var fondUser;
    for(var i = 0; i < users.length; i++){
        // var u = users[i];
        if (users[i].username == req.body.username && users[i].pass == req.body.pass) {
            fondUser = users[i].username;

            req.session.username = req.body.username;
            req.session.authorized = true;
            console.log('loged:' + req.body.username);
            res.send('loged: ' + req.body.username);
        }
    }
    if(fondUser == undefined){
        console.log('login failed: '+req.body.username);
        res.status(401).send('login error');
    }
});

app.get('/check', (req, res) => {
    console.log(req.session.username);
});

app.get('/logout', (req, res) => {
    console.log(req.session.username);
});

app.listen(591);