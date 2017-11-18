$('#openCaseButton').on('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "localhost:591/opCase");
    xhr.onreadystatechange = function() {
    if (this.readyState != 200){
        console.warn("Ошибка " + this.status);
    }else{
        console.log(this.response);
    }
}
});
