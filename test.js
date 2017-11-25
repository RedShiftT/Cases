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

const html = require('./html');

const app = express();
app.use(cors());

var jsonParser = bodyParser.json();
app.use(jsonParser);

var users = [
    {username: 'admin', pass: 'admin'},
    {username: 'user', pass: '12345'}
];

var store = require('./session_handler.js').createStore();


app.use(cookieParser());
app.use(session({
    store: store,
    resave: false,
    saveUninitialized: false,
    secret: 'supersecret'
}));

app.post('/login', (req, res) =>{
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
        res.send('loged: ' + req.body.username);
    }else{
        console.log('loggin failed: '+req.body.username);
        res.status(401).send('login error');
    }
});

app.listen(591);

http.createServer(function(req, res) {
    var query = url.parse(req.url).query;
    var params = qs.parse(query);
    
    console.log('запрос '+req.url);
    console.log('Параметры: ');
    console.log(params);
    console.log(params.case);

    var filePath = 'public' + req.url;
    if (filePath == 'public/') {
        if(params == {} ){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html.html);
        } else if(typeof params.case !== "number") {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404</h1>')
        } else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html.caseHTML(params.case, 'admin'));
        }
    }
    // if((filePath == 'public/' && query.case !== undefined)) {
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.end('404');
    // }

    var extname = path.extname(filePath);
    var contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript'; break;
        case '.css':
            contentType = 'text/css'; break;
        case '.png':
            contentType = 'image/png'; break;
    }
    
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