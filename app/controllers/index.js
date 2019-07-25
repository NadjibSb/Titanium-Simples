var navManager = require("/navigationManager");
navManager.initialize($.navWin);

function navigateToListView(e){
    navManager.openWindow(Alloy.createController("listViewWindow").getView());
}

function navigateToGenerateBtn(e){
    navManager.openWindow(Alloy.createController("/generateBtnWindow").getView());
}

function navigateToproperties(e){
    navManager.openWindow(Alloy.createController('/properties').getView());
}


$.navWin.open();
