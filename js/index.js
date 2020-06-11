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
		$('#features .solutionImg').attr('src','img/souyiyao.png');
		$(this).addClass('active')
		$("#soulutionmyTab #sphy").removeClass('active')
		$('#features .tab-content #menuyiyao').addClass("show");
		$('#features .tab-content #menushipin').removeClass("show");
	})
	$('#soulutionmyTab #sphy').click(function(e) {
		$('#features .solutionImg').attr('src','img/soushengxian.png')
		$(this).addClass('active')
		$("#soulutionmyTab #yyhy").removeClass('active')
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('#features .tab-content #menuyiyao').removeClass("show");
		$('#features .tab-content #menuyiyao').hide()
		$('#features .tab-content #menushipin').addClass("show");
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

	var oldColor = "";

	$(".fixmenu .item .tel_img").mouseover(function() {
		setTimeout(() => {
			$(this).css("border-radius", "10px 0px 0px 10px");
			$(this).css("background-color", "#1E5CB3");
			$(this).next().removeClass('ishidden')　
		}, 500);
	})
	$(".fixmenu .item .tel_img").next().mouseout(function() {
		setTimeout(() => {
			$(this).prev().css("border-radius", "10px");
			$(this).prev().css("background-color", "#2E2E2E");
			$(this).addClass('ishidden')
		}, 500);

	});
	$(".fixmenu .item .ma_img").mouseover(function() {
		$(".fixmenu .item .tel_img").css("border-radius", "10px");
		$(".fixmenu .item .tel_img").css("background-color", "#2E2E2E");
		$(this).parents('.item').prev().find('.telnums').addClass('ishidden');
		setTimeout(() => {
			$(this).css("background-color", "#1E5CB3");
			$(this).prev().removeClass('ishidden');
		}, 500);
	}).mouseout(function() {
		setTimeout(() => {
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
		//		$(this).css("border-bottom", "1px solid #cccccc")
		//		$(this).css("border-top", "1px solid #cccccc")
		//		$(this).css("border-left", "1px solid #cccccc")
		$(this).css("background-color", "#2E2E2E");
		//		$(this).prev().addClass('ishidden')
	});
	$("body").mouseover('#news .newitem .newitemleft', function() {
		$(this).children('span').css("color", "#FFFFFF")
	}).mouseout(function() {
		$(this).children('span').css("color", "#999999")
	});
	$("body").on("click", ".about .item", function() {
		let _id = $(this).find('.desc').attr('idi');
		location.href = 'product.html?id=' + _id
	});
	$("body").on("click", "#news .newitem", function() {
		let id = $(this).attr('idi');
		location.href = 'news.html?id=' + id
	});

})