<?php
require_once("dbmanager.php");
require_once("businessMenu.php");
$db_handle = new DBManager();
$query ="SELECT * FROM posts";
$result = $db_handle->runQuery($query);
$query ="SELECT * FROM menu_item";
$resultMenuItem = $db_handle->runQuery($query);

$businessMenu = new BusinessMenu();
$dayNum = $businessMenu->getCurrentDayID();

$query ="SELECT * FROM days_menu where dayID='$dayNum' order by menuNum";
$daysMenuItem = $db_handle->runQuery($query);

$DayEng = $businessMenu->getDayEng($dayNum);
$DayDeu = $businessMenu->getDayDeu($dayNum);
$Suppe  = $businessMenu->getSuppe($dayNum);
?>
<!DOCTYPE html>
<!-- Microdata markup added by Google Structured Data Markup Helper. -->
<html lang="de"><head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Ghebah</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Satisfy|Bree+Serif|Candal|PT+Sans">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
<!-- banner -->

<span itemscope itemtype="http://schema.org/Restaurant">
    <section id="banner">
    <div class="bg-color">
        <div class="container">
           <div class="row">
                <div class="hero-text">
                    <h2 itemprop="name" class="logo-name">Ghebah</h2>
                    <p>
<span itemprop="servesCuisine">Singapore</span> Restaurant</p>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- / banner -->

