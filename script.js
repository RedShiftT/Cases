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


function openCase(casik) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:591/getCase", true);
    xhr.onreadystatechange = function() {
        if(this.readyState == this.DONE){
            if(this.status != 200){
                console.log("Ошибка: " + this.status)
            } else {
            }
        }
    };
    xhr.send();

    $("article").html('<div class="dropCase"><h1>Кейс</h1><input type="button"><div>');
}