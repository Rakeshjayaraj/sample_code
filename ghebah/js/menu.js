var show = false;
function toggle()
{

    if (show)
    {
        $("#main_menu ul #mainCourse").empty();
        $("#main_menu_items").empty();
    }
    else
    {
        document.getElementById("mainCourse").style.visibility="visible";
        $("#main_menu").find("ul #mainCourse").append('<li><a class="filter" onclick="print(9)" data-filter=".category-5">Chicken</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(5)"  data-filter=".category-6">Prawns</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(10)" data-filter=".category-7">Lamm</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(11)" data-filter=".category-8">Vegetarisch</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(12)" data-filter=".category-9">Ente</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(8)" data-filter=".category-10">Fisch</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(7)" data-filter=".category-11">Nudeln</a> </li>');
        $("#main_menu ul #mainCourse").append('<li><a class="filter"  onclick="print(6)" data-filter=".category-12">Brot</a> </li>');
        $("#main_menu ul #mainCourse").html($("#mainCourse").html());
    }
    show = !show;
}

function toggleOther(num)
{
    //$("#main_menu ul #mainCourse").empty();
    // $("#main_menu_items").empty();
    print(num);
    show = false;
}
function print(num)
{

    $("#main_menu_items").empty();
    $("#main_menu ul #mainCourse").empty();
    //$("#main_menu ul #mainCourse").insertAfter('');
    switch (num)
    {

        case 1:
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">500  Singaporesling</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gin Kirchlikör, zitronensaft, granadine,, mineral wasser</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">501 Caipirinha</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Cachaca, brauner, zucker, Limettenstücke</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">498 Mojito</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer & brauner Rum, brauner zucker, limetten-stücke, frische minza & soda</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">508 Sex on The Beach</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Wodka, firschlikor, Ananas, orange und zitronensaft, Erderrsirup</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">499 Flamingo</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer Rum, cherry, Bandy, Grenadine, zitronen & orangesaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">491 My Dream</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Wodka, Xuxu, Erdbeer & Vanillesup, Zitronen-saft. Lemettensaft, Maracujanektar</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">502 Hurrican</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer & brauner Rum, Maracujasirup, Limettensaft, zitronen, Ananas & Orangensaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">493 Peach Lady</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Wodka, Blue Curacao, Rum, Ananas-saft, Kokosirup, Sahne</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">506 Mango Coloda</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer & brauner Rum, Kokos & Mango sirup, Ananassaft, Mangonektar, Sahne</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">513 Swimming Pool</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Wodka, Blue Curacao, Rum, Ananas saft, Kokosirup, Sahne</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">490 Gigolo</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gim, Pfirschlikör, Zitronen, & Orangensaft, Grenadinesirup</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">505 Mai Tai</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€5.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer & brauner Rum, Triple Sec, Apricot Brandy, Mandelsirup, Zitronen & Ananassaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">497  Long Island Ice Tea</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€5.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Wodka, Gin, Weißer Rum, Triple Sec,zitronensaft, Coca cola</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">496 Zombie</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€5.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weißer & brauner Rum, Triple Sec,Kirschlikör, Grenadine, Orangen & Zitronensaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">522  Pretty Woman</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Erderrsirup, Lemettensaft, zitronen, Ananassaft & Pfirsichtsaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">523 Strawberry Kiss</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Erderrsirup, Kokosirup, Sahne</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">524 Tropical Monsoon</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Vanille & Melonensirup, Zitronen, Pfirisch & Ananasaft</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">525 Mosquito</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Frische Minze, browner, zucker, limetten und tonic water</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">527 Baby Love</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Coconut cream, Bananennektar- Ananassaft, Sahne</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">507  Virgin Caipirinha</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Brauner zucker Limettenstücke, Ginger alle</span>\n' +
                '</div>');
            break;
        case 2:
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">6  Mango Indiana</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichte vegetarische Kokoscreme Suppe mit exotischen  Alphanso- Mangos , Limettenblättern und Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">5  Krabi Coco</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichte und erfrischende südthailändische Hühnersuppe mit Kokosmilch,Limettenblättern,Champignons, Zitronengras und Ingwer</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">>4  Chat Pata</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Cremige und aromatische balinesische SauerScharf- Suppe mit Großgarnelen, Glasnudeln und Koriander</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">3  Macao Won- Tan (Non veg)</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Aromatische und cremige Suppe mit 12 verschiedenen kräutern und Gewürzen, garniert mit gebackenen  Won Tans mit Shrimps und Hähnchenfleisch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">3  Macao Won- Tan (Veg)</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Aromatische und cremige Suppe mit 12 verschiedenen kräutern und Gewürzen, garniert mit gebackenen Won Tans vegetarisch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">1  Tomato Basil Flower</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.00</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Eine delikate  Mischung aus frischen Tomaten,thailändischen und indischen Gewürzen sowie kokosmilch, garniert mit Chili Croutons</span>\n' +
                '</div>');
            break;
        case 3:
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">10  Crisp Summer Rolls</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Goldbraun frittierte Frühlingsrollen mit Einer Füllung von exotisch gewürztem Gemüse</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">11  Malaysian Samosas</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Frittierte Teigtaschen mit einer Füllung aus Kartoffeln, Glasnudeln,Cashewnüssen, Rosinen und knackigem Gemüse nach Malaysischer Art</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">12  Won-Tans *vegetarisch*</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Knusprige Teigtaschen mit Gemüse und  exotischen Kräutern gefül</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">13  Won-Tans *non Vegetarisch*</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Teigtaschen gefüllt mit Hähnchenfleisch,Shrimps und Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">15  Cheese Finger</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Hausegemacte marienert  käse stäbschen</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">16  IndoSatay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€5.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Hühnerfiletspieße mariniert in thailäadischen kräutern,Gewürzen und kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">17  Penang Starters</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Eine köstliche Zusammenstellung aus unseren beliebtesten warmen Vorspeisen</span>\n' +
                '</div>');
            break;
        case 4:
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">97  Singapore Dream</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€4.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gebratene Ananas mit exotischen lychees und "ALPHANSO" Mangos aus südindien, verfeinert mit Hoing, Cashewnüssen und Kokos</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">98 Gulai Heat</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€3.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gebratene Banane mit exotischen lychees und "ALPHANSO" Mangos aus südindien, verfeinert mit Hoing, Cashewnüssen und Kokos</span>\n' +
                '</div>');
            break;
        case 5:
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">80 Prawns Lolotoi  </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Marinated giant noodles in a spicy cashew peanut sauce on crunchy, fresh vegetables refined with exotic lychees</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">81  Chainge Prawns </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Frische Riesengarnelen in einem leicht pikanten Penang-Curry mit Thai-Basilikum und Lemonkaffir-blättern und abgeschmeckt mit einem Schuss Kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">82  Yambi Prawns</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Riesengarnelen gegart in einer südthailändischen roten Currysauce, verfeinert mit burmesischen Kräutern und Gewürzen</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">83 Prawns Manila</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Edle Riesengarnelen in einer speziellen hausgemachten grünen Thai-Currysauce mit frischem Gemüse, Kokosmilch und Thai-Basilikum abgeschmeckt</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">84 Ghebah Prawns </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gebratene Riesengarnelen auf knackigem Gemüse, serviert in einer mit Honig und speziellen Singapori-Gewürzen abgerundeten dunklen Austern-Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">85 Nangha Prawns </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leicht angebratene und  anschließend in  köstlichem Massaman-Curry fertig gegarte Riesengarnelen mit Kartoffeln, Kokosmilch und knackigen Erdnüssen</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-6 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">85 Nangha Prawns </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€14.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leicht angebratene und  anschließend in  köstlichem Massaman-Curry fertig gegarte Riesengarnelen mit Kartoffeln, Kokosmilch und knackigen Erdnüssen</span>\n' +
                '</div>');
            break;

        case 6:
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">100 Naan </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€1.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Fladenbrot mit Sesam verfeinert</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">101 Butter Naam </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€2.10</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Fladenbrot mit Butter und Sesam verfeinert</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">102 Garlic Naam </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€2.10</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Fladenbrot mit indischer Knoblauchbutter und Sesam</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">103 Roti </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€1.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Fladenbrot aus Vollkornmehl</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">104 Paneer Naam </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€2.10</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Fladenbrot mit hausgemachtem indischen Rahmkäse</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-12 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">105 Pudina Paratha </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€2.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Leichtes knuspriges Vollkorn-Fladenbrot mit hausgemachter indischer Butter, aromatisiert mit frischer Minze</span>\n' +
                '</div>');
            break;

        case 7:
            $("#main_menu_items").append('<div class="mix category-11 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">90 Noodle Mongolei</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€9.10</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weiche Reisnudeln mit Frühlingszwiebeln, Koriander, Ingwer, Parrika, Cashewnüssen und hausgemachtem Rahmkäse, abgeschmeckt mit Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-11 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">91  NUDELN SAIGON</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€9.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weiche Reisndeln mit zartem  Lammfleisch verfeinert mit Koriander, Ingwer, Paprika und frischem Ei, abgerudet  mit Chili auf  frischem Gemüse</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-11 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">92 Ente Nudeln</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weiche Reisndeln mit zartem  Lammfleisch verfeinert mit Koriander, Ingwer, Paprika und frischem Ei, abgerudet  mit Chili auf  frischem Gemüse</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-11 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">93  Noodles Yangon</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Weiche Reisndeln mit  frischen  Riesengarnelen, abgestimmt mit Koriander, Chili, frischem Ei und knackigem Gemüse</span>\n' +
                '</div>');
            break;
        case 8:
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">70 Bali Fish</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Rotbarschfiletstücke in roter balinesischer Curry-sauce, gegart in Kokomilch,   garniert mit frischem Koriander</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">71 Fish Taytay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Knuspriges, mariniertes Rotbarschfilet in einer pikanten Cashew-Erdussauce auf knackigem Gemüse,\n' +
                'verfeinert mit exotischen Lychees</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">72 Fish Luang</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Eingelegtes Rotbarschfilet auf knackigem Gemüse, serviert in einer mit Honig und speziellen Singapori-Gewürzen abgerindeten dunklen Austern-Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">73 Fish Khlong</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Eingelegtes  zartes Rotbarschfilet in einem leicht pikanten Penang-Curry mit Thai-Basilikum und Lemonkaffirblättern, abgerundeten mit einem Schuss Kokomilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">74 Fish Ratschaburi</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Feinstes Rotbarschfilet, langsam gegart mit exotischem Gemüse und Kokomilch in einer grünen Thaicurry-Sauce, aromatisiert mit Lemonkaffiblättern und Thai-Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-10 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">75 Fish Mamunju</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€11.20</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gebratenes, zartes Rotbarschfilet in köstlichem Massaman-Curry mit Kartoffeln, Kokomilch und Erdnüssen</span>\n' +
                '</div>');

            break;

        case 9:
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">40 Chicken Mango</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€9.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Saftiges Hühnerbrustfilet in einer fruchtigen Mangosauce mit malaysischen Gewürzen, Lemonkaffirblättern, Mandeln und Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">41 Chicken Taipei</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Mariniertes  Hühnerbrustfillet mit verschiedenem Gemüse und Lychees in einer eotischen Erdnüsssauce, abgeschmeckt mit rotem curry</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">42  Chicken Penang</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Zartes Hühnerbrustucke in einem leicht pikanten Penang-Curry mit Thai-Basilikum und Lemon- kaffirblättern, abgeschmeckt mit einem  Schuss kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">43 Chicken Thaisiena</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Hühnerfiletstücke in einer speziellen hausgemachten grünen Thai-Curry-Sauce mit frischen Gemüse, Kokosmilch und Thai-Basilikum abgeschmeckt</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">44 Chicken Malang</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">In pikanten Singapori-Gewürzen eingelegtes Hühnerfilet mit knackigem Gemüse, serviert in einer mit Hönig abgerundeten dunklen Austern-Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">45 Chicken Thai</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Klassisches, thäilandisches rotes Hühnercurry mit Auberginen, Babymais, Lemonkaffirblättern, Kokosmilch und Thai-Basilikum abgerundet</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">46 Chicken Karma</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Zartes Hühnerfilet in einer traumhaften   Sauce aus Cashewnüssen, Mandeln, Kokoscreme, geriebenem Rahmkäse, abgeschmeckt mit Thai-Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">47 Chicken Sungai</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Mariniertes feinstes Hühnerfilet in köstlichem Massaman-Curry mit Kartofeln, Kokosmilch und Erdnüssen</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-5 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">48 Indo Satay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Hühnerfiletspieße mariniert in thailändischen Gewürzen und Kokosmilch, serviert in einer hausgemachten Erdnusssauce</span>\n' +
                '</div>');

            break;

        case 10:
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">60  Lamm Surabay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Feinstes neuseeländische Lammfliesch in einem liecht pikanten Penang-Curry mit Thai-Basilikum und Lemonkaffirblättern, abgeschmeckt mit einem Schuss Kokomilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">61 Lamm Adaman</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Mariniertes Lammfleisch mit verschiedenem Gemüse und Lychees in einer exotischen Erdnussauce, abgeschmeckt mit rotem Curry</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">62 Lamm Mandarin</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Saftige  Lammfleischstücke in einer fruchtigen Mangosauce mit malaysichen Gewürzen, Limonenblättern und Mandeln</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">63  Lamm Kambodscha</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">In pikanten Singapori- Gewürzen eingelegtes junges Lammfleisch mit knackigem Gemüse, serviert in einer mit Honig abgerundeten dunnkeln Austern-Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">64  Lamm Mayamara </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Lammfleischstücke in einer speziellen grünen Thailänddischen Currysauce mit frichem Gemüse,Limonenblättern und Kokomilsch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">65  Lamm Thaisiana</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Klassisches, Thailänddischen rotes Lambcurry mit Auberginen, Babymais, Lemonkaffirblättern , Kokomilsch und Thai-Basilikum abgerundet</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">66 Lamb Medan </a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Zartes Lammfleisch in einer traumhaffen Sauce aus Kokosraspeln, scharf gewüzt nach süd-asiatischer Art, abgeschmeckt mit Limonen-blättern und Thai-Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-7 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">67 Lamb Mataram</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€10.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Mariniertes feinstes Lammfleisch in köstlichem Massaman-Curry mit Kartoffeln, Kokomilsch Und knackigen Erdüssen</span>\n' +
                '</div>');
            break;

        case 11:
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">30 Barisal</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.40</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gemischte Linsen, langsam über Nacht im Tandoori-Lehmofen geschmort und abgeschmeckt nach Ghebah-Art mit zwiebeln, Tomaten und koriander</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">31 Veg. Manchurian</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">knusprige Bällchen  aus  frischen Gemüse und exotischen Gewürzen, in pikanter chinesischer Süß-Sauersauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">32 Cheese Penang</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Hausgemachter Rahmkäse und verschiedenes Gemüse in einem leckeren Penang -Curry mit Thai-Basilikum und Lemonkaffirblättern, abgeschmeckt mit einem Schuss Kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">33 Vegetable Sing - sing</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Verschiedene knackige Gemüsesorten in leicht aromatischer grüner Currysauce mit gehackten Mandeln, Cashewnüssen und Thai-Basilikum</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">34 Cheese Bhutan</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Frischer hausgemachter Rahmkäse in pikanter, roter Currysauce mit Broccoli, Paprika, Lemonkaffirblättern, Thai-Basilikum und Kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">35 Dolay Mandolay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">knusprige Bällchen aus Kartoffeln und Gemüse in einer cremigen Indo-Chinasauce, verfeinert mit Hönig, garniert  mit  geriebenem  Rahmkäse</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-8 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">36 Veg. Tutong</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€8.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Verschiedene frische  Gemüsesorten in köstlichem Massaman-Curry mit Kartoffeln, Kokosmilch und Erdnüssen</span>\n' +
                '</div>');
            break;

        case 12:
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">50 Sumba Duck</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Knuspriges mariniertes Entenbrustfilet in einer pikanten Cashew-Erdnsssauce auf knackigem, frischem Gemüse  verfeinert mit exotischen Lychees</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">51 Bangkok Duck</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Knusprig  gebratenes  Entenbrustfilet  fertig gegart in einer südthailändischen roten Currysauce, verfeinert mit burmesischen Kräutern und Gewürzen<span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">52 Tai po Duck</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Gebratene, saftige Entenbrust  in einer  Kokoscreme-Currysauce mit  frischem Thai-Gemüse, garniert mit Lemonkaffirblättern</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">53 Duck Dumay</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Paniertes, krosses  Entenbrustfilet auf knackigem Gemüse, serviert in einer mit Honig und speziellen Singapori-Gewürzen abgerundeten Austern-Sojasauce</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">54 Duck Sorong</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€12.90</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Knusprige Entenbrust und verschiedenes Gemüse in einem leckeren Penang-Cirry mit Thai-Basilikum und LemonKaffirblättern, abgeschmeckt mit einem Schuss Kokosmilch</span>\n' +
                '</div>');
            $("#main_menu_items").append('<div class="mix category-9 menu-restaurant" data-myorder="2">\n' +
                '<span class="clearfix">\n' +
                '<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">55 Kendari Duck</a>\n' +
                '<span style="left: 166px; right: 44px;" class="menu-line"></span>\n' +
                '<span class="menu-price">€13.50</span>\n' +
                '</span>\n' +
                '<span class="menu-subtitle">Mariniertes zartes Entenbrustfilet in köstlichem Massaman-Curry mit kartoffeln, Kokosmilch und knackigen Erdnüssen</span>\n' +
                '</div>');
            break;

        default:

            break;
    }
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){
        window.location.hash = hash;
    });

    $("main_menu_items").html($("#main_menu_items").html());

}