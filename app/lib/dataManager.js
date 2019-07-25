exports.getLocalData = function(){
    return Ti.App.properties.getString("myData","Default");
}

exports.setLocalData = function(data){
    return Ti.App.properties.setString("myData",data);
}

exports.removeLocalData = function(){
    Ti.App.properties.removeProperty("myData");
}
