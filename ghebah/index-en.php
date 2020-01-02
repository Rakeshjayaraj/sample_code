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

$query ="SELECT * FROM days_menu where dayID='$dayNum' ORDER BY menuNum";
$daysMenuItem = $db_handle->runQuery($query);

$DayEng = $businessMenu->getDayEng($dayNum);
$DayDeu = $businessMenu->getDayDeu($dayNum);
$Suppe  = $businessMenu->getSuppe($dayNum);

?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ghebah</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Satisfy|Bree+Serif|Candal|PT+Sans">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

  </head>
  <body>
    <!--banner-->
    <section id="banner">
      <div class="bg-color">
        <div class="container">
        <div class="row">
          <div class="inner text-center">
            <h1 class="logo-name">Ghebah</h1>
            <h2>Commitment to Excellence</h2>
            <p>Specialized in Singapore Cuisine!!</p>
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
                <a class="navbar-brand" href="#"><img id="logo" src="img/logo.gif" class="logo"></a>
            </div>
            <div id="myMenu" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#restaurant">Restaurant</a></li>
                    <li><a href="#bar">Cocktails & Bar</a></li>
                    <li><a href="#menu-list">Menu</a></li>
                    <li><a  id="blink" href="#business">Business Lunch</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#review">Reviews</a></li>
  		    <li><a href="https://www.facebook.com/ghebahhof/" target="_blank"><img src="img/ficon.png" style="height: 28px; width: 28px;"></a> </li>
                    <li><a href="https://plus.google.com/u/0/110804900155872700646" target="_blank"><img src="img/gogle.png" style="height: 28px; width: 28px;"></a> </li>
                    <li> <a href="index.php"><img src="img/de.png" /></a></li>
               
                </ul>
                </div>
            </div>
        </nav>
       <!-- /navigation -->
    <!--about-->
    <section id="restaurant" class="section-padding" style="background-color: ##fcf8e3 ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center marb-35">
                    <h1 class="header-h">Delicious Journey</h1>
                    <p class="header-p">A commitment to excellence, with a reputation unrivalled and an ambience<br>
                        unmatched, with a long history of customer satisfaction we are proud <br>
                        to announce opening of our new venue Singaporean restaurant <strong>Ghebah</strong> </p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="col-md-6 col-sm-6">
                        <div class="about-info">
                            <h2 class="heading">Our Specialities</h2>
                            <p>We are always being high rated by our beloved customers. Come experience our Ghebah vibe where
                                attention to detail is our only motto and serving quality times blended with the best of toothsome delicacies
                                is our only ambition. Continuing our generous service for Indian dishes now we want to give
                                taste of south eastern Asian countries at our new venue.</p>
                            <div class="details-list">
                                <ul>
                                    <li><i class="fa fa-check"></i>Singapore Cuisine is characterise by the cultural influences of the represented ethics.</li>
                                    <li><i class="fa fa-check"></i> You will be offered an extensive selection of different specialities.</li>
                                    <li><i class="fa fa-check"></i>You can experience cultural trip to Singapore, Malaysian, Indonesia, and Thailand. </li>
                                    <li><i class="fa fa-check"></i>Grand principle of <strong>Ghebah</strong> is preservation of taste and dishes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <img src="img/gfood.png" alt="" class="img-responsive">
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
                        <p class="header-p" style="color: #f2dede">Wir versuchen immer, Ihre Zeit etwas Besonderes zu machen.</p>
                    </div>
                    <div class="col-md-12" style="padding-bottom:60px;">
                        <div class="item active left">
                          <div class="col-md-6 col-sm-6 left-images">
                           <img src="img/bar3.png" class="img-responsive">
                         </div>
                         <div class="col-md-5 details-text">
                          <div class="content-holder">
                            <h2>Joyful party</h2>
                            <p> Cocktail bars and happy bars. Relax in the bar, meet your friends and
                                chill out in our perfectly cool ambience.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ event -->

        <!-- contact -->
        <section id="contact" class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="header-h">Book Your table</h1>
                        <p class="header-p">We are also a warm and welcoming host for your special events. Be it a wedding reception or birthday party,
                            family & friends gathering or any events we will be glad to make your celebration memorable. You can either give
                            us a call and have a chat or just send us message so that we will get back to you.</p>
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
                                <p class="header-p" style="font-weight: bold">09281/8184331</p>
                                <p class="header-p" style="font-weight: bold">09281/8187778</p>
                            </div>
                        </div>
                        <div class="media-2">
                            <div class="media-left">
                                <div class="contact-email bg-14 text-center"><span class="hour-icon fa fa-clock-o"></span></div>
                            </div>
                            <div class="media-body timetable">
                                <h4 class="dark-blue regular">Öffnungszeiten</h4>
                                <p class="header-p" style="font-weight: bold">Montag - Samtag<br>
                                    <button class="button-time"> 11:00 - 15:00  und 17:00-23:00</button><br>
                                    Sonntag und Friertag <br>
                                    <button class="button-time"> 11:00 -22:00</button><br></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7">
                        <form id="contact" action="" method="post" role="form" class="contactForm">
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
                            <li><a class="filter" onclick='return toggleOther(2)'>Soup</a></li>
                            <li><a class="filter" onclick='return toggleOther(3)'>Starters</a></li>
                            <li><a class="filter" onclick='return toggle()'>Main Course</a></li>
                            <li><a class="filter" onclick='return toggleOther(4)'>Dessert</a></li>
                            <div id="mainCourse"></div>
                        </ul>
                    </div>
                    <div id="main_menu_items"></div>
                </div>
        </section>
        <!--/ menu -->
        <section id="business" class="section-padding">
            <div class="container container-menu">
                <div class="col-md-12 text-center marb-35">
                <h1 class="header-h"> Business Lunch : <?php echo $DayEng ?></h1>
                <h4  style="color: #1aff3f">From 11:00 to 15:00 (Monday to Friday)</h4>
                <h4  style="color: #1aff3f">All dishes are served with basmati rice, lettuce and <?php echo $Suppe ?> soup</h4>
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
                        <h3 class="h4" style="color: #1aff3f">To the daily menu our recommendation </h3>
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
                        <!--</div>-->

                    </div>
            </section>


            <!-- review -->
    <section id="review" class="section-padding">

        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="header-h">Customer Review</h1>
                    <p class="header-p">Customer reviews are great advertisements to us. We will be glad to hear your voice. </p>
                    <button type="button" style="align-self: center" data-toggle="collapse" data-target="#collapsethis">Give review</button>
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
                        <h4 class="widget-title">Ghebah<br>Singapore Restaurant</h4>
                        <address><email>Email:info@ghebah.de</email><br>
                            Friedensstraße 2, Hof<br>
                            Bavaria, Germany</address>
                        <div class="social-list">
                            Follow US <a href="https://www.facebook.com/ghebahhof/" target="_blank"><img src="img/ficon.png" style="width: 32px; height: 30px"> </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 fa-align-right"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.717430469421!2d11.891728815104122!3d50.315865104935234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a110b44fdf6477%3A0xacf5c004f797241f!2sFriedensstra%C3%9Fe+2%2C+95030+Hof!5e0!3m2!1sen!2sde!4v1505340407781"
                                                             width="100%" height="auto" frameborder="0" style="border:0"
                                                             allowfullscreen></iframe></div>
            </div>


            <div class=" copyright footer-copyright">
                <strong>© 2017 Ghebah Restaurant. All Rights Reserved</strong>
            </div>
        </footer>
    
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
