function getCases(){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:591/getCases", true);
        xhr.onreadystatechange = function() {
            if(this.readyState == this.DONE){
                if(this.status != 200){
                    console.log("Ошибка: " + this.status)
                } else { 
                    $("#caseField").append(this.responseText);
                }
            }
        };
    xhr.send();
}
getCases();

function getCase(box) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:591/getCase?case=" + box, true);
    xhr.onreadystatechange = function() {
        if(this.readyState == this.DONE){
            if(this.status != 200){
                console.log("Ошибка: " + this.status)
            } else {
            }
        }
    };
xhr.send();
}