// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.tab1.addEventListener("selected",(e)=>{
    $.txtfData.value = "";
});

function storeData(e){
    let data = $.txtfData.value;
    Ti.App.properties.setString("myData",data);
    $.tabGroup.setActiveTab($.tab2);
}

function retreiveData(e){
    let data = Ti.App.properties.getString("myData","default");
    $.lblDataDisplay.setText(data);
}

function clearData(e){
    Ti.App.properties.removeProperty("myData");
    $.txtfData.value = "";
    retreiveData();
}
