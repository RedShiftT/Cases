// var express = require("express");
// var cors = require("cors");

// var app = express();

// app.use(cors());

// function compareRandom(a, b) {
//         return Math.random() - 0.5;
// }


//         // var egorcase = new Object();
//     //     egorcase.id = 2;
//     //     egorcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
//     //     egorcase.price = 100;
//     //     egorcase.name = "Кейс ЕГОРА";
//     var bomjcase = new Object();
//         bomjcase.id = 0;
//         bomjcase.drop = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50, 50, 50, 100];
//         bomjcase.price = 020;
//         bomjcase.name = "Бомжацкий кейс";
//     var majorcase = new Object();
//         majorcase.id = 1;
//         majorcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
//         majorcase.price = 200;
//         majorcase.name = "Мажорский кейс";
//     var premcase = new Object();
//         premcase.id = 3;
//         premcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
//         premcase.price = 444;
//         premcase.name = "Премиум кейс";
//     var progcase = new Object();
//         progcase.id = 4;
//         progcase.drop = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 100];
//         progcase.price = 100;
//         progcase.name = "Кейс Сергея";

     
// var cases = [bomjcase, majorcase, premcase, progcase];

// function checkWidth(x) {
//     if (x < 100){
//         return "cheapcase";
//     } else {
//          return "caseCost";
//     }
// }

// var x = "";
// for(var i = 0; i < cases.length; i++) {
//     x += "<div class='case'><span class='" + checkWidth(cases[i].price) + "'>" + cases[i].price + 
//     "p</span><img src='res/cases/case" + cases[i].id + 
//     ".png'><span class='caseName'>" + cases[i].name + 
//     "</span></div>"
// }

// app.get("/getCases", function(request, response) {
//     response.send(x);
// });

// app.get("/getCases", function(request, response) {
//     response.send(x);
// });

// // пебедный arr[68]
// app.listen(591);

var http = require('http');
var server = http.createServer();

server.on('reqest', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end("pepiskA");
})

server.listen("79.172.83.57", 8080);