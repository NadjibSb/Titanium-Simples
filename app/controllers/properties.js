// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var dataManager = require("/dataManager")
var args = $.args;

$.tab1.addEventListener("selected",(e)=>{
    $.txtfData.value = "";
});

function storeData(e){
    var data = $.txtfData.value;
    dataManager.setLocalData(data);
    $.tabGroup.setActiveTab($.tab2);
}

function retreiveData(e){
    var data = dataManager.getLocalData();
    $.lblDataDisplay.setText(data);
}

function clearData(e){
    dataManager.removeLocalData();
    $.txtfData.value = "";
    retreiveData();
}
