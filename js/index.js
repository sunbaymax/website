$(function() {
	window.alert = function(name) {
		var iframe = document.createElement("IFRAME");
		iframe.style.display = "none";
		iframe.setAttribute("src", 'data:text/plain,');
		document.documentElement.appendChild(iframe);
		window.frames[0].window.alert(name);
		iframe.parentNode.removeChild(iframe);
	}

	window.confirm = function(message) {
		var iframe = document.createElement("IFRAME");
		iframe.style.display = "none";
		iframe.setAttribute("src", 'data:text/plain,');
		document.documentElement.appendChild(iframe);
		var alertFrame = window.frames[0];
		var result = alertFrame.window.confirm(message);
		iframe.parentNode.removeChild(iframe);
		return result;
	};
	$(".main-menu .navbar-nav .dropdown").mouseover(function() {
		$(this).addClass("show");
		$(this).children('.dropdown-menu').addClass("show");
	});

	$(".main-menu .navbar-nav .dropdown").mouseleave(function() {
		$(".main-menu .navbar-nav .dropdown").removeClass("show");
		$('.main-menu .navbar-nav .dropdown-menu').removeClass("show");

	})
	$('#soulutionmyTab #yyhy').click(function(e) {
		let _src=$(this).attr('cimg');
		$('#features .solutionImg').attr('src',_src);
		$(this).addClass('active')
		$(this).parent().siblings().children('a').removeClass('active')
		$("#features .tab-content #menuyiyao").addClass('active').show()
		$('#features .tab-content #menushipin,#features .tab-content #breed').removeClass("show").hide();
	})
	$('#soulutionmyTab #sphy').click(function(e) {
		let _src=$(this).attr('cimg');
		$('#features .solutionImg').attr('src',_src)
		$(this).addClass('active')
		$(this).parent().siblings().children('a').removeClass('active')
		$('#features .tab-content #menushipin').addClass("show").show();
		$('#features .tab-content #menuyiyao,#features .tab-content #breed').removeClass("show").hide()
	})
	$('#soulutionmyTab #zhyz').click(function(e) {
		let _src=$(this).attr('cimg');
		$('#features .solutionImg').attr('src',_src)
		$(this).addClass('active')
		$(this).parent().siblings().children('a').removeClass('active')
		$('#features .tab-content #breed').addClass("show").show();
		$('#features .tab-content #menuyiyao,#features .tab-content #menushipin').removeClass("show").hide()
	})
    $('#soulutionmyTab #soulutionbtn').click(function(e) {
        let type=$(this).parent().find('.active').text();
        if(type=='医药冷链'){
        	location.href = "solution.html?type=1";
        }else if(type=='食品生鲜冷链'){
        	location.href = "solution.html?type=2";
        }else{
            location.href = "solution.html?type=3";	
        }
    })
	$('#news #qynewbtn').click(function(e) {
		$("#news #newsImg").attr("src",$(".qiyenews li:first-child").attr('img'));
		$(this).addClass('active')
		$("#news #hynewbtn").removeClass('active')
		$('#news .tab-content #menuqiye').addClass("show");
		$('#news .tab-content #menuhangye').removeClass("show");
	})
	$('#news #hynewbtn').click(function(e) {
		$("#news #newsImg").attr("src",$(".hangyenews li:first-child").attr('img'));
		$(this).addClass('active')
		$("#news #qynewbtn").removeClass('active')
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('#news .tab-content #menuqiye').removeClass("show");
		$('#news .tab-content #menuqiye').hide()
		$('#news .tab-content #menuhangye').addClass("show");
	})

	$("body").on("click", '.download #tab1', function() {
		$(this).addClass("active");
		$(this).siblings().removeClass('active')
		$("body .download #tab-item1").show();
		$("body .download #tab-item2").hide();
		$("body .download #tab-item3").hide();
	});
	$("body").on("click", '.download #tab2', function() {
		$(this).siblings().removeClass('active')
		$(this).addClass("active");
		$("body .download #tab-item2").show();
		$("body .download #tab-item1").hide();
		$("body .download #tab-item3").hide();
	});
	$("body").on("click", '.download #tab3', function() {
		$(this).siblings().removeClass('active')
		$(this).addClass("active");
		$("body .download #tab-item3").show();
		$("body .download #tab-item1").hide();
		$("body .download #tab-item2").hide();
	});
	$("body").on("click", "#news #searchmore", function() {
		let curnew = $(this).parent().find('.active').text();
		let _type = '';
		if(curnew == "企业新闻") {
			_type = 1
		} else {
			_type = 2
		}
		location.href = 'news.html?type=' + _type
	});
	var oldColor = "";
    //右侧边栏
	$(document).ready(function(){
	
	    $(".side ul li").hover(function(){
	        $(this).find(".sidebox").stop().animate({"width":"200px"},200).css({"background":"#1E5CB3","padding-left":"18px","display": "flex","flex-direction": "row-reverse","justify-content": "space-between"})    
	    },function(){
	        $(this).find(".sidebox").stop().animate({"width":"50px"},200).css({"background":"#000022","padding-left":"0"})   
	    });
	    
	});
	
	//回到顶部

	$('.sidetop').on('click',function(){
		$('html,body').animate({'scrollTop':0},600);
	})
	$('.side2 li').hover(function(){
	    $(this).find('.weixin').stop().slideToggle();
	})
    
	$(".fixmenu .item .tel_img").mouseover(function() {
		console.log("123")
		setTimeout(()=>{
			$(this).css("border-radius", "10px 0px 0px 10px");
			$(this).css("background-color", "#1E5CB3");
			$(this).next().removeClass('ishidden')　
		},500)
			
		
	})
	$(".fixmenu .item .tel_img").next().mouseout(function() {
			$(this).prev().css("border-radius", "10px");
			$(this).prev().css("background-color", "#2E2E2E");
			$(this).addClass('ishidden')

	});
	$(".fixmenu .item .ma_img").mouseover(function() {
		console.log("123")
		$(".fixmenu .item .tel_img").css("border-radius", "10px");
		$(".fixmenu .item .tel_img").css("background-color", "#2E2E2E");
		$(this).parents('.item').prev().find('.telnums').addClass('ishidden');
		setTimeout(()=>{
			$(this).css("background-color", "#1E5CB3");
			$(this).prev().removeClass('ishidden');
		}, 500);
	}).mouseout(function() {
		setTimeout(()=>{
			$(this).css("background-color", "#2E2E2E");
			$(this).prev().addClass('ishidden')
		}, 500);
	});
	$(".fixmenu .item .uptop").mouseover(function() {
		$(this).css("background-color", "#1E5CB3");
	}).mouseout(function() {
		$(this).css("background-color", "#2E2E2E");
	});

	$(".uptop").click(function() {
		$('body,html').animate({
				scrollTop: 0
			},
			1000);
		$(this).css("background-color", "#2E2E2E");
	});
	$("body").on("click", ".about .item", function() {
		let _id = $(this).find('.desc').attr('idi');
		location.href = 'product.html?id=' + _id
	});
	$("body").on("click", "#news .newitem", function() {
		let id = $(this).attr('idi');
		let itype = $(this).attr('itype');
		location.href = 'news.html?id=' + id+"&type="+itype;
	});

})