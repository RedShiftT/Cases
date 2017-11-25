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

var casesHTML;

for(var i = 0; i < cases.length; i++) {
    casesHTML += "<div class='case'><a href='http://localhost:8080/?case=" + cases[i].id + "'><span class='" + cases[i].price + "'>" + cases[i].price + 
    "p</span><img src='res/cases/case" + cases[i].id + 
    ".png'><span class='caseName'>" + cases[i].name + 
    "</span></a></div>"
}

var html = `<!DOCTYPE html>
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
        <div id="caseField">` + casesHTML +  `</div>
        </article>
        <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jQuery/jquery-1.11.0.min.js"></script>
        <script src="script.js"></script>
    </body>
    </html>`;

    module.exports = {
    html: html,
    caseHTML: function(caseNum, user){
        if(caseNum < 0 && caseNum > cases.length){
            return 404;
        }

        var drop = new Set();
        for(var i = 0;i < cases[caseNum].drop.length ;i++){
            drop.add(cases[i].drop);
        }
        return `<!DOCTYPE html>
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
                <div class="outer">
                    <div id="grad">
                        <div id="liveDrop">
                        </div>
                    </div>
                </div>
                <div id="casefield">       
                    <div id="caseName">
                        <span style="line-height: -40px;" align="center">` + cases[caseNum].name +`</span>
                    </div>
                        <div id="arrow" align="center">
                            <img src="res/other/downarrow.png" class="dAr">
                            <img src="res/other/uparrow.png" class="uAr" style="width: 64px;" height="64px">
                        </div>
                    <div>
                        <div valign="middle" id="carusel">
                                <img class="caseimg" height="200px" src="res/cases/case0.png">       
                        </div>   
                    </div>
                    <div>
                        <div align="center" height="40px">
                            <input id="openCaseButton" type="button" value="Открыть за ` + cases[caseNum].cost + `р!">
                        </div>
                    </div>   
                </div>
                <div class="caseFooter">
                    <div class="canDrop">
                        Из кейса падает:
                    </div>
                    <div class="canDropImg">` + 
                     +`
                    </div>
                </div>  
            </article>
            <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jQuery/jquery-1.11.0.min.js"></script>
            <script src="case.js"></script>
        </body>
        </html>`
    }
}