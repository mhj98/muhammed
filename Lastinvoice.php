<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
                <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Shopping | Last invoice sent</title>

        <!-- Bootstrap -->
        <link href="css/bootstrap_ltr.css" rel="stylesheet">
        <link href="css/style_ltr.css" rel="stylesheet">
        <link href="css/font-awesome.css" rel="stylesheet">
        <link href="owl/assets/owl.carousel.min.css" rel="stylesheet" type="text/css"/>
        <link href="owl/assets/owl.theme.default.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/init.css" rel="stylesheet" type="text/css"/>
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <input type="hidden" id="lang" value="en" />
        <nav class="navbar navbar-default" style="background-color: #c3181f !important">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="shopping.php"><img width="35" class='pull-left img-logo' src="../icon/ico.png"><span class='pull-left'> Last invoice sent</span></a>
                </div>
                <div class="visible-xs fixed-cart" >
                    <ul class="navbar-nav nav navbar-right customer-nav-info">
                                                          <li class='cart-ex-ico'><a href='procurement_list.php'><i class='glyphicon glyphicon-shopping-cart'></i>
                                    <span class='notification'>
                                        0                                    </span>
                                </a>
                            </li>
 
                                                                                            </ul>

                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                            <ul class='navbar-nav nav navbar-right customer-nav-info'>

                                                            <li class='welcome'>
                                    <a href='login.php'>
                                        <label>Login</label>
                                    </a>
                                </li>
                                

                        </ul>
                                        <form class="navbar-form navbar-right" action="mat.php">
                        <div class="form-group">
                            <input type="text" name="k" value='' class="form-control" placeholder="Search">
                        </div>

                        <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                    </form>
                    <form class="navbar-form navbar-right">
                        <select id="SelectLang" class='btn btn-default dropdown-toggle' onchange="SetLanguage(this)">
                            <option selected='' value="en">English</option>
                            <option  value="ar">??????????????</option>
                            <option  value="tr" >T??rkiye</option>		 
                        </select>	 	 		 		 
                    </form>

                    <ul class="navbar-nav nav navbar-right">

                        <li class='cart-ex-ico'>
                            <a href='https://play.google.com/store/apps/details?id=com.goldendream.lezzet' target='_blank'><i class='fa fa-android'></i></a>
                        </li>
                        <li class='cart-ex-ico'>
                            <a href='https://apps.apple.com/us/app/id1273569423' target='_blank'><i class='fa fa-apple'></i></a>
                        </li>
                                                             <li class='cart-ex-ico hidden-xs'><a href='procurement_list.php'><i class='glyphicon glyphicon-shopping-cart'></i>
                                    <span class='notification'>
                                        0                                    </span>
                                </a>
                            </li>
 
                                                        </ul>




                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <div class="container"></div>
<script src="js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="owl/owl.carousel.min.js" type="text/javascript"></script>
<script src="js/function.js"></script>
<script src="js/main.js"></script>
</body>
</html>