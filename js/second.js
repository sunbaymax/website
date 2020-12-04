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
      var chanpin = '';
      $.each(res.product, function (index, value) {
        chanpin += "<li>\n\t\t\t\t\t\t\t\t\t<a href='product.html?id=".concat(value.id, "' target=\"_blank\">").concat(value.title, "</a>\n\t\t\t\t\t\t\t\t</li>");
      });
      $('.producttitpush').html('');
      $('.producttitpush').html(chanpin);
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