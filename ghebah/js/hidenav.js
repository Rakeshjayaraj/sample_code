$(function(){
    var navMain = $("#myMenu");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});
