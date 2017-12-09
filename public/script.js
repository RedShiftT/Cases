$('#submit').on('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:591/login');
    
    var userdata = {
        username: $('#username').val(),
        pass: $('#pass').val()
    }
    
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(userdata));
    xhr.onload = function() {
        alert(this.responseText);
    }
});

$('#sprosit').on('click',() => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:591/check');
    xhr.send();
    xhr.onload = function() {
        alert(this.responseText);
    }
});