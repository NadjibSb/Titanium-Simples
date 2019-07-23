var navManager = require("/navigationManager");
navManager.initialize($.navWin);

function navigateToListView(e){
    navManager.openWindow(Alloy.createController("listViewWindow").getView());
}



$.navWin.open();
