$(function() {

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
			$('.introduction').html(res.introduce);
			var chanpin = '';
			$.each(res.product, function(index, value) {
				chanpin += `<li>
									<a href='product.html?id=${value.id}' target="_blank">${value.title}</a>
								</li>`;
			});
			$('.producttitpush').html('')
			$('.producttitpush').html(chanpin);
			$('.newsall').text(res.news.one.length+res.news.two.length);
			$('.hangyeall').text(res.news.one.length);
			$('.qiyeall').text(res.news.two.length);
			
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
			$.each(res.data.message, function(index, value) {
				newstittle += `<li><a href='news.html?id=${value.id}'>${value.title}</a></li>`;
			});
			$('.newstitlepush').html('')
			$('.newstitlepush').html(newstittle);
		},
		error: function(err) {
			console.log(err)
		}
	});
});