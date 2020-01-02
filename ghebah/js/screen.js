$(document).ready(function() {
    if ((screen.width>=480)) {
        $("#wrap-ul").append(' <div id="topd">\n' +
            '                <div class="hero-text">\n' +
            '                    <h2 style="font-size: 28px">Ghebah </h2>\n' +
            '                    <p>Singapore Restaurant</p>\n' +
            '                    <a href="index.php" style="color: #0a12a4">Hier Klicken/Click here</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div id="bottomd">\n' +
            '                <div class="hero-text">\n' +
            '                    <h2 style="font-size: 28px">Goa-pak </h2>\n' +
            '                    <p>Indische Restaurant</p>\n' +
            '                    <a href="http://goahof.de/" style="color: #0a12a4">Hier Klicken/Click here</a>\n' +
            '                </div>\n' +
            '            </div>');
        // $("link[rel=stylesheet]:not(:first)").attr({href : "style2.css"});
        $("#wrap-ul").html( $("#wrap-ul").html());

    }
    else {
        $("#wrap-ul").append('<div id="top">\n' +
            '           <div class="hero-text">\n' +
            '               <h2 style="font-size: 22px">Ghebah</h2>\n' +
            '               <p>Singapore Restaurant</p>\n' +
            '               <a href="index.php" style="color: #0a12a4">Hier Klicken/Click here</a>\n' +
            '           </div>\n' +
            '       </div>\n' +
            '        <div id="bottom">\n' +
            '            <div class="hero-text">\n' +
            '                <h2 style="font-size: 22px">Goa-Pak</h2>\n' +
            '                <p>Indische Restaurant</p>\n' +
            '                <a href="http://goahof.de/" style="color: #0a12a4">Hier Klicken/Click here</a>\n' +
            '            </div>\n' +
            '        </div>');

        $("#wrap-ul").html( $("#wrap-ul").html());
    }
});