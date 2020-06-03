$(function() {
		window.alert = function(name) {
		var iframe = document.createElement("IFRAME");
		iframe.style.display = "none";
		iframe.setAttribute("src", 'data:text/plain,');
		document.documentElement.appendChild(iframe);
		window.frames[0].window.alert(name);
		iframe.parentNode.removeChild(iframe);
	}

	window.confirm = function (message) {
            var iframe = document.createElement("IFRAME");
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            var alertFrame = window.frames[0];
            var result = alertFrame.window.confirm(message);
            iframe.parentNode.removeChild(iframe);
            return result;
    };
//	alert('6.1快乐！小佳≧◔◡◔≦');
	$(".main-menu .navbar-nav .dropdown").mouseover(function() {
		$(this).addClass("show");
		$(this).children('.dropdown-menu').addClass("show");
	});

	$(".main-menu .navbar-nav .dropdown").mouseleave(function() {
		$(".main-menu .navbar-nav .dropdown").removeClass("show");
		$('.main-menu .navbar-nav .dropdown-menu').removeClass("show");

	})
	$('#soulutionmyTab #yyhy').click(function(e) {
		$(this).addClass('active')
		$("#soulutionmyTab #sphy").removeClass('active')
		$('#features .tab-content #menuyiyao').addClass("show");
		$('#features .tab-content #menushipin').removeClass("show");
	})
	$('#soulutionmyTab #sphy').click(function(e) {
		$(this).addClass('active')
		$("#soulutionmyTab #yyhy").removeClass('active')
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('#features .tab-content #menuyiyao').removeClass("show");
		$('#features .tab-content #menuyiyao').hide()
		$('#features .tab-content #menushipin').addClass("show");
	})

	$('#news #qynewbtn').click(function(e) {
		$(this).addClass('active')
		$("#news #hynewbtn").removeClass('active')
		$('#news .tab-content #menuqiye').addClass("show");
		$('#news .tab-content #menuhangye').removeClass("show");
	})
	$('#news #hynewbtn').click(function(e) {
		$(this).addClass('active')
		$("#news #qynewbtn").removeClass('active')
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('#news .tab-content #menuqiye').removeClass("show");
		$('#news .tab-content #menuqiye').hide()
		$('#news .tab-content #menuhangye').addClass("show");
	})

	
	$("body").on("click",'.download #tab1',function() {
		$(this).addClass("active");
		$(this).siblings().removeClass('active')
		$("body .download #tab-item1").show();
		$("body .download #tab-item2").hide();
		$("body .download #tab-item3").hide();
	});
	$("body").on("click",'.download #tab2',function() {
		$(this).siblings().removeClass('active')
		$(this).addClass("active");
		$("body .download #tab-item2").show();
		$("body .download #tab-item1").hide();
		$("body .download #tab-item3").hide();
	});
	$("body").on("click",'.download #tab3',function() {
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
	}).mouseout(function() {
		setTimeout(() => {
			$(this).css("border-radius", "10px");
			$(this).css("background-color", "#2E2E2E");
			$(this).next().addClass('ishidden')
		}, 500);

	});
	$(".fixmenu .item .ma_img").mouseover(function() {
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
	$("body #news .newitem .newitemleft").mouseover(function() {
		$(this).children('span').css("color", "#FFFFFF")
	}).mouseout(function() {
		$(this).children('span').css("color", "#999999")
	});
	$("body").on("click",".about .item",function() {
		let _id=$(this).find('.desc').attr('idi');
		location.href = 'product.html?id='+_id
	});
	$("body").on("click","#news .newitem",function() {
		let id=$(this).attr('idi');
		location.href = 'news.html?id='+id
	});
	$("body").on("click","#news #searchmore",function() {
		let curnew=$(this).parent().find('.active').text();
		let _type='';
		if(curnew=="企业新闻"){
			_type=1
		}else{
			_type=2
		}
		location.href = 'news.html?type='+_type
	});
           $.ajax({
			type:"post",
				url:"http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/tag/index",
				async:true,
				dataType:'json',
				success:function(res){
					let labelstr='';
					$.each(res.info, function(index,value) {
						labelstr+=`<li><a href='${value.link}' target="_blank">${value.name}</a></li>`;
					});
					$('.label_link').html(labelstr);
				},
				error:function(err){
					console.log(err)
				}
			});
			$.ajax({
				type:"post",
				url:"http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/",
				async:true,
				dataType:'json',
				success:function(res){
					$('.introduction').html(res.content);
					$('.introduction').html(res.content);
					var chanpin='';
					$.each(res.product, function(index, value) {
					chanpin += `<li>
									<a href='product.html?id=${value.id}' target="_blank">${value.title}</a>
								</li>`;
				});
				$('.producttitpush').html('')
				$('.producttitpush').html(chanpin);
				},
				error: function(err) {
				console.log(err)
				}
				});
			$.ajax({
				type:"post",
				url:"http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/news/hotList/",
				async:true,
				dataType:'json',
				success:function(res){
					var newstittle='';
					$.each(res.info, function(index, value) {
					newstittle += `<li>
											<a href='news.html?id=${value.id}'>${value.title}</a>
										</li>`;
				});
				$('.newstitlepush').html('')
				$('.newstitlepush').html(newstittle);
				},
				error: function(err) {
				console.log(err)
				}
				});

})