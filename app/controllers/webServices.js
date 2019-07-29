// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var xhr = require("/networkManager");

xhr.callback(
    function(e) {
        Ti.API.info(this.responseText);
        alert('success');
    },
    function(e) {
        Ti.API.info(e.error + " : \n"+ this.responseText);
        alert('error: \n' +JSON.parse(this.responseText).errorMessages);
    },
    5000 // milliseconds
);


//xhr.get();


function login(e){
    xhr.post({
        email: $.txtfEmail.value,
        password: $.txtfPassword.value
    });
}
