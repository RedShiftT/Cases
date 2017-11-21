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
    var n = 3900 + rand(-50, 50);
    $("#carusel").html(" ");
    for(var i = 0; i < arr.length; i++){
        $("#carusel").append('<img class="drop" width="180px" height="180px" style="left: ' + 10 * i +'px;" src="res/coins/'+arr[i]+'.png">');
    }
    $('#arrow').css('display', '')
    $("#carusel img").animate({left: "-="+n}, 5000);
    // $("#carusel img").animate({left: "-="+n}, {duration: 5000, specialEasing: { left: "ease-in" }}); 
}

var liveDrop = [200, 1000, 1000, 100, 5, 50, 250, 500, 100, 1];