<!--== 4. Navigation -->
<div class="container">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="background-color: maroon">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img itemprop="image" id="logo" src="img/logo.gif" class="logo"/></a>
            </div>
            <div id="myMenu" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#restaurant">Restaurant</a></li>
                    <li><a href="#bar">Cocktails & Bar</a></li>
                    <li><a itemprop="menu" href="#menu-list">Menü</a></li>
                    <li ><a id="blink" href="#business">Mittagskarte</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                    <li><a href="#review">Bewertungen</a></li>
                    <li><a href="https://www.facebook.com/ghebahhof/" target="_blank"><img src="img/ficon.png" style="height: 28px; width: 28px;"></a> </li>
                    <li><a href="https://plus.google.com/u/0/110804900155872700646" target="_blank"><img src="img/gogle.png" style="height: 28px; width: 28px;"></a> </li>
                    <li> <a href="index-en.php"><img src="img/en.png" /></a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!--about-->
    <section id="restaurant" class="section-padding" style="background-color: ##fcf8e3 ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center marb-35">
                    <h1 class="header-h">Köstliche Reise</h1>
                    <p>Die küche Singapurs zeichnet sich duch die kulturellen Einflüsse der vertretenen
                        Ethnien aus. Neben den traditionellen Rezepten entstehen immer neue Abwandlungen.</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="col-md-6 col-sm-6">
                        <div class="about-info">
                            <h2 class="heading">Spezialitäten</h2>
                           <p>Im Restaurant Ghebah erwartet sie eine umfangreiche Auswahl an versciedenen
                               spezialitäten, die Sie auf eine kulturelle Reise nach Singapore, Malaysien,
                               Indonesien und Thailand entführen. Der Grundprinzip im <strong>Restaurant
                                   Ghebah</strong> ist die Beibehaltung die echter Asiatischer Füsion küche.
                               Hierdurch werden die Gerichte wie  <strong> Lamb kambodsha<sup>Indo-Malay</sup>,
                                   Fish Mamunju<sup>Indo-Singapore</sup>,Chicken Penang<sup>Indo-Thai</sup>,
                                   Nudeln kung Po<sup>Indo-Singapore</sup></strong> usw entstanden, die mit der
                                  zeit als Bestandteile der umfangreichen Reihe der Traditional gerichte gelten.
                                 Gerne laden wir sie ein, das<strong> Restaurant Ghebah</strong>, Friedensstraße 2 zu besuchen.
                            </p>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <img src="img/gfood4.png" alt="" class="img-responsive">
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </section>


    <!--/about-->
    <!-- Cocktails & Bar -->
    <section id="bar">
        <div class="bg-color" class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-center" style="padding:60px;">
                        <h1 class="header-h" style="color: #5bc0de">Cocktails Bar</h1>
                        <h3>Wir versuchen immer, Ihre Zeit etwas Besonderes zu machen.</h3>
                    </div>
                    <div class="col-md-12" style="padding-bottom:60px;">
                        <div class="item active left">
                            <div class="col-md-6 col-sm-6 left-images">
                                <img src="img/bar3.png" class="img-responsive">
                            </div>
                            <div class="col-md-5 details-text">
                                <div class="content-holder">
                                    <h2>Freudige Party</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/cocktail bar -->
    <!-- contact -->
    <section id="contact" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="header-h">Buchen Sie Ihren Tisch</h1>
                    <!-- rest4 -->
                </div>
            </div>
            <div class="row msg-row">
                <div class="col-md-5 col-sm-5 mr-15">
                    <div class="media-2">
                        <div class="media-left">
                            <div class="contact-phone bg-1 text-center"><span class="phone-in-talk fa fa-phone"></span></div>
                        </div>
                        <div class="media-body">
                            <h4 class="dark-blue regular">Die Tel: </h4>
                            <span itemprop="telephone"><p class="header-p" style="font-weight: bold">09281/8184331</p>
                            <p class="header-p" style="font-weight: bold">09281/8187778</p></span>
                        </div>
                    </div>
                    <div class="media-2">
                        <div class="media-left">
                            <div class="contact-email bg-14 text-center"><span class="hour-icon fa fa-clock-o"></span></div>
                        </div>
                        <div class="media-body timetable">
                            <h4 class="dark-blue regular">Öffnungszeiten</h4>
                            <p class="header-p" style="font-weight: bold">
                            <span itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification">
                            <span itemprop="dayOfWeek" itemscope itemtype="http://schema.org/DayOfWeek">
                            <span itemprop="name">Montag - Samtag</span></span><br/>
                             <button class="button-time">
                            <meta itemprop="opens" content="11:00 - 15:00 and  17:00-23:00"> 11:00 - 15:00  und 17:00-23:00</button></span><br/>
                            <span itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification">
                            <span itemprop="dayOfWeek" itemscope itemtype="http://schema.org/DayOfWeek">
                            <span itemprop="name">Sonntag und Friertag</span> </span><br/>
                             <button class="button-time">
                            <meta itemprop="opens" content=" 11:00-22:00"> 11:00 -22:00</button></span><br/></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-sm-7">
                    <form id="formcontact" action="" method="post" role="form" class="contactForm">
                        <div id="sendmessage">Your booking request has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div class="col-md-6 col-sm-6 contact-form pad-form">
                            <div class="form-group label-floating is-empty">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validation"></div>
                            </div>

                        </div>
                        <div class="col-md-6 col-sm-6 contact-form">
                            <div class="form-group">
                                <input type="date" class="form-control label-floating is-empty" name="date" id="date" placeholder="Date" data-rule="required" data-msg="This field is required" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 contact-form pad-form">
                            <div class="form-group">
                                <input type="email" class="form-control label-floating is-empty" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 contact-form">
                            <div class="form-group">
                                <input type="time" class="form-control label-floating is-empty" name="time" id="time" placeholder="Time" data-rule="required" data-msg="This field is required" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 contact-form">
                            <div class="form-group">
                                <input type="text" class="form-control label-floating is-empty" name="phone" id="phone" placeholder="Phone" data-rule="required" data-msg="This field is required" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 contact-form">
                            <div class="form-group">
                                <input type="text" class="form-control label-floating is-empty" name="people" id="people" placeholder="People" data-rule="required" data-msg="This field is required" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="col-md-12 contact-form">
                            <div class="form-group label-floating is-empty">
                                <textarea class="form-control" name="message" rows="5" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validation"></div>
                            </div>

                        </div>
                        <div class="col-md-12 btnpad">
                            <div class="contacts-btn-pad">
                                <button class="contacts-btn">Book Table</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- / contact -->
    <!-- menu -->
   <section id="menu-list" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center marb-35">
                    <h1 class="header-h">Menüliste</h1>
                    <p class="header-p">Vom Starter zum Hauptgericht und schließe dein Essen mit Vorspeise ab.
                        Genießen Sie etwas Bier, spiritosen und  nicht-alkoholischen Getränk können Sie alle Elemente hier genießen</p>
                </div>
                <div id="main_menu" class="col-md-12  text-center gallery-trigger">
                    <ul>

                        <li><a class="filter" onclick='return toggleOther(1)'>Cocktails</a></li>
                        <li><a class="filter" onclick='return toggleOther(2)'>Suppe</a></li>
                        <li><a class="filter" onclick='return toggleOther(3)'>Vorspeisen</a></li>
                        <li><a class="filter" onclick='return toggle()'>Main Course</a></li>
                        <li><a class="filter" onclick='return toggleOther(4)'>Dessert</a></li>
                        <div id="mainCourse"></div>
                    </ul>
                </div>
                 <div id="main_menu_items"></div>
                </div>
            </div>
    </section>
    <!--/ menu -->
    <!-- business menu -->
 <section id="business" class="section-padding">
        <div class="container container-menu">
            <div class="col-md-12 text-center marb-35">
            <h1 class="header-h"> Mittagskarte : <?php echo $DayDeu ?></h1>
            <h4  style="color: #1aff3f">11:00 bis 15:00 (Montag bis Freitag)</h4>
            <h4  style="color: #1aff3f">Alle gerichte werden mit Basmatireis, Salat und <?php echo $Suppe ?> Suppe serviert</h4>
            </div>
            <div class="row">
                <?php if(!empty($daysMenuItem)):
                    $i=0;
                    foreach ($daysMenuItem as $item):
                        ?>
                        <div class="mix category-<?php echo $item["dayID"]; ?> menu-restaurant" data-myorder="2">
                    <span class="clearfix">
                    <a class="menu-title" data-meal-img="img/res01.jpg"><?php echo $item["menuNum"].' '.$item["name"]; ?></a>
                    <span style="left: 166px; right: 44px;" class="menu-line"></span>
                    <span class="menu-price">€<?php echo $item["price"]; ?></span>
                  </span>
                            <span class="menu-subtitle-b"><?php echo $item["description"]; ?></span>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <div class="row">
                <div class="col-md-12 text-center marb-35">
                    <h3 class="h4" style="color: #1aff3f">Zu den Tagesmenüs unsere Empfehlung </h3>
                    <!-- here you pull out the items from menu-subtitle -->
                </div>
            </div>
            <div class="row">
                <!--<div class="col-md-12 text-center marb-35">-->
                    <div class="mix category-4 menu-restaurant" data-myorder="2">
                    <span class="clearfix">
                    <a class="menu-title" data-meal-img="img/res01.jpg">Frischer Pfefferminzblättertee</a>
                    <span style="left: 166px; right: 44px;" class="menu-line"></span>
                    <span class="menu-price">€2.90</span>
                  </span>
                        <span class="menu-subtitle-b">Mit Frischen Minze ,Ingwer und Honig</span>
                    </div>
                    <div class="mix category-4 menu-restaurant" data-myorder="2">
                    <span class="clearfix">
                    <a class="menu-title" data-meal-img="img/res01.jpg">Vitaminbombe</a>
                    <span style="left: 166px; right: 44px;" class="menu-line"></span>
                      <span class="menu-price">€2.90</span>
                    </span>
                        <span class="menu-subtitle-b">Erfrischende Limettenschorle aus besten Limetten Frisch gepresst</span>
                    </div>
                    <div class="mix category-4 menu-restaurant" data-myorder="2">
                    <span class="clearfix">
                    <a class="menu-title" data-meal-img="img/res01.jpg">Mango Lassi</a>
                    <span style="left: 166px; right: 44px;" class="menu-line"></span>
                      <span class="menu-price">€3.50</span>
                    </span>
                        <span class="menu-subtitle-b">Unsere Frischer Joghurt Mango Lassi ist 100% Organisch</span>
                    </div>
                    <div class="mix category-4 menu-restaurant" data-myorder="2">
                    <span class="clearfix">
                    <a class="menu-title" data-meal-img="img/res01.jpg">ZitronengrassTee</a>
                    <span style="left: 166px; right: 44px;" class="menu-line"></span>
                      <span class="menu-price">€2.90</span>
                    </span>
                        <span class="menu-subtitle-b">Wohltuende Würzig-Frische Kräuter-Komposition</span>
                    </div>
                    <!-- </div>-->

                 </div>
         </section>
         <!--/ business menu -->


    <!-- review -->
    <section id="review" class="section-padding">

        <div class="container">

            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="header-h">Kundenmeinungen</h1>
                    <p class="header-p">Kundenrezensionen sind tolle Anzeigen für uns. Wir freuen uns auf Ihre Stimme. </p>
                    <button type="button" style="align-self: center"  data-toggle="collapse" class="contacts-btn" data-target="#collapsethis">Eine Bewertung abgeben </button>
                </div>
            </div>

            <!--<form class="collapse collapse-form" id="collapsethis" action="post" style="align-self: center">-->
                <form action="" method="post" id="collapsethis" role="form" class=" collapse collapse-form postForm">
                    <div id="sendRating"></div>
                    <div id="errorRating"></div>
                <div class="col-md-12 contact-form pad-form">
                    <div class="form-group ">
                        <input type="number" name="rating" id="star" class="rating myclass"  data-rule=required" data-msg="This field is required"  data-clearable="remove" data-icon-lib="fa" data-active-icon="fa-star" data-inactive-icon="fa-star-o" data-clearable-icon="fa-trash-o"/>
                        <div class="validation"></div>
                    </div>

                </div>
                <div class="col-md-6 col-sm-6 contact-form pad-form">
                    <div class="form-group ">
                        <input type="text" name="name" class="form-control" id="name" maxlength="20" placeholder="Your Name" data-rule="minlen:3" data-msg="Please enter at least 3 chars" />
                        <div class="validation"></div>
                    </div>

                </div>

                <div class="col-md-6 col-sm-6 contact-form pad-form">
                    <div class="form-group">
                        <input type="text" name="email" class="form-control" id="email" maxlength="30" placeholder="Your Email"  data-rule="email" data-msg="Please enter a valid email" />
                        <div class="validation"></div>
                    </div>

                </div>

                <div class="col-md-12 contact-form">
                    <div class="form-group">
                        <textarea class="form-control" name="message" id="message" rows="2" maxlength="200" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validation"></div>
                    </div>

                </div>
                <div class="col-md-12 btnpad">
                    <div class="contacts-btn-pad">
                        <button class="contacts-btn">Submit</button>
                    </div>
                </div>
                </form>
       
                <?php if(!empty($result)):
                    $i=0;
                    foreach ($result as $post):
                        ?>
                        <div class="post">
                            <h4-post><?php echo $post["name"]; ?></h4-post>
                            <ul-post  data-id = "<?php echo $post['id']; ?>" data-rating ="<?php echo $post["rating"]; ?>">
                                <?php
                                for($i=1; $i<=5; $i++)
                                {
                                    $selected = "";
                                    if(!empty($post["rating"]) && $i<=$post["rating"])
                                    {
                                        $selected = "selected";
                                    }
                                    ?>
                                    <li-post class="<?php echo $selected; ?>">&#9733;</li-post>
                                    <?php
                                }
                                ?>
                            </ul-post>
                            <p><?php echo $post["description"]; ?></p>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </form>
    </section>

    <!-- /review -->

    <!-- footer -->
    <footer class="footer text-center">

        <div class="row">
            <div class="col-md-4 fa-align-left-left">
                <div class="widget">
                    <h4 class="widget-title">Ghebah<br/>Singapore Restaurant</h4>
                    <address><email>Email:
                    <span itemprop="email">info@ghebah.de</span></email><br/>
                    <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

                    <span itemprop="streetAddress">Friedensstraße 2</span>,
                    <span itemprop="addressLocality">Hof</span><br/>

                    <span itemprop="addressRegion">Bayern</span>,
                    <span itemprop="addressCountry">Deutschland</span></span></address>
                    <div class="social-list">
                        Follow US <a href="https://www.facebook.com/ghebahhof/" target="_blank"><img src="img/ficon.png" style="width: 32px; height: 30px"> </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 fa-align-right"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.717430469421!2d11.891728815104122!3d50.315865104935234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a110b44fdf6477%3A0xacf5c004f797241f!2sFriedensstra%C3%9Fe+2%2C+95030+Hof!5e0!3m2!1sen!2sde!4v1505340407781"
                                                         width="100%" height="auto" frameborder="0" style="border:0"
                                                         allowfullscreen></iframe></div>
            </div>


        <div class=" copyright footer-copyright">
            <strong>© 2017 Ghebah Restaurant. All Rights Reserved</strong>
        </div>
    </footer>
    <!-- / footer -->

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="contactform/contactform.js"></script>
    <script src="post/post.js" ></script>
    <script src="js/menu.js"></script>
    <script src="js/bootstrap-rating-input.min.js"></script>
    <script src="js/blink.js"></script>
    <script src="js/hidenav.js"></script>

</body>
</html>
