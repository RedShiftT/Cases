const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

const app = express();

var jsonParser = bodyParser.json();
app.use(jsonParser);

var users = [
    {username: 'admin', pass: 'admin'},
    {username: 'user', pass: '12345'}
];

// var store = require('./session_handler.js').createStore();


app.use(cookieParser());
app.use(session({
    store: store,
    resave: false,
    saveUninitialized: false,
    secret: 'supersecret'
}));

app.post('/login', () =>{
    var fondUser;
    console.log('пришел запрос');
    for(var i = 0; i < users.length; i++){
        var u = users[i];
        if (u.username == req.body.username && u.pass == req.body.pass) {
            fondUser = u.username;
        }
    }
    if(fondUser != undefined){
        req.session.username = req.body.username;
        console.log('loged:' + req.body.username);
        res.send('logined: '+req.body.username);
    }else{
        console.log('loggin failed: '+req.body.username);
        res.status(401).send('login error');
    }
});

app.listen(8080, () => {console.log('Модуль авторизации работает')});

http.createServer(function(req, res) {
    var query = url.parse(req.url).query,
    params = qs.parse(query);

    var filePath = 'public' + req.url;
    if (filePath == 'public/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // if(params.case === undefined) {
        //     res.end(html);
        // }else{
        //     res.end(caseHTML)
        // }
        filePath += 'index.html'
    };

    var extname = path.extname(filePath);
    var contentType = 'text/html';

    // switch (extname) {
    //     case '.js':
    //         contentType = 'text/javascript'; break;
    //     case '.css':
    //         contentType = 'text/css'; break;
    //     case '.png':
    //         contentType = 'image/png'; break;
    // }
    
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                res.writeHead(404, { 'Content-Type': contentType });
                res.end();
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                res.end(); 
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(8080, () => console.log('Веб-сервер работает'));