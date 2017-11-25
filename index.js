const bomjcase = new Object();
    bomjcase.id = 0;
    bomjcase.drop = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50, 50, 50, 100];
    bomjcase.price = 020;
    bomjcase.name = "Бомжацкий кейс";
const majorcase = new Object();
    majorcase.id = 1;
    majorcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
    majorcase.price = 200;
    majorcase.name = "Мажорский кейс";
const egorcase = new Object();
    egorcase.id = 2;
    egorcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
    egorcase.price = 100;
    egorcase.name = "Кейс ЕГОРА";
const premcase = new Object();
    premcase.id = 3;
    premcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
    premcase.price = 444;
    premcase.name = "Премиум кейс";

const cases = [bomjcase, majorcase, premcase, egorcase];

var casesHTML = '';
for(var i = 0; i < cases.length; i++) {
    casesHTML += "<div class='case'><a href='http://localhost:8080/?case=" + cases[i].id + "'><span class='" + cases[i].price + "'>" + cases[i].price + 
    "p</span><img src='res/cases/case" + cases[i].id + 
    ".png'><span class='caseName'>" + cases[i].name + 
    "</span></a></div>"
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cases for Jesus</title>
    <link rel="icon" type="image/png" href="favicon.png" />
    <link rel="stylesheet" href="styles/cases.css">
    <link rel="stylesheet" href="styles/header.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
</head>
<body>
    <header>
        <a href="localhost:8080" id="home">
            <h1>Cases <span class="f">4</span>Jesus</h1>
        </a>
    </header>
    <article>
        <div id="caseField">`
        + casesHTML +
        `</div>
    </article>
    <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jQuery/jquery-1.11.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`;

const caseHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cases for Jesus</title>
    <link rel="icon" type="image/png" href="favicon.png" />
    <link rel="stylesheet" href="styles/case.css">
    <link rel="stylesheet" href="styles/header.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
</head>
<body>
    <header>
        <a href="localhost:8080" id="home">
            <h1>Cases <span class="f">4</span>Jesus</h1>
        </a>
    </header>
    <article>
        <div>
        </div>
    </article>
    <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jQuery/jquery-1.11.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`;



function compareRandom(a, b) {
        return Math.random() - 0.5;
}

// function checkWidth(x) {
//     if (x < 100){
//         return "cheapcase";
//     } else {
//          return "caseCost";
//     }
// }

// var x = "";
// for(var i = 0; i < cases.length; i++) {
//     x += "<div class='case' onclick='openCase(" + [i] + ")'><span class='" + checkWidth(cases[i].price) + "'>" + cases[i].price + 
//     "p</span><img src='res/cases/case" + cases[i].id + 
//     ".png'><span class='caseName'>" + cases[i].name + 
//     "</span></div>"
// }

const path = require('path');
const fs = require('fs');
const http = require('http');
const url = require('url');
const qs = require('querystring');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

var users = [
    {username: 'admin', password: '12345'},
    {username: 'foo', password: 'bar'},
    {username: 'user', password: 'text'},
];

var sessionHandler = require('./session_handler');
var store = sessionHandler.createStore();

app.use(cookieParser());
app.use(session({
    
}));

app.get("/case", function(req, res) {
    var query = url.parse(req.url).query;
    var params = qs.parse(query);
    if (params != undefined){
        res.send(cases[params.case].drop.sort(compareRandom).join(' '));
    }
    
});
app.listen(591);

http.createServer(function(req, res) {
    
    // console.log(req.url);
    var query = url.parse(req.url).query;
    var params = qs.parse(query);

        

        var filePath = 'public' + req.url;
        if (filePath == 'public/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if(params.case === undefined) {
                res.end(html);
            }else{
                res.end(caseHTML)
            }
        };

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
  }).listen(8080, () => console.log('Все ок'));

const passport = require('passport');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;

app.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    secret: config.redisStore.secret,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const user = {
    username: 'test-user',
    password: 'test-password', id: 1
}
passport.use(new LocalStrategy(
    function(username, password, done) {
        findUser(username, function (err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false)
            }
            if (password !== user.password ) {
                return done(null, false)
            }
            return done(null, user)
        })
    }
))