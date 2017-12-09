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
const connect = require('connect');

// const app = express();

// // app.use(express.cookieDecoder());
// app.use(connect.session({ secret: 'your secret here', cookie} ));
// app.use(cors());

// var jsonParser = bodyParser.json();
// app.use(jsonParser);

// var users = [
//     {username: 'admin', pass: 'admin'},
//     {username: 'user', pass: '12345'}
// ];

// var store = require('./session_handler.js').createStore();


// app.use(cookieParser());
// app.use(session({
//     store: store,
//     resave: false,
//     saveUninitialized: false,
//     secret: 'supersecret'
// }));

// app.post('/login', (req, res) =>{
//     var fondUser;
//     console.log('пришел запрос');
//     for(var i = 0; i < users.length; i++){
//         var u = users[i];
//         if (u.username == req.body.username && u.pass == req.body.pass) {
//             fondUser = u.username;
//         }
//     }
//     if(fondUser != undefined){
//         req.session.username = req.body.username;
//         req.session.authorized = true;
//         console.log('loged:' + req.body.username);
//         res.send('loged: ' + req.body.username);
//     }else{
//         console.log('login failed: '+req.body.username);
//         res.status(401).send('login error');
//     }
// });
// 
// app.listen(591);

http.createServer(function(req, res) {
    var query = url.parse(req.url).query;
    var params = qs.parse(query);
    console.log('ЗАПРОС ' + req.url);
    // console.log(req.session.username);
    console.log(params);
    console.log(params.case);
    console.log(+params.case);
    console.log(typeof +params.case);

    var filePath = 'public' + req.url;
    console.log(filePath);
    if (filePath == 'public/') {
        console.log('html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html.html);
    }
    if (Object.keys(params).length != 0) {
        console.log('!!!'+params.case);
        if(+params.case == NaN) {
            console.log('левый парамс');
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404</h1>')
        } else{
            console.log('все ок');
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