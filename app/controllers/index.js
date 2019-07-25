var navManager = require("/navigationManager");
navManager.initialize($.navWin);

$.navWin.open();

function navigateToListView(e){
    navManager.openWindow("listViewWindow");
}

function navigateToGenerateBtn(e){
    navManager.openWindow("/generateBtnWindow");
}

function navigateToproperties(e){
    navManager.openWindow("/properties");
}

function navigateToWebServices(e){
    navManager.openWindow('/webServices');
}
