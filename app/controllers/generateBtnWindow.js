// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

for (var i = 0; i < 10; i++) {
    var btn = Ti.UI.createButton({
        title:"Button "+i
    });

    (function(ii){
        btn.addEventListener('click',function(){
            alert(ii+"");
        });
    })(i);

    $.btnContainer.add(btn);
}
