$(function() {
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
	$.ajax({
		type: "post",
		url: "http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/tag/index",
		async: true,
		dataType: 'json',
		success: function(res) {
			let labelstr = '';
			$.each(res.info, function(index, value) {
				labelstr += `<li><a href='${value.link}' target="_blank">${value.name}</a></li>`;
			});
			$('.label_link').html(labelstr);
		},
		error: function(err) {
			console.log(err)
		}
	});
	$.ajax({
		type: "post",
		url: "http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/",
		async: true,
		dataType: 'json',
		success: function(res) {
			$('.introduction').html(res.content);
			$('.introduction').html(res.content);
			var chanpin = '';
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
		type: "post",
		url: "http://out.ccsc58.cc/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/news/hotList/",
		async: true,
		dataType: 'json',
		success: function(res) {
			var newstittle = '';
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
});