"use strict";

$(function () {
  $.ajax({
    type: "post",
    url: "http://www.ccsc58.com/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/tag/index",
    async: true,
    dataType: 'json',
    success: function success(res) {
      var labelstr = '';
      $.each(res.info, function (index, value) {
        labelstr += "<li><a href='".concat(value.link, "' target=\"_blank\">").concat(value.name, "</a></li>");
      });
      $('.label_link').html(labelstr);
    },
    error: function error(err) {
      console.log(err);
    }
  });
  $.ajax({
    type: "post",
    url: "http://www.ccsc58.com/DATA_PORT_ZHONGJIZHILENG_1.02/public/",
    async: true,
    dataType: 'json',
    success: function success(res) {
      $('.introduction').html(res.introduce);
//    var chanpin = '';
//    $.each(res.product, function (index, value) {
//      chanpin += "<li>\n\t\t\t\t\t\t\t\t\t<a href='product.html?id=".concat(value.id, "' target=\"_blank\">").concat(value.title, "</a>\n\t\t\t\t\t\t\t\t</li>");
//    });
//    $('.producttitpush').html('');
//    $('.producttitpush').html(chanpin);
      $('.newsall').text(res.news.one.length + res.news.two.length);
      $('.hangyeall').text(res.news.one.length);
      $('.qiyeall').text(res.news.two.length);
    },
    error: function error(err) {
      console.log(err);
    }
  });

$.ajax({
  type: "post",
  url: "http://www.ccsc58.com/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/Product/products",
  async: true,
  data: {
    pagesize: 40
  },
  dataType: 'json',
  success: function success(res) {
    console.log(res);
    var chanpin = ''; //$('.producttitpush').html('');

    var _loop = function _loop(i) {
      if (i == 1) {
        chanpin = "<li><div class='tittle aitem'><span>\u6E29\u6E7F\u5EA6\u8BB0\u5F55\u4EEA</span>  <img src='website/img/icon-zhedie.png' class='imgright'/></div><div class='content'>";
      } else if (i == 2) {
        chanpin = "<li><div class='tittle aitem'><span>\u4FDD\u6E29\u7BB1</span>  <img src='website/img/icon-zhedie.png' class='imgright'/></div><div class='content'>";
      } else if (i == 4) {
        chanpin = "<li><div class='tittle aitem'><span>\u51B0\u6392</span>  <img src='website/img/icon-zhedie.png' class='imgright'/></div><div class='content'>";
      } else if (i == 3) {
        chanpin = "<li><div class='tittle aitem'><span>\u4EA7\u54C1\u81EA\u63A7\u7C7B</span>  <img src='website/img/icon-zhedie.png' class='imgright'/></div><div class='content'>";
      }


      $.each(res.data.list, function (index, value) {
        if (value.type == i) {
          chanpin += "   \n\t             <dl>\n\t                <dd>\n\t                  <a href='product.html?id=".concat(value.id, "'>").concat(value.title, "</a>\n\t                </dd>\n\t               \n\t            </dl>");
        }
      });
      chanpin += "</div></li>";
      console.log(chanpin);
      $('.producttitpush').append(chanpin);
    };

    for (var i = 1; i < 5; i++) {
      _loop(i);
    }
  },
  error: function error(err) {}
});
//$.ajax({
//	type:"post",
//	url:"http://www.ccsc58.com/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/Product/products",
//	async:true,
//	data:{
//		pagesize:40
//	},
//	dataType:'json',
//	success:function(res){
//		console.log(res)
//		  var chanpin = '';
//		   //$('.producttitpush').html('');
//		   for(let i=1;i<5;i++){
//		   	if(i==1){
//		   		chanpin = `<li><div class='tittle aitem'><span>温湿度记录仪</span>  <img src='img/icon-zhedie.png' class='imgright'/></div><div class='content'>`
//		   	}else if(i==2){
//		   		chanpin = `<li><div class='tittle aitem'><span>保温箱</span>  <img src='img/icon-zhedie.png' class='imgright'/></div><div class='content'>`
//		   	}else if(i==4){
//		   		chanpin = `<li><div class='tittle aitem'><span>冰排</span>  <img src='img/icon-zhedie.png' class='imgright'/></div><div class='content'>`
//		   	}else if(i==3){
//		   		chanpin = `<li><div class='tittle aitem'><span>产品自控类</span>  <img src='img/icon-zhedie.png' class='imgright'/></div><div class='content'>`
//		   	}
//		   	//chanpin = `<li><div class='tittle aitem'><span>哈哈</span>  <img src='img/icon-zhedie.png' class='imgright'/></div>`
//		   
//	      $.each(res.data.list, function (index, value) {
//	      	if(value.type==i){
//	      			chanpin +=`   
//	             <dl>
//	                <dd>
//	                  <a href='product.html?id=${value.id}'>${value.title}</a>
//	                </dd>
//	               
//	            </dl>`
//	      	}
//	       	            
//	      });
//	      chanpin+=`</div></li>`;
//	      console.log(chanpin)
//	       $('.producttitpush').append(chanpin);
//    }
//   
//	},
//	error:function(err){
//		
//	}
//});
$('body').on('click','.producttitpush .aitem',function(){
	$(this).next().toggle()
})
  $.ajax({
    type: "post",
    url: "http://www.ccsc58.com/DATA_PORT_ZHONGJIZHILENG_1.02/public/index.php/index/news/hotList/",
    async: true,
    dataType: 'json',
    success: function success(res) {
      var newstittle = '';
      $.each(res.data.message, function (index, value) {
        newstittle += "<li><a href='news.html?id=".concat(value.id, "'>").concat(value.title, "</a></li>");
      });
      $('.newstitlepush').html('');
      $('.newstitlepush').html(newstittle);
    },
    error: function error(err) {
      console.log(err);
    }
  });
  });