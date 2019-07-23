var navWin;

exports.initialize = function(_navWin){
    navWin = _navWin;
}

exports.openWindow = function(win){
    navWin.openWindow(win);
}
