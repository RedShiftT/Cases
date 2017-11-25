$('#submit').on('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    
    var userdata = {
        username: $('#username').val(),
        pass: $('#pass').val()
    }

    console.log(userdata);

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(userdata));
    xhr.onload = function() {
        alert(this.responseText);
    }
});