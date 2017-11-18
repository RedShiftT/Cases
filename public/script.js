$('#openCaseButton').click(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:591/case/?case=0");
    xhr.onreadystatechange = function() {
        if(this.readyState == this.DONE){
            if (this.status != 200){
                console.warn("Ошибка " + this.status);
            }else{
                var n = this.response.split(" ");
                console.log(n);
                lotto(n);
            }
        }
    }
    xhr.send();
});
function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lotto(arr) {
    var n = 6900 + rand(-50, 50);
    $("#carusel").html(" ");
    $("#carusel").css("left", "0px");
    $("#carusel").css("left", "7000");
    for(var i = 0; i < arr.length; i++){
        $("#carusel").append('<img width="100px" height="100px" src="res/coins/'+arr[i]+'.png">')
    }
    $("#carusel").animate({left: "-="+n}, 10000);
}