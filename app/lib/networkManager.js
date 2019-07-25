var url_get = 'https://www.appcelerator.com';
var url_post = 'http://pmoi.dzmob.com/api/login';

var callback ={}

exports.callback = (_onload,_onerror,_timeout)=>{
    callback.onload = _onload;
    callback.onerror = _onerror;
    callback.timeout = _timeout;
}

exports.get = ()=>{
    var xhr = Ti.Network.createHTTPClient(callback);
    xhr.open('GET', url_get);
    xhr.send();
}


exports.post = (body)=>{
    var xhr = Ti.Network.createHTTPClient(callback);
    xhr.open('POST', url_post);
    xhr.send(body);
}
