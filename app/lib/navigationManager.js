var navWin;

exports.initialize = function(_navWin){
    navWin = _navWin;
}

exports.openWindow = function(controllerName){
    navWin.openWindow(Alloy.createController(controllerName).getView());
}
